import { StyleSheet, View, Text } from "react-native";

const stylesDark = StyleSheet.create({
  //GENERAL STYLES
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#000'
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    fontFamily: "ProductSans-Bold",
    color: "#0187d0"
  },
  icon: {
    textAlign: "center"
  },

  //DRAWER STYLES
  drawerButtons: {
    backgroundColor: "#222",
    paddingHorizontal: 20
  },
  drawerRow: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttonDrawerSwitch: {
    fontFamily: "ProductSans-Regular",
    fontSize: 17,
    marginBottom: 10,
    color: "#fff"
  },
  buttonDrawerText: {
    fontFamily: "ProductSans-Regular",
    fontSize: 17,
    marginBottom: 10,
    color: "#fff"
  },
  drawerSubtitle: {
    fontFamily: "ProductSans-Bold",
    fontSize: 17,
    marginTop: 25,
    marginBottom: 10,
    color: "#fff"
  },

  //HOME STYLES
  balanceContainer: {
    flex: 0.2,
    alignSelf: "center",
    paddingVertical: 15
  },
  balanceTextTitle: {
    fontFamily: "ProductSans-Medium",
    fontSize: 16,
    textAlign: "center",
    color: "#fff"
  },
  balanceTextValue: {
    fontFamily: "ProductSans-Black",
    fontSize: 22,
    textAlign: "center",
    color: "#fff"
  },
  balanceBtcText: {
    fontFamily: "ProductSans-Light",
    fontSize: 14,
    textAlign: "center",
    color: "#fff"
  },
  tabContainer: {
    height: "75%"
  },
  preContainer: {
    flex: 1,
    backgroundColor: "#222",
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25
  },
  containerDrawer: {
    flex: 1,
    backgroundColor: "#222",
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25
  },
  header: {
    flex: 1,
    justifyContent: "space-between",
    height: 200,
    paddingHorizontal: 10,
    paddingTop: 20
  },
  avatarContainer: {
    flex: 1,
    margin: 10
  },
  textHeaderContainer: {
    flex: 1,
    justifyContent: "flex-end",
    margin: 10
  },
  drawerName: {
    fontSize: 18,
    fontFamily: "ProductSans-Bold",
    color: "#fff"
  },
  drawerEmail: {
    fontSize: 16,
    fontFamily: "ProductSans-Regular",
    color: "#fff"
  },
  firstList: {
    flex: 1
  },
  listRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  rowIcon: {
    marginLeft: 15
  },
  rowText: {
    fontSize: 16,
    color: "#fff",
    marginLeft: 15
  },
  //CARDS
  card: {
    width: "98%",
    borderRadius: 8,
    alignSelf: "center"
  },
  cardTitleBtc: {
    fontFamily: "ProductSans-Regular",
    color: "#fff",
    fontSize: 18
  },
  cardTitle: {
    fontFamily: "ProductSans-Light",
    color: "#fff",
    fontSize: 17
  },
  cardSubtitle: {
    fontFamily: "ProductSans-Thin",
    color: "#fff",
    fontSize: 13
  },
  cardPriceBuy: {
    fontFamily: "ProductSans-Medium",
    color: "#fff",
    fontSize: 17
  },
  cardPriceSell: {
    fontFamily: "ProductSans-Medium",
    color: "#0187d0",
    fontSize: 17
  },
  cardPrice: {
    fontFamily: "ProductSans-Regular",
    color: "#fff",
    fontSize: 17
  },
  cardText: {
    fontFamily: "ProductSans-Regular",
    fontSize: 17,
    color: "#fff"
  },
  variationBody: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  variationText: {
    fontFamily: "ProductSans-Bold",
    marginRight: 15,
    fontSize: 17,
    color: "#fff"
  },
  variationRed: {
    backgroundColor: "#a01616",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    paddingHorizontal: 10
  },
  variationBlue: {
    backgroundColor: "#0187d0",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    borderRadius: 4,
    padding: 4,
    paddingHorizontal: 10
  },
  //FOOTER
  footer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: 10,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-around"
  },

  //BUTTON
  button: {
    alignItems: "center"
  },
  buttonText: {
    fontSize: 17,
    fontFamily: "ProductSans-Regular",
    color: "#0187d0"
  },

  //MODAL
  modal: {
    justifyContent: "flex-end",
    margin: 0
  },
  modalContainer: {
    paddingTop: 25,
    height: "80%",
    backgroundColor: "#0187d0",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  modalHeader: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    flex: 0.2
  },
  modalTitle: {
    fontFamily: "ProductSans-Bold",
    color: "#fff",
    fontSize: 14,
    paddingHorizontal: 25,
    textAlign: "left"
  },
  modalBalanceBtc: {
    fontFamily: "ProductSans-Black",
    color: "#fff",
    fontSize: 24,
    paddingHorizontal: 25,
    textAlign: "left"
  },
  modalBalanceArs: {
    fontFamily: "ProductSans-Light",
    color: "#fff",
    fontSize: 16,
    paddingHorizontal: 25,
    textAlign: "left"
  },
  modalRow: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  modalActivity: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  modalActivityTitle: {
    fontFamily: "ProductSans-Bold",
    color: "#fff",
    fontSize: 18,
    paddingHorizontal: 25,
    paddingTop: 25,
    textAlign: "center"
  },
  modalActivityTitleActive: {
    fontFamily: "ProductSans-Bold",
    color: "#0187d0",
    fontSize: 18,
    paddingHorizontal: 25,
    paddingTop: 25,
    textAlign: "center"
  },
  modalChartTitle: {
    fontFamily: "ProductSans-Bold",
    color: "#fff",
    fontSize: 18,
    paddingHorizontal: 25,
    paddingTop: 25,
    textAlign: "center"
  },
  modalChartTitleActive: {
    fontFamily: "ProductSans-Bold",
    color: "#0187d0",
    fontSize: 18,
    paddingHorizontal: 25,
    paddingTop: 25,
    textAlign: "center"
  },

  //MODAL RECEIVE
  modalContainerReceive: {
    paddingTop: 25,
    height: "80%",
    backgroundColor: "#0187d0",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  modalHeaderReceive: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  modalTitleReceive: {
    fontFamily: "ProductSans-Black",
    color: "#fff",
    fontSize: 24,
    paddingHorizontal: 25,
    paddingBottom: 25,
    textAlign: "center"
  },
  modalConfirm: {
    paddingTop: 25,
    height: "55%",
    backgroundColor: "#000",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  qrContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  addressTitle: {
    fontFamily: "ProductSans-Bold",
    fontSize: 19,
    color: "#fff"
  },
  addressText: {
    fontFamily: "ProductSans-Regular",
    fontSize: 17,
    color: "#fff"
  },
  addressContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15
  },
  addressRow: { flexDirection: "row", alignItems: "center" },

  //MODAL SEND
  modalContainerSend: {
    paddingVertical: 25,
    paddingTop: 35,
    backgroundColor: "#b55f9c",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center"
  },
  modalSendSaldo: {
    justifyContent: "center",
    alignItems: "center"
  },
  modalHeaderSend: {
    width: "75%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  modalTitleSend: {
    fontFamily: "ProductSans-Black",
    color: "#fff",
    fontSize: 24,
    paddingHorizontal: 25,
    paddingBottom: 25,
    textAlign: "center"
  },
  inputCard: {
    width: "90%",
    backgroundColor: "#000",
    borderRadius: 15,
    alignSelf: "center",
    marginTop: 40,
    paddingBottom: 15
  },
  sendClipboardText: {
    fontFamily: "ProductSans-Regular",
    fontSize: 13,
    color: "#b55f9c",
    textAlign: "left",
    marginLeft: 20
  },
  saldoDisponible: {
    fontFamily: "ProductSans-Bold",
    fontSize: 17,
    color: "#fff",
    textAlign: "left"
  },
  buttonSend: {
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    backgroundColor: "#419bbf",
    borderRadius: 12,
    paddingVertical: 15
  },
  buttonCancel: {
    width: "40%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    backgroundColor: "#000",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#419bbf",
    paddingVertical: 10,
    marginRight: 10
  },
  buttonConfirm: {
    width: "40%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    backgroundColor: "#419bbf",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#419bbf",
    paddingVertical: 10
  },
  buttonCancelText: {
    fontFamily: "ProductSans-Bold",
    fontSize: 18,
    color: "#419bbf"
  },
  buttonConfirmText: {
    fontFamily: "ProductSans-Bold",
    fontSize: 18,
    color: "#fff"
  },
  buttonSendText: {
    fontFamily: "ProductSans-Bold",
    fontSize: 18,
    color: "#fff"
  },
  titleConfirm: {
    fontFamily: "ProductSans-Black",
    fontSize: 26,
    textAlign: "center",
    color: "#fff",
    marginBottom: 15
  },
  subtitleConfirm: {
    fontFamily: "ProductSans-Light",
    fontSize: 18,
    textAlign: "center",
    color: "#fff"
  },
  confirmBtnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  //activityViewModal
  activityViewModal: {
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  activityViewModalText: {
    fontFamily: "ProductSans-Regular",
    color: "#fff",
    fontSize: 18
  },
  chartViewModal: {
    backgroundColor: "white",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1
  },
  subtitleChart: {
    fontFamily: "ProductSans-Medium",
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 10
  }
});
export { stylesDark };
