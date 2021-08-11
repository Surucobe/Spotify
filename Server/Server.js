const express = require('express');
const colors = require('colors');
const app = express();
const port = 8080;

app.get('/', (req, res) =>{
   console.log('currently in the root')
})

app.get('/login', (req, res) =>{
  console.log('Moving onto the login section')
})

console.log(`Listening to port: ` + `${port}`.red)

app.listen(port);
