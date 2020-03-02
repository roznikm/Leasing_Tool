import React, { Component } from 'react';
import { Table, Container, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getLeases, deleteLease } from '../actions/leaseActions';
import PropTypes from 'prop-types';

class LeaseTable extends Component {
  componentDidMount() {
    this.props.getLeases();
  }

  onDeleteClick = id => {
    this.props.deleteLease(id);
  };

  render() {
    const { leases } = this.props.lease;
    return (
      <Container>
        <Table hover>
          <thead>
            <tr>
              <th>Action</th>
              <th>Customer Name</th>
              <th>Lease Amount</th>
              <th>Start Date</th>
            </tr>
          </thead>
          <tbody>
            {leases.map(({ _id, name, net_lease_price, start_date }) => (
              <tr key={_id}>
                <td>
                  {' '}
                  <Button
                    className='remove-btn'
                    color='danger'
                    size='sm'
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >
                    &times;
                  </Button>
                </td>
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
  deleteLease: PropTypes.func.isRequired,
  lease: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  lease: state.lease
});

export default connect(mapStateToProps, { getLeases, deleteLease })(LeaseTable);
