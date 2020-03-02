import React, { Component } from 'react';
import { Table, Container } from 'reactstrap';
import { v4 as uuid } from 'uuid';

class LeaseTable extends Component {
  state = {
    leases: [
      {
        _id: uuid(),
        name: 'Mitch Inc',
        net_lease_price: 50000,
        residual_value: 10000,
        lease_rate_annual: 0.06,
        gst: 0.05,
        pst: 0.06,
        term_months: 48,
        start_date: '2019-04-20',
        payment_frequency: 'WEEKLY',
        lease_type: 'NEW'
      },
      {
        _id: uuid(),
        name: 'Doug Inc',
        net_lease_price: 80000,
        residual_value: 20000,
        lease_rate_annual: 0.07,
        gst: 0.05,
        pst: 0.06,
        term_months: 48,
        start_date: '2018-02-10',
        payment_frequency: 'WEEKLY',
        lease_type: 'USED'
      },
      {
        _id: uuid(),
        name: 'Nelson Inc',
        net_lease_price: 20000,
        residual_value: 5000,
        lease_rate_annual: 0.04,
        gst: 0.05,
        pst: 0.06,
        term_months: 48,
        start_date: '2016-10-22',
        payment_frequency: 'WEEKLY',
        lease_type: 'NEW'
      }
    ]
  };

  render() {
    const { leases } = this.state;
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
          {leases.map(({ id, name, net_lease_price, start_date}) => (
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

export default LeaseTable;
