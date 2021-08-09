import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

function CreateUsers() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <TextField
          label="Users ID"
          className={classes.textField}
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
