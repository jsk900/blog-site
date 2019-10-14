//Actions, Add blogs array to store
export const addAction = blogArr => {
  return {
    type: 'ADD',
    payload: blogArr
  };
};

// Redirect flag to create blog or show newly created blog
export const redirectAction = bool => {
  return {
    type: 'REDIRECT',
    payload: bool
  };
};
