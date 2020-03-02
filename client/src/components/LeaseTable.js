import React, { Component } from 'react';
import { Table, Container } from 'reactstrap';
import { connect } from 'react-redux';
import { getLeases } from '../actions/leaseActions';
import PropTypes from 'prop-types';

class LeaseTable extends Component {
  componentDidMount() {
    this.props.getLeases();
  }

  render() {
    const { leases } = this.props.lease;
    return (
      <Container>
        <Table hover>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Lease Amount</th>
              <th>Start Date</th>
            </tr>
          </thead>
          <tbody>
            {leases.map(({ id, name, net_lease_price, start_date }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{net_lease_price}</td>
                <td>{start_date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

LeaseTable.propTypes = {
  getLeases: PropTypes.func.isRequired,
  lease: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  lease: state.lease
});

export default connect(mapStateToProps, { getLeases })(LeaseTable);
