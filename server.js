const express = require('express');
const app = express();

app.get('/', (request, response) => {

response.send('Node server')
})
app.post('/', function (request, response) {
    response.send('new post')
  })

app.listen(3000);
console.log('Localhost: 3000');