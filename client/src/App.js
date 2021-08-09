// import React from "react";
import logo from "./logo.svg";
import "./App.css";
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import {BrowserRouter as Router} from 'react-router-dom'
import FullWidthTabs from './components/TabsHeader.js'

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/all")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const columns = [
    {field:'id', headerName:'ID', width:90},
    {field:'name', headerName:'NAME', width:150, editable:true},

  ]
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div style={{ height: 300, width: '100%' }}>
          {data ? (
            <DataGrid
              rows={data}
              columns={columns}
              pageSize={7}
            />
          ) : (
            <p> Loadiiiing </p>
          )}

        </div>
      </div>
    </Router>
  );
}

export default App;
