import { historyConstants } from "../constants/history.constants";

const initialState = {
  isLoading: true,
  error: false,
  errorMessage: "",
  data: {}
};

export function history(state = initialState, action) {
  switch (action.type) {
    case historyConstants.REQUEST:
      return {
        ...state,
        data: {},
        error: false,
        errorMessage: "",
        isLoading: true
      };
    case historyConstants.SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        errorMessage: "",
        data: action.data
      };
    case historyConstants.FAILURE:
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
