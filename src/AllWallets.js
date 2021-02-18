import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import store from './store';
import { actionTypes } from './reducer';
import { getData } from './getData';

const AllWallets = () => {
  const { table_data } = useSelector((state) => state);

  useEffect(() => {
    if (table_data) {
      // setTableData(table_data);
    } else {
      getData()
        .then((data) => {
          console.log('inside then');
        })
        .catch((e) => console.log(e));
    }
  }, []);

  return (
    <div>
      {table_data ? (
        <table className="table table-striped">
          <thead className="sticky-top">
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Balance (Rs)</th>
            </tr>
          </thead>
          <tbody>
            {table_data.map((item) => {
              return (
                <tr>
                  <td>{item.user_id}</td>
                  <td>{item.username}</td>
                  <td>{item.phone}</td>
                  <td>{item.balance}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p className="display-8">loading.......!</p>
      )}
    </div>
  );
};
export default AllWallets;
