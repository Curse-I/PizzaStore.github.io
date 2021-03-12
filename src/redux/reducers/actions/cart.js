export const addPizza = (pizzaObj) =>({
    type: "ADD_PIZZA",
    payload: pizzaObj,
})
export const clearCart = () =>({
    type: "CLEAR_CART",
})
export const removeCartItem = (id) =>({
    type: "REMOVE_CART_ITEM",
    payload: id,
})
export const plusOneItem = (id) =>({
    type: "PLUS_ONE_ITEM",
    payload: id,
})
export const minusOneItem = (id) =>({
    type: "MINUS_ONE_ITEM",
    payload: id,
})