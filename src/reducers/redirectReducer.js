export const redirectReducer = (state = false, action) => {
  if (action.type === 'REDIRECT') {
    return !state;
  }

  return state;
};
