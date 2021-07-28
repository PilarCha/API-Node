// verbose produces looooong stack traces
const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const http = require('http');


const app = express();
const server = http.createServer(app);
const db = new sqlite3.Database('./database/employee.db');

db.run('CREATE TABLE IF NOT EXISTS emp(id TEXT, name TEXT)');

app.get('/', function(req,res) {
  res.send("<h3> Hi there, You are going to perform CRUD operations.........<br>[CREATE] Please enter 'http://localhost:3000/add/(id number)/(name)' to add new employee to the database.........................<br>[READ] 'http://localhost:3000/view/(id number)' to view an employee.........................<br>[UPDATE] 'http://localhost:3000/update/(id number)/(new name)' to update an employee.....................<br>[DELETE] 'http://localhost:3000/del/(id number)' to delete an employee...............................<BR>Before closing this window, kindly enter 'http://localhost:3000/close' to close the database connection <h3>");
})

// Serialize = 1 statement can execute at a time. Queue will form if its multiple requests
app.get('/add/:id/:name', function(req,res) {
  db.serialize(() => {
    db.run('INSERT INTO emp(id,name) VALUES(?,?)', [req.params.id,req.params.name], function(err) {
      if(err) {
        return console.log(err.message);
      }
      console.log("New Employee has been added");
      res.send(`New Employee has been added into the database with ID = ${req.params.id} and Name = ${req.params.name}`)
    })
  })
})

// TODO: READ
app.get('/view/:id', function(req,res) {
  db.serialize(() => {
    db.each('SELECT id ID, name NAME from emp WHERE id = ?', [req.params.id], function(err,row) {
      if(err) {
        res.send('Error encountered while displaying');
        return console.error(err.message)
      }
      res.send(` ID: ${row.ID},  Name: ${row.NAME}`);
      console.log("Entry displayed successfully")
    })
  })
})

// TODO: UPDATE

// TODO: DELETE



server.listen(3000,function() {
  console.log('Server listening on port:3000')
})
