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


  if(!data) {
    return  (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Loaddddddiiinggg....</p>
        </header>
      </div>
    )
  }
  const columns = [    
    {field:'id', headerName:'ID', width:90},
    {field:'name', headerName:'NAME', width:150, editable:true},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map(stuff => (
              <tr key={stuff.id}>
                <td key = {1}> {stuff.id} </td>
                <td key = {2}> {stuff.name} </td>
              </tr>
            ))}
          </tbody>

      </header>
    </div>
  );
}

export default App;
