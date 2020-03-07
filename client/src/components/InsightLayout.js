import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { GlobalContext } from '../context/GlobalState';
import InsightChart1 from './InsightChart1';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 50,
    flexGrow: 1
  },
  paper: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    padding: theme.spacing(2)
  }
}));

const Insight = () => {
  const classes = useStyles();
  const { leases, getLeases } = useContext(GlobalContext);
  const newData = [];
  const newCar = [];
  const usedCar = [];
  const otherCar = [];
  leases.map(item => {
    if (item.lease_type === 'NEW') {
      newCar.push(item.lease_type);
    } else if (item.lease_type === 'USED') {
      usedCar.push(item.lease_type);
    } else {
      otherCar.push(item.lease_type);
    }
  });
  newData.push(newCar.length);
  newData.push(usedCar.length);
  newData.push(otherCar.length);

  const chartData = {
    labels: ['New', 'Used', 'Short-Term'],
    datasets: [
      {
        data: newData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }]
  };

  useEffect(() => {
    getLeases();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>one</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Pane 2 </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <InsightChart1
              chartData={chartData}

              className={classes.paper}
            />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>Panel 4</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Insight;
