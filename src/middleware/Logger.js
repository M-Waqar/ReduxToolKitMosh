const logger = (param) => (state) => (next) => (action) => {
  console.log("parameter:", param);
  console.log("state:", state);
  console.log("reducer:", next);
  console.log("action:", action);
  next(action);
};

export default logger;
