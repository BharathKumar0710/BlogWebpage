//declaration of Mysql and Express
const mysql = require('mysql');
const express = require("express");
var cors = require('cors')

// creating MySql connection
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin123',
  database: 'my_db'
});

// Condition to check if connection exits
connection.connect(function (con) {
  if (con) throw con;
  console.log("Connected");
});

// import express from 'express';
// const app = express();
// app.listen(3000, () =>
//     console.log('Example app listening on port 3000!'),
// );

// To check the connection for node
const app = express();
var bodyParser = require('body-parser')
app.listen(4000, () => {
  console.log("Server is listening on port: 4000");
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))

// parse application/json
app.use(bodyParser.json())
app.use(cors())

// No endpoint
app.get('', (req, res) => {
  res.send('Default Endpoint')
})

// Sample value Endpoint
app.get('/sample', (req, res) => {
  res.send('Sample Triggered')
})


app.post('/submit', (req, res) => {
  let data = req.body
  console.log(data);

  var newTable = "CREATE TABLE IF NOT EXISTS NewUser (Username VARCHAR(255), Email VARCHAR(255), Password VARCHAR(255))";
  connection.query(newTable, function (con) {
    if (con) throw con;
    console.log("Table created");
  });

  var newTable = "INSERT INTO NewUser ( Username ,Email , Password ) VALUES(" + '"' + data.myName + '"' + ',' + '"' + data.myMail + '"' + ',' + '"' + data.pass + '"' + ")";
  connection.query(newTable, function (con) {
    if (con) throw con;
    console.log("record inserted in table");
  });



  console.log(data)
 
})


app.get('/remove', (req, res) => {



  var newTable = "DROP TABLE IF EXISTS NewUser";
  connection.query(newTable, function (con, result) {
    if (con) throw con;
    console.log("Table deleted");
    res.send("Table deleted")
  });


});