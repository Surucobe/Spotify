const express = require('express');
const Backend = express();
const port = 3001;

Backend.get('/', (req, res) =>{
	console.log('currently in the root')
})

Backend.listen(port)