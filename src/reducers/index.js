import { combineReducers } from "redux";

import { price } from "./price.reducer";
import { wallet } from "./wallet.reducer";

const appReducer = combineReducers({
  price,
  wallet
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
