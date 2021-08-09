import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

function CreateUsers() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <TextField
          label="Users ID"
          id="standard-full-width"
          style = {{ margin: 8 }}
          fullWidth
        />
        <TextField
          id="standard-full-width"
          label="Full Name"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
        />
      </div>
    </div>
  );
}

export default CreateUsers;
