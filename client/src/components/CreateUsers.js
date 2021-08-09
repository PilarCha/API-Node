import TextField from '@material-ui/core/TextField';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
    },
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
        <Button variant="contained" color="primary">
          Primary
        </Button>

      </div>
    </div>
  );
}

export default CreateUsers;
