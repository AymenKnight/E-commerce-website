export const addItemToCart=(cartItems,cartItemToAdd)=>{
  const exitingCartItem=cartItems.find((cartItem)=>cartItem.id===cartItemToAdd.id)
  if(exitingCartItem){
      return cartItems.map((cartItem)=>cartItem.id===cartItemToAdd.id ? 
      {...cartItem,quantity:cartItem.quantity+1}
      :
      cartItem
      )
  }
  return [...cartItems,{...cartItemToAdd,quantity: 1 }]

}

export const deleteItemFromCart=(cartItems,cartItemToDelete)=>{
    return cartItems.filter((cartItem)=>cartItem.id!=cartItemToDelete.id)
}

export const decreaseItemQuantity=(cartItems,cartitemToDecreaseQuantity)=>{
  const exitingCartItem=cartItems.find(cartItem=>cartItem.id==cartitemToDecreaseQuantity.id)

  if(exitingCartItem.quantity==1){
  return  deleteItemFromCart(cartItems,exitingCartItem)
  }
  else{
    return cartItems.map(cartItem=>
      cartItem.id==cartitemToDecreaseQuantity.id ? 
      {...cartItem,quantity:cartitemToDecreaseQuantity.quantity - 1 }
      : 
      cartItem
      )
  }
}