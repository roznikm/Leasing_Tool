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
    payment_frequency: 'WEEKLY',
    lease_type: 'NEW'
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
      name: this.state.name
    };

    // Add item via addItem action
    this.props.addItem(newLease);

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
          <ModalHeader toggle={this.toggle}>Add to lease portfolio</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='name'>Customer Name</Label>
                <Input
                  type='text'
                  name='name'
                  id='lease'
                  placeholder='Name'
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='net_lease_price'>Net lease price</Label>
                <Input
                  type='number'
                  step='1'
                  min='0'
                  net_lease_price='net_lease_price'
                  id='lease'
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
                  residual_value='Residual value'
                  id='lease'
                  placeholder='0'
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='lease_rate_annual'>Lease annual rate</Label>
                <Input
                  type='number'
                  step='1'
                  min='0'
                  lease_rate_annual='Lease annual rate'
                  id='lease'
                  placeholder='0'
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='gst'>GST</Label>
                <Input
                  type='number'
                  step='0.001'
                  min='0'
                  gst='GST'
                  id='lease'
                  placeholder='0.05'
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='pst'>PST</Label>
                <Input
                  type='number'
                  step='0.001'
                  min='0'
                  pst='PST'
                  id='lease'
                  placeholder='0.08'
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='term_months'>Term Months</Label>
                <Input
                  type='number'
                  step='1'
                  min='0'
                  term_months='Term Months'
                  id='lease'
                  placeholder='48'
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='start_date'>Start date</Label>
                <Input
                  type='date'
                  start_date='Start date'
                  id='lease'
                  placeholder='date placeholder'
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='payment_frequency'>Payment Frequency</Label>
                <Input
                  type='select'
                  name='select'
                  id='lease'
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
                  name='select'
                  id='lease'
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

export default LeaseForm;
