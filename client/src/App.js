// import React from "react";
import logo from "./logo.svg";
import "./App.css";
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {BrowserRouter as Router} from 'react-router-dom'
import FullWidthTabs from './components/TabsHeader.js'

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <FullWidthTabs / >
      </div>
    </Router>
  );
}

export default App;
