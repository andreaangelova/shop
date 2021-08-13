const initialState = { loggedIn: false };

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { loggedIn: true };
    case "LOGOUT":
      return { loggedIn: false };
    default:
      return state;
  }
};

export default appReducer;
