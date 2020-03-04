import React, { useContext, useEffect } from 'react';
import MUIDataTable from 'mui-datatables';
import Report from '../components/Report';
import PropTypes from 'prop-types';
import { GlobalContext } from '../context/GlobalState';

// expansion panel imports
import { makeStyles } from '@material-ui/core/styles';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

// expansion panel
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const TableMaterial = () => {
  const classes = useStyles();
  const { leases, deleteLease, selectId, getLeases } = useContext(
    GlobalContext
  );

  useEffect(() => {
    getLeases();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    {
      name: '_id',
      label: 'ID',
      options: {
        display: 'excluded',
        filter: false,
        sort: false,
        download: false
      }
    },
    {
      name: 'name',
      label: 'Customer Name'
    },
    {
      name: 'net_lease_price',
      label: 'Net Lease Price'
    },
    {
      name: 'lease_rate_annual',
      label: 'Annual Lease Rate'
    },
    {
      name: 'residual_value',
      label: 'Residual Value'
    },
    {
      name: 'gst',
      label: 'GST'
    },
    {
      name: 'pst',
      label: 'PST'
    },
    {
      name: 'term_months',
      label: 'Term in Months'
    },
    {
      name: 'payment_frequency',
      label: 'Payment Frequency'
    },
    {
      name: 'lease_type',
      label: 'Lease Type'
    }
  ];

  const options = {
    filterType: 'dropdown',
    responsive: 'scroll',
    selectableRows: 'single',
    onRowsDelete: index => {
      const dat = leases[index.data['0'].index];
      deleteLease(dat._id);
    },
    onRowClick: index => {
      const id = index[0];
      selectId(id);
      //window.location.href='/report';
    }
  };

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Typography className={classes.heading}>
          Show lease portfolio
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <MUIDataTable
          title={'Lease Portfolio'}
          data={leases}
          columns={columns}
          options={options}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default TableMaterial;
