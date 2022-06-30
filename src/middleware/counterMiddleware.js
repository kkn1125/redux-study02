const middleware = (store) => (next) => (action) => {
  console.log(action);
  const result = next(action);
  console.log(store.getState())
  return result;
};

export default middleware;
