const fetchCorePapers = async (days = 7) => {
  // create proper url
  const date = new Date(new Date().getTime() - (days * 24 * 60 * 60 * 1000));
  const url = process.env.CORE_API_URL
    + 'repositoryDocument.metadataUpdated%3A%3E'
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

  console.log(json.results);
  return json.results;
};

const fetchCorePaper = async id => {
  return;
};

export { fetchCorePapers, fetchCorePaper };
