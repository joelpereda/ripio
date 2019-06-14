import { priceConstants } from "../constants/price.constants";
import { ServerCall } from "../helpers/service.call";

export const userActions = {
  getPrices
};

export function loading(data) {
  return { type: priceConstants.REQUEST, payload: { isLoading: data } };
}

export function getPrices() {
  return dispatch => {
    return ServerCall().then(
      data => {
        console.log("data :", data);
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
