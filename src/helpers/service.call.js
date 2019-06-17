const PRICE = "https://ripio.com/api/v1/rates/";
const FEE = "https://bitcoinfees.earn.com/api/v1/fees/recommended";
const WALLET =
  "https://us-central1-rest-api-15298.cloudfunctions.net/api/wallet";
const HISTORY =
  "https://us-central1-rest-api-15298.cloudfunctions.net/api/history";

export function ServerCallPrices() {
  return fetch(PRICE)
    .then(response => response.json())
    .then(responseJson => {
      console.log("responseJson :", responseJson);
      return responseJson;
    })
    .catch(error => {
      console.error(error);
    });
}

export function ServerCallFee() {
  return fetch(FEE)
    .then(response => response.json())
    .then(responseJson => {
      console.log("responseJson :", responseJson);
      return responseJson;
    })
    .catch(error => {
      console.error(error);
    });
}

export function ServerCallWallet() {
  return fetch(WALLET)
    .then(response => response.json())
    .then(responseJson => {
      console.log("wallet :", responseJson);
      return responseJson;
    })
    .catch(error => {
      console.error(error);
    });
}

export function serverCallPut(address, monto) {
  console.log("address :", address);
  console.log("monto :", monto);
  return fetch(WALLET + `/${address}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      address: address,
      balance: monto
    })
  })
    .then(send => send.json())
    .then(send => {
      console.log("send :", send);
      return send;
    })
    .catch(error => {
      console.error(error);
    });
}

export function ServerCallHistory() {
  return fetch(HISTORY)
    .then(response => response.json())
    .then(responseJson => {
      console.log("history :", responseJson);
      return responseJson;
    })
    .catch(error => {
      console.error(error);
    });
}

export function serverCallPost(address, fecha, monto, fee) {
  console.log("fecha :", fecha);
  console.log("fee :", fee);
  console.log("monto :", monto);
  return fetch(HISTORY, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      address: address,
      date: fecha,
      monto: monto,
      fee: fee
    })
  }).then(send => {
    return internalServerCallPublic(requestOptions);
  });
}

function internalServerCallPublic(requestOptions) {
  return fetch(HISTORY, requestOptions).then(response => {
    return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        const error = (data && data.error) || response.statusText;
        return Promise.reject(error);
      }
      console.log("data internalServerCallPublic:", data);
      return data;
    });
  });
}
