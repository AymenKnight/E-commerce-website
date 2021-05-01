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