import fetch from 'node-fetch'

export default async function Auth(request, response) {
  const { email, password } = request.body;
  
  const account = {
    email,
    password,
  }

  fetch('https://irt2wbo6ab.execute-api.us-east-2.amazonaws.com/v1/signin ', {
    method: 'post',
    body: JSON.stringify(account),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => response.json())
    .then(json => { return response.json(json) });
}