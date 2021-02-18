const init_state = {
  table_data: null,
};
export const actionTypes = {
  SET_DATA: 'SET_DATA',
};

export const reducer = (state = init_state, action) => {
  switch (action.type) {
    case actionTypes.SET_DATA: {
      return {
        ...state,
        table_data: action.data,
      };
    }

    default: {
      return state;
    }
  }
};
