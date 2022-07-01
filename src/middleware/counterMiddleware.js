const middleware = (store) => (next) => (action) => {
  const result = next(action);
  return result;
};

export default middleware;
