import { combineReducers } from "redux";

import { price } from "./price.reducer";
import { wallet } from "./wallet.reducer";
import { history } from "./history.reducer";

const appReducer = combineReducers({
  price,
  wallet,
  history
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
