// Add your code here
function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const data = {
      name: name,
      email: email
    };
  
    const configObject = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    };
  
    return fetch(url, configObject)
      .then(response => response.json())
      .then(json => {
        document.body.innerHTML += json.id;
      })
      .catch(error => {
        document.body.innerHTML += error.message;
      });
  }
  
