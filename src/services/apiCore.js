const fetchCorePapers = async (days = 7) => {
  // create proper url
  const date = new Date(new Date().getTime() - (days * 24 * 60 * 60 * 1000));
  const url = process.env.CORE_API_URL
    + '/articles/search/repositoryDocument.metadataUpdated%3A%3E'
    + (`${date.getFullYear()}-${(date).getDate() - days}-${date.getMonth()}`
      .replace('/', '-')
    )
  ;
  
  // get json response
  const resp = await fetch(url).query({ 
    apiKey: process.env.CORE_API_KEY,
    page: 1,
    pageSize: 100
  });
  const json = await resp.json();

  console.log(json);
  return json.results.data;
};

const fetchCorePaper = async coreId => {
  // create url
  const url = process.env.CORE_API_KEY + '/articles/get/' + coreId;

  // get json response
  const resp = await fetch(url).query({
    apiKey: process.env.CORE_API_KEY,
    fullText: true,
    similar: true,
    urls: true
  });
  const json = await resp.json();

  console.log(json);
  return json.results;
};

export { fetchCorePapers, fetchCorePaper };
