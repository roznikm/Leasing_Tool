import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Button
} from "@material-ui/core";
import StorageIcon from "@material-ui/icons/Storage";
import InfoIcon from "@material-ui/icons/Info";
import AssessmentIcon from "@material-ui/icons/Assessment";
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  button: {
    marginRight: 'auto',
    color: 'White',
    margin: {
      top: 5, 
      right: 0,
      bottom: 0,
      left: '5rem'
    },
    '& span': {
      // jss-nested applies this to a child span
      fontWeight: 'light' // jss-camel-case turns this into 'font-weight'
    }
  }
}));

export default function AppNavBarMaterial() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button 
          className={classes.button} 
          color="inherit" size= 'large'
          href= '/'>
            AutoPilot
            </Button>
          <Button className={classes.button} 
          color="inherit" 
          size='large'
          href= '/insights'>
            <AssessmentIcon/>Insights
            </Button>
          <Button 
          className={classes.button} 
          color="inherit" 
          size='large'
          href='/leases'>
            <StorageIcon/>
            Lease Portfolio
          </Button>
          <Button 
          className={classes.button} 
          color='inherit' 
          size='large' 
          href='/about'>
            <InfoIcon/> About
            </Button>
          <Button 
          className={classes.button} 
          color="inherit" 
          size='large' 
          href='login'>
            <LockOpenOutlinedIcon/> Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

