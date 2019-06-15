import { priceConstants } from "../constants/price.constants";

const initialState = {
  isLoading: true,
  darkMode: false,
  error: false,
  errorMessage: "",
  data: {}
};

export function price(state = initialState, action) {
  switch (action.type) {
    case priceConstants.REQUEST:
      return {
        ...state,
        data: {},
        error: false,
        errorMessage: "",
        isLoading: true
      };
    case priceConstants.SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        errorMessage: "",
        data: action.data
      };
    case priceConstants.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.error,
        data: {}
      };
    case priceConstants.CHANGE_STYLES:
      console.log('action.data :', action.data);
      return {
        ...state,
        darkMode: action.data
      };
    default:
      return state;
  }
}
