import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/all")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  alert(data[0].id)
  if(!data) {
    return  (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
