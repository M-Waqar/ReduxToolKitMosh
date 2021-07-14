const toast = (state) => (next) => (action) => {
  if (action.type === "ERROR") {
    console.log("Tostify: ", action.payload.message);
  } else {
    next(action);
  }
};
export default toast;
