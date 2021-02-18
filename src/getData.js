import axios from './axios';
import { actionTypes } from './reducer';
import store from './store';

export const getData = async () => {
  const promise = new Promise(async (resolve, reject) => {
    await axios
      .get('/allWallets')
      .then((data) => resolve(data))
      .catch((e) => reject);
  });
  const result = await promise;
  store.dispatch({
    type: actionTypes.SET_DATA,
    data: result.data,
  });

  return result.data;
};
