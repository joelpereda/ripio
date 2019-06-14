import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Card, CardItem, Body } from "native-base";
import { styles } from "../styles/styles";
import { ScrollView } from "react-native-gesture-handler";

class TabOverview extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={[styles.title, { marginTop: 10 }]}>Wallets</Text>

        <Card style={styles.card}>
          <CardItem
            style={{
              borderRadius: 12,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
            header={true}
          >
            <Text style={styles.cardTitle}>Bitcoin</Text>
            <Text style={styles.cardPrice}>{this.props.btcPrice}</Text>
          </CardItem>
          <CardItem style={{ borderRadius: 12 }}>
            <Body>
              <Text>//Your text here</Text>
            </Body>
          </CardItem>
        </Card>
      </View>
    );
  }
}

export default TabOverview;
