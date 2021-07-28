
const fetchCoreValidPapers = async (num = 30) => {
  const date = new Date();
  const papers = [];

  // loop through calls until we get the intended amount of papers
  let i = 1;
  while (papers.length < num) {
    // get papers from core api
    const corePapers = await fetchCorePapers(7, i);
    
    // loop through papers and add valid ones to array
    corePapers.forEach(paper => {
      if (paper.publisher 
        && Number(paper.year) <= Number(date.getFullYear())
        && paper.doi && paper.doi.length > 0
      ) papers.push(paper);

      // if we have enough papers, return array
      if (papers.length >= num) return papers;
    });

    i++;
  }

  return papers;
};

const fetchCorePapers = async (days = 7, page = 1) => {
  // create url with params
  const date = new Date(new Date().getTime() - (days * 24 * 60 * 60 * 1000));
  const url = process.env.CORE_API_URL
    + '/articles/search/"repositoryDocument.metadataUpdated:>'
    + date.toISOString().split('T')[0]
    + ' AND year:<'
    + (Number(date.getFullYear()) + 1)
    + '"?'
    + new URLSearchParams({ 
      metaData: true,
      page,
      pageSize: 200,
      apiKey: process.env.CORE_API_KEY
    })
  ;
  
  // get json response
  const resp = await fetch(url);
  const json = await resp.json();

  return json.error ? [] : json.data;
};

const fetchCorePaper = async coreId => {
  // create url with params
  const url = process.env.CORE_API_URL + '/articles/get/' 
    + coreId
    + '?'
    + new URLSearchParams({
      fullText: true,
      similar: true,
      urls: true,
      apiKey: process.env.CORE_API_KEY
    })
  ;

  // get json response
  const resp = await fetch(url);
  const json = await resp.json();

  return json.error ? null : json.data;
};

export { fetchCorePapers, fetchCorePaper, fetchCoreValidPapers };
