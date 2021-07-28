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



server.listen(3000,function() {
  console.log('Server listening on port:3000')
})
