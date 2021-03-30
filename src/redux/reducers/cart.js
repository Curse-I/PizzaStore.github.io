const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA":
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };
      const items = Object.values(newItems).map((obj) => obj.items);
      const allItems = [].concat.apply([], items);
      const calcPrice = getTotalPrice(allItems);

      return {
        ...state,
        items: newItems,
        totalCount: allItems.length,
        totalPrice: calcPrice,
      };

    case "PLUS_ONE_ITEM": {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };
      const costOfOnePizza = state.items[action.payload].items[0].price;

      return {
        ...state,
        items: newItems,
        totalCount: state.totalCount + 1,
        totalPrice: state.totalPrice + costOfOnePizza,
      };
    }

    case "MINUS_ONE_ITEM": {
      const oldItems = state.items[action.payload].items;
      const newObjItems =
        oldItems.length > 1
          ? state.items[action.payload].items.slice(1)
          : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };
      const costOfOnePizza = state.items[action.payload].items[0].price;
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - costOfOnePizza,
        totalCount: state.totalCount - 1,
      };
    }
    case "REMOVE_CART_ITEM": {
      const itemsToRemove = {
        ...state.items,
      };
      const currentPrice = itemsToRemove[action.payload].totalPrice;
      const currentCount = itemsToRemove[action.payload].items.length;
      delete itemsToRemove[action.payload];
      return {
        ...state,
        items: itemsToRemove,
        totalPrice: state.totalPrice - currentPrice,
        totalCount: state.totalCount - currentCount,
      };
    }
    case "CLEAR_CART":
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };

    default:
      return state;
  }
};
export default cart;
