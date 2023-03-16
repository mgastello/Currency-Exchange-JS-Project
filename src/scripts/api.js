const options = {method: 'GET', headers: {accept: 'application/json'}};

export const rates = fetch('https://api.fastforex.io/fetch-all?api_key=5a8e449c94-fbe0b8a6b0-rr9hum', options)
  .then(response => response.json())
  .then(response => response)
  .catch(err => console.error(err));