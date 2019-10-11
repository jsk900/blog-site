export const addAction = blogArr => {
  return {
    type: 'ADD',
    payload: blogArr
  };
};

export const removeAction = uuid => {
  return {
    type: 'REMOVE',
    payload: uuid
  };
};

export const redirectAction = () => {
  return {
    type: 'REDIRECT'
  };
};
