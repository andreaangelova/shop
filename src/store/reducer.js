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
    case "REMOVE_ITEM":
      const newItems = state.selectedItems.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, selectedItems: newItems };
    case "ADD_MORE_ITEMS":
      let selectedItems = state.selectedItems.map((item) => {
        if (item.id === action.payload) {
          item.quantity = ++item.quantity;
        }
        return item;
      });
      return { ...state, selectedItems };
    case "ADD_LESS_ITEMS":
      const selectedLessItems = state.selectedItems.map((item) => {
        if (item.id === action.payload) {
          item.quantity = --item.quantity;
        }
        return item;
      });
      return { ...state, selectedItems: selectedLessItems };
    default:
      return state;
  }
};

export default appReducer;
