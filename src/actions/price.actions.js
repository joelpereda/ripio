import { priceConstants } from "../constants/price.constants";
import { ServerCallPrices } from "../helpers/service.call";

export const userActions = {
  getPrices
};

export function changeStyles(data) {
  console.log("data :", data);
  return { type: priceConstants.CHANGE_STYLES, data };
}

export function loading(data) {
  return { type: priceConstants.REQUEST, payload: { isLoading: data } };
}

export function getPrices() {
  return dispatch => {
    return ServerCallPrices().then(
      data => {
        return dispatch(success(data));
      },
      error => {
        return dispatch(failure(error.toString()));
      }
    );
  };

  function failure(error) {
    return { type: priceConstants.FAILURE, error };
  }
  function success(data) {
    return { type: priceConstants.SUCCESS, data };
  }
}
