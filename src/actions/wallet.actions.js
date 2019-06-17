import { walletConstants } from "../constants/wallet.constants";
import { ServerCallWallet, serverCallPut } from "../helpers/service.call";

export const userActions = {
  getWallet,
  sendBtc
};

export function loading(data) {
  return { type: walletConstants.REQUEST, payload: { isLoading: data } };
}

export function getWallet() {
  return dispatch => {
    return ServerCallWallet().then(
      data => {
        return dispatch(success(data));
      },
      error => {
        return dispatch(failure(error.toString()));
      }
    );
  };

  function failure(error) {
    return { type: walletConstants.FAILURE, error };
  }
  function success(data) {
    return { type: walletConstants.SUCCESS, data };
  }
}

export function sendBtc(address, monto) {
  return dispatch => {
    return serverCallPut(address, monto).then(
      data => {
        return dispatch(success(data));
      },
      error => {
        return dispatch(failure(error.toString()));
      }
    );
  };

  function failure(error) {
    return { type: walletConstants.FAILURE_SEND, error };
  }
  function success(data) {
    return { type: walletConstants.SUCCESS_SEND, data };
  }
}
