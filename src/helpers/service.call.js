const PRICE = "https://ripio.com/api/v1/rates/";
const FEE = "https://bitcoinfees.earn.com/api/v1/fees/recommended";

export function ServerCall() {
  console.log("pasa por acá");
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
