const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};
const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA":
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };
      const allItems = [].concat.apply([], Object.values(newItems));
      const calcPrice = allItems.reduce((sum, obj) => obj.price + sum, 0);
      return {
        ...state,
        items: newItems,
        totalCount: allItems.length,
        totalPrice: calcPrice,
      };
    default:
      return state;
  }
};
export default cart;
