import React, { Component } from 'react';
import MUIDataTable from 'mui-datatables';
import { connect } from 'react-redux';
import { getLeases, deleteLease } from '../actions/leaseActions';
import PropTypes from 'prop-types';

class TableMaterial extends Component {
  componentDidMount() {
    this.props.getLeases();
  }

  render() {
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

    const { leases } = this.props.lease;
    const options = {
      filterType: 'dropdown',
      responsive: 'scroll',
      selectableRows: "single",
      onRowsDelete: index => {
        const dat = leases[index.data['0'].index];
        this.props.deleteLease(dat._id);
      },
      onRowClick: index => {
          console.log(index[0]); 
      }
    };
    return (
      <MUIDataTable
        title={'Lease Portfolio'}
        data={leases}
        columns={columns}
        options={options}
      />
    );
  }
}

const mapStateToProps = state => ({
  lease: state.lease
});

export default connect(mapStateToProps, { getLeases, deleteLease })(
  TableMaterial
);
