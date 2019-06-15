import { walletConstants } from "../constants/wallet.constants";

const initialState = {
  isLoading: true,
  error: false,
  errorMessage: "",
  data: {}
};

export function wallet(state = initialState, action) {
  switch (action.type) {
    case walletConstants.REQUEST:
      return {
        ...state,
        data: {},
        error: false,
        errorMessage: "",
        isLoading: true
      };
    case walletConstants.SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        errorMessage: "",
        data: action.data
      };
    case walletConstants.FAILURE:
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
