import React, { useState } from 'react';
import axios from './axios';
import { Button } from 'react-bootstrap';
import store from './store';
import { actionTypes } from './reducer';
import { getData } from './getData';
function NewWallet() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [alert_show, setAlert_show] = useState('invisible');

  function submitData(e) {
    e.preventDefault();
    console.log(name, phone, amount);
    if (name && phone && amount) {
      axios
        .post('/user', { username: name, phone, balance: amount })
        .then((dt) => {
          setName('');
          setPhone('');
          setAmount('');
          setAlert_show('visible');
          getData();
          console.log(dt, 'success');
        })
        .catch((e) => console.log(e.message));
    }
  }
  return (
    <form>
      <div className="form-group">
        <label htmlFor="username"> Name</label>
        <input
          type="text"
          value={name}
          className="form-control"
          id="username"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          pattern="[0-9]"
          className="form-control"
          value={phone}
          id="phone"
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="balance">Amount (Rs)</label>
        <input
          type="number"
          className="form-control"
          value={amount}
          id="balance"
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <Button type="submit" className="mb-4" onClick={(e) => submitData(e)}>
        Submit
      </Button>
      <div
        className={`alert alert-success alert-dismissible fade show ${alert_show}`}
        role="alert"
      >
        Data submission was success
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={(e) => setAlert_show('invisible')}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </form>
  );
}

export default NewWallet;
