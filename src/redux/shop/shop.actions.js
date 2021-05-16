import  {shop_actions} from  "./shop.actions.Constants"

export const updateCollectionAction=(collections)=>({
    type : shop_actions.UPDATE_COLLECTIONS ,
    payload : collections
})