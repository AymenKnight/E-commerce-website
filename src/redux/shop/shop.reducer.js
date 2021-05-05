import shopData from "../../pages/Shop/ShopData";

const initialState = {
  collections :shopData
};

export const shopReducer = (state=initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
