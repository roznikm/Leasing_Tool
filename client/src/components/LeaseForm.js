import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';
import { connect } from 'react-redux';
import { addLease } from '../actions/leaseActions';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

class LeaseForm extends Component {
  state = {
    modal: false,
    name: '',
    net_lease_price: 0,
    residual_value: 0,
    lease_rate_annual: 0,
    gst: 0.05,
    pst: 0.06,
    term_months: 48,
    start_date: '',
    payment_frequency: 'Weekly',
    lease_type: 'New'
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newLease = {
      _id: uuid(),
      name: this.state.name,
      net_lease_price: this.state.net_lease_price,
      residual_value: this.state.residual_value,
      lease_rate_annual: this.state.lease_rate_annual,
      gst: this.state.gst,
      pst: this.state.pst,
      term_months: this.state.term_months,
      start_date: this.state.start_date,
      payment_frequency: this.state.payment_frequency,
      lease_type: this.state.lease_type
    };

    // Add lease via addLease action
    this.props.addLease(newLease);

    // Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color='dark'
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          Add Lease
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Add a lease to the portfolio
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='name'>Customer Name</Label>
                <Input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Customer name'
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='net_lease_price'>Net lease price</Label>
                <Input
                  type='number'
                  step='1'
                  min='0'
                  name='net_lease_price'
                  id='net_lease_price'
                  placeholder='0'
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='residual_value'>Residual value</Label>
                <Input
                  type='number'
                  step='1'
                  min='0'
                  name='residual_value'
                  id='residual_value'
                  placeholder='0'
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='lease_rate_annual'>Lease annual rate</Label>
                <Input
                  type='number'
                  step='0.001'
                  max='0.15'
                  min='0'
                  name='Lease annual rate'
                  id='lease_rate_annual'
                  placeholder='0.050'
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='gst'>GST</Label>
                <Input
                  type='number'
                  step= '0.001'
                  max='0.15'
                  min='0'
                  name='GST'
                  id='gst'
                  placeholder='0.050'
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='pst'>PST</Label>
                <Input
                  type='number'
                  step='0.001'
                  max='0.15'
                  min='0'
                  name='pst'
                  id='pst'
                  placeholder='0.080'
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='term_months'>Term Months</Label>
                <Input
                  type='number'
                  step='1'
                  min='0'
                  name='term_months'
                  id='term_months'
                  placeholder='48'
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='start_date'>Start date</Label>
                <Input
                  type='date'
                  name='start_date'
                  id='start_date'
                  placeholder='date placeholder'
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='payment_frequency'>Payment Frequency</Label>
                <Input
                  type='select'
                  name='payment_frequency'
                  id='payment_frequency'
                  onChange={this.onChange}
                >
                  <option>Weekly</option>
                  <option>Biweekly</option>
                  <option>Monthly</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for='lease_type'>Lease type</Label>
                <Input
                  type='select'
                  name='lease_type'
                  id='lease_type'
                  onChange={this.onChange}
                >
                  <option>New</option>
                  <option>Used</option>
                  <option>Short</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  Add Lease
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

LeaseForm.propTypes = {
  addLease: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  leases: state.lease
});

export default connect(mapStateToProps, { addLease })(LeaseForm);
