export const removeReducer = (state = [], action) => {
  if (action.type === 'REMOVE') {
    const newState = [...state];
    newState.filter(blog => blog.uuid !== action.payload);
    return newState;
  }

  return state;
};
