import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InsightContainer1 from './InsightContainer1';
import InsightContainer2 from './InsightContainer2';
import { Card, CardContent, CardHeader, Paper, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 50,
    flexGrow: 1,
    maxWidth: '100%'
  },
  paper: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    padding: theme.spacing(1)
  },
  card: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    padding: theme.spacing(1)
  },
  cardHeader: {
    fontSize: "0.875em"
  }
}));

const InsightLayout = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>one</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>2</Paper>
        </Grid>
        <Grid item xs={8}>
          <Card className={classes.card}>
            <CardHeader 
            title={'Leases expiring soon'}
            subheader={'Give them a call'}
            classes={classes.cardHeader}/>
            <CardContent>
            <InsightContainer2 />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <InsightContainer1 />
            <InsightContainer1 />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default InsightLayout;
