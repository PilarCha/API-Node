// import React from "react";
import logo from "./logo.svg";
import "./App.css";
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ height: 300, width: '100%' }}>
          {data ? (
            <DataGrid
              rows={data}
              columns={columns}
              pageSize={2}
              checkboxSelection
              disableSelectionOnClick
            />
          ) :(
            <p> Loadiiiing </p>
          )}

        </div>
      </header>
    </div>
  );
}

export default App;
