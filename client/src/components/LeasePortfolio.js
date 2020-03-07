import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Button } from '@material-ui/core';
import TableMaterial from './TableMaterial';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 50,
    flexGrow: 1,
    marginBottom: 50
  },
  paper: {
    marginTop: 20,
    marginBottom: 100,  
    textAlign: 'center',
    padding: theme.spacing(3)
  },
  button: {
      disableElevation: true,
      textAlign: 'left'
  }
}));

const LeasePortfolio = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <TableMaterial className={classes.paper}/>
            <Button variant= 'contained' color='primary'>
              Add New Lease
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default LeasePortfolio;
