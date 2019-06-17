import React, { Component } from "react";
import { Text, View, FlatList, RefreshControl } from "react-native";
import { Icon, Tabs, Tab } from "native-base";
import { styles } from "../styles/styles";
import Footer from "../components/footer";

class TabActivity extends Component {
  render() {
    return (
      <View
        style={[
          styles.container,
          this.props.style,
          { paddingTop: 10, paddingBottom: 75 }
        ]}
      >
        <Text style={[styles.title, { marginBottom: 5, textAlign: "center" }]}>
          Movimientos
        </Text>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={this.props.refreshing}
              onRefresh={this.props.onRefresh}
            />
          }
          data={this.props.data}
          renderItem={this.props.renderItem}
        />
      </View>
    );
  }
}

export default TabActivity;
