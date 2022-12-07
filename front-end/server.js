const express = require('express');
const { fstat } = require('fs');
const path = require('path');
const app = express()
const port = 80
app.use(express.static('public'))

const request = require('request');
const url = 'http://3.232.52.89/';
app.get('/getUser', function(req,res){
  res.setHeader('Content-Type', 'application/json');
  
})

app.get('/getList', function(req,res){
  res.setHeader('Content-Type', 'application/json');
  //res.end(JSON.stringify(trips));
  
  request(url, function(error, response, body) {
    console.error('error:', error);
    console.log('statusCode:', response && response.statusCode); 
    var arrayList = JSON.parse(body);
    res.end(JSON.stringify(arrayList));
  });
});

app.listen(port, () => {

  console.log(`Example app listening at http://localhost:${port}`)

})

