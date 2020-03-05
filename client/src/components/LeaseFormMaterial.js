import React, { useState } from './node_modules/react';
import '../App.css';
import { makeStyles } from './node_modules/@material-ui/core/styles';
import TextField from './node_modules/@material-ui/core/TextField';
import Container from './node_modules/@material-ui/core/Container';
import CssBaseline from './node_modules/@material-ui/core/CssBaseline';


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 300
    }
  }
}));

function LeaseFormMaterial() {
  const classes = useStyles();
  return (
    <Container maxWidth='sm'>
      <CssBaseline />
        <form className={classes.root} noValidate autoComplete='off'>
          <TextField variant='outlined' />
          <br />
          <TextField variant='outlined' />
          <br />
          <TextField variant='outlined' />
        </form>
    </Container>
  );
}

export default LeaseFormMaterial;
