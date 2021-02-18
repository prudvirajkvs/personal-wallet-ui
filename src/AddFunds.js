import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from './axios';
import { getData } from './getData';

function AddFunds() {
  const [user_selected, setUser_selected] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const { table_data } = useSelector((state) => state);
  useEffect(() => {
    if (!table_data) {
      getData();
    }
  }, []);
  const submitData = (e) => {
    e.preventDefault();
    console.log('submit');
    if (user_selected && amount) {
      const arr = table_data.filter(
        (item) => item.username === user_selected && item
      );
      console.log(arr[0].user_id, amount, 'arr');
      axios
        .put('/addFunds', {
          user_id: arr[0].user_id,
          amount,
        })
        .then((dt) => {
          setMessage(`funds added successfully Rs. ${amount}`);
          getData();
        })
        .catch((e) => console.log(e));
    } else {
      console.log(user_selected, amount, 'inside else');
    }
  };
  return (
    <form>
      <select
        className="form-select custom-select mb-3"
        aria-label="Default "
        onChange={(e) => setUser_selected(e.target.value)}
      >
        <option selected>Select the user</option>
        {table_data?.map((item) => (
          <option key={item} id={item.user_id}>
            {item.username}
          </option>
        ))}
      </select>
      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <Button type="submit" className="mb-5" onClick={(e) => submitData(e)}>
        Add Funds
      </Button>
      {message && (
        <div
          className={`alert alert-success alert-dismissible fade show `}
          role="alert"
        >
          {message}
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
    </form>
  );
}

export default AddFunds;
