import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { price } from "../reducers/price.reducer";
import { wallet } from "../reducers/wallet.reducer";

const rootReducer = combineReducers({
  price,
  wallet
});

const debug =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
  rootReducer,
  debug,
  applyMiddleware(thunkMiddleware)
);
