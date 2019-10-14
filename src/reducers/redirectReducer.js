//Reducers
// Redirect flag to create blog or show newly created blog
export const redirectReducer = (state = false, action) => {
  if (action.type === 'REDIRECT') {
    return action.payload;
  }

  return state;
};
