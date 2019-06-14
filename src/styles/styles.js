import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //GENERAL STYLES
  container: {
    flex: 1,
    paddingHorizontal: 15
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

  //HOME STYLES
  balanceContainer: {
    flex: 0.1,
    alignSelf: "center",
    paddingVertical: 15
  },
  balanceTextTitle: {
    fontFamily: "ProductSans-Medium",
    fontSize: 16,
    textAlign: "center",
    color: "#000"
  },
  balanceTextValue: {
    fontFamily: "ProductSans-Black",
    fontSize: 22,
    textAlign: "center",
    color: "#000"
  },
  tabContainer: {
    height: "75%"
  },

  //CARDS
  card: {
    height: 100,
    width: "98%",
    borderRadius: 8,
    alignSelf: "center"
  },
  cardTitle: {
    fontFamily: "ProductSans-Regular",
    color: "#000",
    fontSize: 17
  },
  cardPrice: {
    fontFamily: "ProductSans-Regular",
    color: "#000",
    fontSize: 14
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
  modalBalance: {
    fontFamily: "ProductSans-Black",
    color: "#fff",
    fontSize: 24,
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
    color: "#000",
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
    color: "#000",
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

  //activityViewModal
  activityViewModal: {
    backgroundColor: "pink",
    flex: 1
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

export { styles };
