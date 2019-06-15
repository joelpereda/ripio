const PRICE = "https://ripio.com/api/v1/rates/";
const FEE = "https://bitcoinfees.earn.com/api/v1/fees/recommended";
const WALLET =
  "https://us-central1-rest-api-15298.cloudfunctions.net/api/wallet";

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

export function serverCallPost(address, monto) {
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
