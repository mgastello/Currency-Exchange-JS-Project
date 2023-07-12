const options = {method: 'GET', headers: {accept: 'application/json'}};

export const rates = fetch('https://api.fastforex.io/fetch-all?api_key=da9d2887c7-fdabd56363-rxp2oj', options)
  .then(response => response.json())
  .then(response => response)
  .catch(err => console.error(err));