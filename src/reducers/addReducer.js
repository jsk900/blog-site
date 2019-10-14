//Reducers
//Add reducer, to add a blogs array to the store
export const addReducer = (state = [], action) => {
  if (action.type === 'ADD') {
    return action.payload;
  }

  return state;
};
