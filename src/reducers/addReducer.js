export const addReducer = (state = [{}], action) => {
  if (action.type === 'ADD') {
    return action.payload;
  }

  return state;
};
