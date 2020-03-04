import React, { useState, useContext } from 'react';
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
import PropTypes from 'prop-types';
import { GlobalContext } from '../context/GlobalState';

const LeaseForm = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const [start_date, setStartDate] = useState('');
  const [net_lease_price, setNetLeasePrice] = useState(0);
  const [residual_value, setResidualValue] = useState(0);
  const [lease_rate_annual, setLeaseRateAnnual] = useState(0);
  const [gst, setGst] = useState(0.05);
  const [pst, setPst] = useState(0.06);
  const [term_months, setTermMonths] = useState(48);
  const [payment_frequency, setPaymentFrequency] = useState('Weekly');
  const [lease_type, setLeaseType] = useState('NEW');

  const { addLease } = useContext(GlobalContext);

  const toggle = () => {
    setModal(!modal);
  };

  const onSubmit = e => {
    e.preventDefault();

    const newLease = {
      _id: 1,
      name,
      net_lease_price,
      residual_value,
      lease_rate_annual,
      gst,
      pst,
      term_months,
      start_date,
      payment_frequency,
      lease_type
    };

    // Add lease via addLease action
    addLease(newLease);

    // Close modal
    toggle();
  };

  return (
    <div>
      <Button color='dark' style={{ marginBottom: '2rem' }} onClick={toggle}>
        Add Lease
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add a lease to the portfolio</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for='name'>Customer Name</Label>
              <Input
                type='text'
                name='name'
                id='name'
                placeholder='Customer name'
                onChange={e => setName(e.target.value)}
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
                onChange={e => setNetLeasePrice(e.target.value)}
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
                onChange={e => setResidualValue(e.target.value)}
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
                onChange={e => setLeaseRateAnnual(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for='gst'>GST</Label>
              <Input
                type='number'
                step='0.001'
                max='0.15'
                min='0'
                name='GST'
                id='gst'
                placeholder='0.050'
                onChange={e => setGst(e.target.value)}
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
                onChange={e => setPst(e.target.value)}
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
                onChange={e => setTermMonths(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for='start_date'>Start date</Label>
              <Input
                type='date'
                name='start_date'
                id='start_date'
                placeholder='date placeholder'
                onChange={e => setStartDate(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for='payment_frequency'>Payment Frequency</Label>
              <Input
                type='select'
                name='payment_frequency'
                id='payment_frequency'
                onChange={e => setPaymentFrequency(e.target.value)}
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
                onChange={e => setLeaseType(e.target.value)}
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
};

export default LeaseForm;

// LeaseForm.propTypes = {
//   addLease: PropTypes.func.isRequired,
// };
