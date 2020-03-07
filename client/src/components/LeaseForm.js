import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GlobalContext } from '../context/GlobalState';
import { useFormik } from 'formik';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Container
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './LeaseFormStyle.css';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    display: 'inline-block'
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightRegular,
    textAlign: 'center',
    display: 'inline-block'
  },
  form: {
    display: 'inline-block'
  }
}));

const LeaseForm = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: 'John Doe',
      start_date: Date.now(),
      net_lease_price: 0,
      residual_value: 0,
      lease_rate_annual: 0.049,
      gst: 0.05,
      pst: 0.06,
      term_months: 48,
      payment_frequency: 'WEEKLY',
      lease_type: 'NEW'
    },
    onSubmit: values => {
      const newLease = {
        name: values.name,
        net_lease_price: values.net_lease_price,
        residual_value: values.residual_value,
        lease_rate_annual: values.lease_rate_annual,
        gst: values.gst,
        pst: values.pst,
        term_months: values.term_months,
        start_date: values.start_date,
        payment_frequency: values.payment_frequency,
        lease_type: values.lease_type
      };
      console.log(newLease);
      // Add lease via addLease action
      addLease(newLease);
    }
  });

  const { addLease } = useContext(GlobalContext);

  return (
    <Container className={classes.root}>
      <ExpansionPanel className={classes.root}>
        <div className={classes.heading}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography className={classes.heading}>Add a New Lease</Typography>
          </ExpansionPanelSummary>
        </div>
        <ExpansionPanelDetails className={classes.root}>
          <div className={classes.root}>
            <form onSubmit={formik.handleSubmit} className={classes.form}>
              <label htmlFor='name'>Customer Name</label>
              <input
                id='name'
                name='name'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <label htmlFor='net_lease_price'>Net lease price</label>
              <input
                id='net_lease_price'
                name='net_lease_price'
                type='number'
                onChange={formik.handleChange}
                value={formik.values.net_lease_price}
              />
              <label htmlFor='lease_rate_annual'>Lease annual rate</label>
              <input
                id='lease_rate_annual'
                name='lease_rate_annual'
                type='number'
                step='0.001'
                min='0'
                max='0.20'
                onChange={formik.handleChange}
                value={formik.values.lease_rate_annual}
              />
              <label htmlFor='gst'>GST</label>
              <input
                name='gst'
                id='gst'
                type='number'
                step='0.001'
                min='0'
                max='0.10'
                onChange={formik.handleChange}
                value={formik.values.gst}
              />
              <label htmlFor='pst'>PST</label>
              <input
                name='pst'
                id='pst'
                type='number'
                step='0.001'
                max='0.15'
                min='0'
                onChange={formik.handleChange}
                value={formik.values.pst}
              />
              <label htmlFor='term_months'>Term Months</label>
              <input
                type='number'
                step='1'
                min='0'
                name='term_months'
                id='term_months'
                placeholder='48'
                onChange={formik.handleChange}
                value={formik.values.term_months}
              />
              <label htmlFor='start_date'>Start date</label>
              <input
                type='date'
                name='start_date'
                id='start_date'
                onChange={formik.handleChange}
                value={formik.values.start_date}
              />
              <label htmlFor='payment_frequency'>Payment frequency</label>
              <select
                type='select'
                name='payment_frequency'
                id='payment_frequency'
                onChange={formik.handleChange}
                value={formik.values.payment_frequency}
              >
                <option value='' label='Select a payment frequency' />
                <option value='WEEKLY' label='Weekly' />
                <option value='BIWEEKLY' label='Bi-Weekly' />
                <option value='MONTHLY' label='Monthly' />
              </select>
              <br />
              <button type='submit'>Submit</button>
            </form>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Container>
  );
};

export default LeaseForm;
