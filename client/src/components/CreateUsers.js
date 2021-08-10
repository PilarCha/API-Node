import TextField from '@material-ui/core/TextField';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useInput } from '../hooks/input-hook';

function CreateUsers(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  const { value:Id, bind:bindId, reset:resetId } = useInput("");
  const { value:Name, bind:bindName, reset:resetName } = useInput("");

  const classes = useStyles();
  // const [id, setId, name, setname] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`submitting ${Id} as well as ${Name}`);
    resetId();
    resetName();
  }

  return (
    <div className={classes.root}>
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

      </div>
    </div>
  );
}

export default CreateUsers;
