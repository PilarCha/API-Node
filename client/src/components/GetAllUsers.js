import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

function getAllUsers () {
  const [data, setData] = React.useState(null);

  // do this after render
  React.useEffect(() => {
    fetch("/all")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const columns = [
    {field:'id', headerName:'ID', width:90},
    {field:'name', headerName:'NAME', width:150, editable:true},
  ]
  render (
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
  )

}

export default getAllUsers;
