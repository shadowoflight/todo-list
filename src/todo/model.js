const mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

const model = {
    getDeletedItems: () => {
        MongoClient.connect(url, function(err, db) {
            var dbo = db.db("mydb");
            dbo.collection("deleteditems").find({}).toArray(function(err, deleteditems) {
                if (err) throw err;
                return deleteditems ;
               
              });
            })

    },
    sendDeletedItems : (deleteditems) => {
        MongoClient.connect(url, function(err, db) {
            var dbo = db.db("mydb");
        dbo.collection("deleteditems").insertOne(deleteditems, function(err, res) {
            if (err) throw err;
            console.log("1 item is  inserted");
            db.close();
          });
        })
    }

}
module.exports = model;

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("deleteditems", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });