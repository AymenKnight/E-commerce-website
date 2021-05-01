import { createSelector } from "reselect";

export const selectCart =(state)=>state.cart ;

export const selecteCartItems =createSelector(
    [selectCart],
     cart =>cart.cartItems
);

export const selecteCartItemsCount =createSelector(
    [selecteCartItems],
    cartItems => cartItems.reduce((acc,cartItem)=> acc + cartItem.quantity  ,0)
)

export const selecteTotalPrice=createSelector(
    [selecteCartItems],
    cartItems => cartItems.reduce((acc,cartItem)=> acc + cartItem.price * cartItem.quantity ,0)
)

export const selecteCartHidden = createSelector(selectCart, cart => cart.hidden);