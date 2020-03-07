import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    width: '100%'
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
          <Toolbar >
              <Typography color='inherit' variant="overline">
              AUTOPILOT Leasing Solutions
              </Typography>
          </Toolbar>
      </AppBar>
    </div>
  );
}