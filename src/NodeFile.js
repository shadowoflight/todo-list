const http = require('http');
const express =require('express');
const port =5000;
const app=express();
const server = http.createServer((req, res) => {
    res.statusCode = 200;
});
server.listen(port, () => {
    console.log(`Server running at ${port}/`);
  });
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/mydb";
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("deleteditems", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });
  

 //requiring router
 const todorouter = require('./todo/router');
 app.use(express.json());
 app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/users', todorouter);

module.exports = app;
 