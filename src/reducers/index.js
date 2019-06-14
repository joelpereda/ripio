import { combineReducers } from 'redux';

import { price } from './price.reducer';

const appReducer = combineReducers({
  price,
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer; 