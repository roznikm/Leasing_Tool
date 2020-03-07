import React, { useContext, useEffect } from 'react';
import MUIDataTable from 'mui-datatables';
import PropTypes from 'prop-types';
import { GlobalContext } from '../context/GlobalState';

// expansion panel imports
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  makeStyles,
  hexToRgb
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import color from '@material-ui/core/colors/amber';

// expansion panel
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#FF000",
    width: '90%',
    height: '90%',
    outlineStyle: 'solid',
    outlineWidth: 1,
    outlineColor: 'rgb(33.7%, 37%, 33.7%)'
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
    elevation: 0,
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
    <ExpansionPanel elevation={0} defaultExpanded={true}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <MUIDataTable
          title={'Explore Leases'}
          data={leases}
          columns={columns}
          options={options}
          className={classes.root}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default TableMaterial;
