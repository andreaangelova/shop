const initialState = { loggedIn: true, selectedItems: [] };

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, loggedIn: true };
    case "LOGOUT":
      return { ...state, loggedIn: false };
    case "ADD_ITEM":
      let previousItems = state.selectedItems;
      const existItem = state.selectedItems.find(
        (item) => item.id === action.payload
      );
      if (existItem) {
        existItem.quantity = existItem.quantity + 1;
      } else {
        previousItems.push({ id: action.payload, quantity: 1 });
      }
      return {
        ...state,
        selectedItems: previousItems,
      };
    default:
      return state;
  }
};

export default appReducer;
