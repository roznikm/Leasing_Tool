import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import LeaseTable from './LeaseTable';
import LeaseForm from './LeaseForm';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 20,
    flexGrow: 1,
    marginBottom: 20
  },
  paper: {
    marginTop: 10,
    marginBottom: 10,  
    textAlign: 'center',
    padding: theme.spacing(2)
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
            <LeaseForm className={classes.paper}/>
            <LeaseTable className={classes.paper}/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default LeasePortfolio;
