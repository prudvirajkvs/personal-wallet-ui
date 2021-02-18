import axios from './axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getData } from './getData';
import { useParams } from 'react-router';

function CheckBalance() {
  const getBalance = (user_id) => {
    const promise = new Promise(async (resolve, reject) => {
      await axios
        .get('/balance', { params: { user_id } })
        .then((data) => resolve(data))
        .catch((e) => console.log(e.message));
    });
    return promise;
  };
  const [balance, setBalance] = useState('');

  const [selected, setselected] = useState('');
  const { table_data } = useSelector((state) => state);

  useEffect(() => {
    if (table_data) {
      //   setTableData(table_data);
    } else {
      getData().then((data) => {
        // setTableData(data);
      });
    }
  }, []);
  const submitData = () => {
    if (selected && selected !== '0') {
      const arr = table_data.filter(
        (item) => item.username === selected && item
      );
      getBalance(arr[0].user_id)
        .then((data) => setBalance(data.data))
        .catch((e) => setBalance(e.message));
    }
  };
  return (
    <div>
      {console.log(selected)}
      <select
        className="form-select custom-select mb-3"
        aria-label="Default "
        onChange={(e) => setselected(e.target.value)}
      >
        <option value="0">select user</option>
        {table_data?.map((item) => (
          <option key={item} id={item.user_id}>
            {item.username}
          </option>
        ))}
      </select>
      <Button type="submit" onClick={submitData}>
        Get Balance
      </Button>
      {balance && <p className="display-4">Rs. {balance[0].balance} </p>}
    </div>
  );
}

export default CheckBalance;
