import React, { useState } from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';


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
