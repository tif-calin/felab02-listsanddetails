
const fetchCorePapers = async (days = 7) => {
  // create url with params
  const date = new Date(new Date().getTime() - (days * 24 * 60 * 60 * 1000));
  const url = process.env.CORE_API_URL
    + '/articles/search/repositoryDocument.metadataUpdated:>'
    + date.toISOString().split('T')[0]
    + '?'
    + new URLSearchParams({ 
      metaData: true,
      page: 1,
      pageSize: 100,
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
  const url = process.env.CORE_API_KEY + '/articles/get/' 
    + coreId
    + '?'
    + new URLSearchParams({
      apiKey: process.env.CORE_API_KEY,
      fullText: true,
      similar: true,
      urls: true
    })
  ;

  // get json response
  const resp = await fetch(url);
  const json = await resp.json();

  return json.error ? null : json.results;
};

export { fetchCorePapers, fetchCorePaper };
