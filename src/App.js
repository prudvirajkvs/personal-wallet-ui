import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
} from 'react-router-dom';
import AddFunds from './AddFunds';
import AllTransactions from './AllTransactions';
import AllWallets from './AllWallets';
import CheckBalance from './CheckBalance';
import NewWallet from './NewWallet';
import SpendFunds from './SpendFunds';

function App() {
  const setActive = (e) => {
    const el = document.querySelector('.active');
    el?.classList?.remove('active');
    e.target.classList.add('active');
  };

  return (
    <Router>
      <div className="container ">
        <h1 className="rounded-bottom bg-dark bg-gradient text-white text-center display-3 sticky-top">
          Personal Wallet
        </h1>
        <div className="row">
          <div className="col-3">
            <div className="list-group " role="tablist">
              <Link to="/all_wallets">
                <button
                  className="list-group-item list-group-item-action"
                  onClick={(e) => setActive(e)}
                >
                  All Wallets
                </button>
              </Link>
              <Link to="/new_wallet">
                <button
                  className="list-group-item list-group-item-action"
                  role="tab"
                  onClick={(e) => setActive(e)}
                >
                  New Wallet
                </button>
              </Link>
              <Link to="/check_balance">
                <button
                  className="list-group-item list-group-item-action"
                  onClick={(e) => setActive(e)}
                >
                  Check Balance
                </button>
              </Link>
              <Link to="/add_funds">
                <button
                  className="list-group-item list-group-item-action"
                  onClick={(e) => setActive(e)}
                >
                  Add Funds
                </button>
              </Link>
              <Link to="spend_funds">
                <button
                  className="list-group-item list-group-item-action"
                  onClick={(e) => {
                    setActive(e);
                  }}
                >
                  Spend Funds
                </button>
              </Link>
              <Link to="/all_transactions">
                <button
                  className="list-group-item list-group-item-action"
                  onClick={(e) => setActive(e)}
                >
                  All Transactions
                </button>
              </Link>
            </div>
          </div>
          <div className="col">
            <Switch>
              <Route path="/all_wallets">
                <AllWallets />
              </Route>
              <Route path="/new_wallet">
                <NewWallet />
              </Route>
              <Route path="/check_balance">
                <CheckBalance />
              </Route>
              <Route path="/add_funds">
                <AddFunds />
              </Route>
              <Route path="/spend_funds">
                <SpendFunds />
              </Route>
              <Route path="/all_transactions">
                <AllTransactions />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
