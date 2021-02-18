import axios from './axios';
import React, { useEffect, useState } from 'react';

function AllTransactions() {
  const getAllTransactions = async () => {
    const promise = new Promise((resolve, reject) => {
      axios
        .get('/transactions')
        .then((data) => {
          resolve(data);
          console.log('inside then');
        })
        .catch((e) => console.log(e, 'err in axios'));
    });
    const result = await promise;
    return result;
  };
  const [t_data, setT_data] = useState(null);
  useEffect(() => {
    getAllTransactions()
      .then((data) => setT_data(data.data))
      .catch((e) => console.log(e.message, 'inside catch'));
  }, []);
  return (
    <div>
      {console.log(t_data, 't-data')}
      {t_data ? (
        <table className="table table-striped">
          <thead className="sticky-top">
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Amount (Rs)</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {t_data.map((item) => (
              <tr>
                <td>{item.username}</td>
                <td>{item.trans_date}</td>
                <td>
                  {item.transaction_type === 'add_funds' ? '+' : '-'}
                  {item.amount}
                </td>
                <td>{item.final_balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>loading.........!</p>
      )}
    </div>
  );
}

export default AllTransactions;
