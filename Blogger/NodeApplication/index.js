//declaration of Mysql, Express and Cors
const mysql = require("mysql");
const express = require("express");
var path = require("path");
// var session = require("express-session");
var cors = require("cors");
var bodyParser = require("body-parser");

// creating MySql connection
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin123",
  database: "my_db"
});

// Condition to check if connection exits
connection.connect(function(con) {
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
var bodyParser = require("body-parser");
app.listen(4000, () => {
  console.log("Server is listening on port: 4000");
});

// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// parse application/json
app.use(bodyParser.json());
app.use(cors());

// // No endpoint
// app.get("", (req, res) => {
//   res.send("Default Endpoint");
// });

// // Sample value Endpoint
// app.get("/sample", (req, res) => {
//   res.send("Sample Triggered");
// });

app.post("/submit", (req, res) => {
  let data = req.body;
  console.log(data);

  // Creating unique Blog-table
  var newTable =
    "CREATE TABLE IF NOT EXISTS NewBlogData (Name VARCHAR(255),  Mail VARCHAR(255),Password VARCHAR(255))";
  connection.query(newTable, function(con) {
    if (con) throw con;
    console.log("Blog  created");
  });

  // Creating Blog-table
  var newTable =
  "INSERT INTO NewBlogData ( Name ,Mail,Password) VALUES(" +'"' +data.name +'"' +"," +'"' +data.mail +'"' +"," +'"' +data.password +'"' +")";

  connection.query(newTable, function(con) {
    if (con) throw con;
    console.log("Blog has been updated");
  });
  console.log(data);
});

// Deleting Blog-Table
app.get("/remove", (req, res) => {
  var newTable = "DROP TABLE IF EXISTS NewBlogData";
  connection.query(newTable, function(con, result) {
    if (con) throw con;
    console.log("Table deleted");
    res.send("Table deleted");
  });

  // for logging in

  //   var app = express();
  // app.use(session({
  //     secret: 'secret',
  //     resave: true,
  //     saveUninitialized: true
  // }));
  // app.use(bodyParser.urlencoded({extended : true}));
  // app.use(bodyParser.json());

  // app.post('/home', function(request, response) {
  //     var username = request.body.username;
  //     var password = request.body.password;
  //     if (username && password) {
  //         connection.query('SELECT * FROM NewBlogData WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
  //             if (results.length > 0) {
  //                 request.session.loggedin = true;
  //                 request.session.username = username;
  //                 response.redirect('/home');
  //             } else {
  //                 response.send('Incorrect Username and/or Password!');
  //             }
  //             response.end();
  //         });
  //     } else {
  //         response.send('Please enter Username and Password!');
  //         response.end();
  //     }
  // });

  // app.get('/home', function(request, response) {
  //     if (request.session.loggedin) {
  //         response.send('Welcome back, ' + request.session.username + '!');
  //     } else {
  //         response.send('Please login to view this page!');
  //     }
  //     response.end();
  // });
});
