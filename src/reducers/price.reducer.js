import { priceConstants } from "../constants/price.constants";

const initialState = {
  isLoading: true,
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
      console.log("action.data :", action.data);
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

    default:
      return state;
  }
}
