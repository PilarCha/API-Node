// verbose produces looooong stack traces
const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const http = require('http');


const app = express();
const server = http.createServer(app);
const db = new sqlite3.database('./database/employee.db');

db.run('CREATE TABLE IF NOT EXISTS emp(id TEXT, name TEXT)');
