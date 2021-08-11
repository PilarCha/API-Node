import TextField from '@material-ui/core/TextField';
import React from 'react';
import Button from '@material-ui/core/Button';
import { useInput } from '../hooks/input-hook';
import SimpleSnackbar from './SimpleSnackbar'

function CreateUsers(props) {
  //uses a custom Hook. Incorporates the setting of value with reset as well
  const { value:Id, bind:bindId, reset:resetId } = useInput("");
  const { value:Name, bind:bindName, reset:resetName } = useInput("");
  // i used this to keep track of the data once received from the database
  const [ data, setData ] = React.useState(null)

  const handleSubmit = () => {
    fetch(`add/${Id}/${Name}`)
      .then((res) => res.json())
      .then((data) => setData(data));
    resetId();
    resetName();
  }

  return (
    <div>
      <TextField
        label="Users ID"
        id="standard-full-width"
        {...bindId}
        style = {{ margin: 8 }}
        fullWidth
      />
      <TextField
        label="Full Name"
        id="standard-full-width"
        {...bindName}
        style = {{ margin: 8 }}
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Create Life
      </Button>
      {data ? (
        <SimpleSnackbar/>
      ) : (
        null
      )}
    </div>
  );
}

export default CreateUsers;
