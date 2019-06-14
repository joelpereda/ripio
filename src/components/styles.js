import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  preContainer: {
    flex: 1,
    backgroundColor: "white",
    borderBottomRightRadius: 12,
    borderTopRightRadius: 12
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    borderBottomRightRadius: 12,
    borderTopRightRadius: 12
  },
  header: {
    flex: 1,
    justifyContent: "space-between",
    height: 200
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
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff"
  },
  drawerEmail: {
    fontSize: 16,
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
    color: "#000",
    marginLeft: 15
  }
});

export { styles };
