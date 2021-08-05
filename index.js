// verbose produces looooong stack traces
const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const http = require('http');


const app = express();
const server = http.createServer(app);
const db = new sqlite3.Database('./database/employee.db');

db.run('CREATE TABLE IF NOT EXISTS emp(id TEXT, name TEXT)');

app.get('/', (req,res) => {
  res.send("<h3> Hi there, You are going to perform CRUD operations.........<br>[CREATE] Please enter 'http://localhost:3000/add/(id number)/(name)' to add new employee to the database.........................<br>[READ] 'http://localhost:3000/view/(id number)' to view an employee.........................<br>[UPDATE] 'http://localhost:3000/update/(id number)/(new name)' to update an employee.....................<br>[DELETE] 'http://localhost:3000/del/(id number)' to delete an employee...............................<BR>Before closing this window, kindly enter 'http://localhost:3000/close' to close the database connection <h3>");
})

// Serialize = 1 statement can execute at a time. Queue will form if its multiple requests
app.get('/add/:id/:name', (req,res) => {
  db.serialize(() => {
    db.run('INSERT INTO emp(id,name) VALUES(?,?)', [req.params.id,req.params.name], (err) => {
      if(err) {
        console.log(err.message);
      }
      console.log("New Employee has been added");
      res.send(`New Employee has been added into the database with ID = ${req.params.id} and Name = ${req.params.name}`)
    })
  })
})

// TODO: READ
app.get('/view/:id', (req,res) => {
  db.serialize(() => {
    db.each('SELECT id ID, name NAME from emp WHERE id = ?', [req.params.id], (err,row) => {
      if(err) {
        res.send('Error encountered while displaying');
        console.error(err.message)
      }
      res.send(` ID: ${row.ID},  Name: ${row.NAME}`);
      console.log("Entry displayed successfully")
    })
  })
})

// READ ALL
// app.get('/view/all', function(req,res) {
//   db.serialize(() => {
//     db.each('Select * FROM emp' , (err,row) => {
//       if(err) {
//         res.send("Error trying to display all");
//         return console.error(err.message);
//       }
//       return console.log(`${row.name}`)
//       // res.send(`${row}`);
//       console.log('successfully displayed all')
//     })
//   })
// })
app.get('/all', (req,res) => {
  db.serialize(() => {
    db.all('SELECT * from emp WHERE id IS NOT NULL', (err,row) => {
      if(err) {
        res.send('Error encountered while displaying');
        console.error(err.message)
      }
      res.send(` ID: ${row.ID},  Name: ${row.NAME}`);
      console.log(row)
      console.log("Entry displayed successfully")
    })
  })
})

// TODO: UPDATE
app.get('/update/:id/:name' , (req,res) => {
  db.serialize(() => {
    db.run('UPDATE emp SET name = ? Where id = ?', [req.params.name,req.params.id], (err) => {
      if(err) {
        res.send("Error endountered while updating");
        console.error(err.message)
      }
      res.send("entry updated successfully");
      console.log('Entry updated successfully');
    })
  })
})

// TODO: DELETE
app.get('/del/:id', (req,res) => {
  db.serialize(() => {
    db.run('DELETE from emp where id = ?', [req.params.id], (err) => {
      if(err) {
        res.send("Error encountered while deleting");
        console.error(err.message);
      }
      res.send("Entry Deleted successfully");
      console.log('Entry Deleted successfully');
    })
  })
})



server.listen(3000,function() {
  console.log('Server listening on port:3000')
})
