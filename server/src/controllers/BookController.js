import fetch from 'node-fetch'

export default class Books {
  async index(request, response) {
    const token = request.headers.authorization;
    
    fetch('https://irt2wbo6ab.execute-api.us-east-2.amazonaws.com/v1/books ', {
      method: 'get',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
       },
    })
      .then(response => response.json())
      .then(json => { return response.json(json) });
  }
  
  async update(request, response) {
    const token = request.headers.authorization;
    const { id } = request.params;
    const { name, year } = request.body;
    
    const book = {
      name,
      year,
    }

    fetch(`https://irt2wbo6ab.execute-api.us-east-2.amazonaws.com/v1/book/${id}`, {
      method: 'put',
      body: JSON.stringify(book),
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
       },
    })
      .then(response => response.json())
      .then(json => { return response.json(json) });
  }
}