import React, { Component } from "react";
import { Text, View, TouchableWithoutFeedback, Image } from "react-native";
import { Card, CardItem, Body, Icon } from "native-base";
import { styles } from "../styles/styles";

class HistoryCard extends Component {
  press(press) {
    press();
  }
  render() {
    const { press } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Card style={styles.cardHistory}>
          <CardItem
            style={{
              borderRadius: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              width: "100%"
            }}
            header={true}
          >
            <Image
              source={require("../../assets/loss.png")}
              style={{ width: 35, height: 35, marginRight: 20 }}
            />
            <View style={{ justifyContent: "space-around" }}>
              <View style={{ marginBottom: 10 }}>
                <Text style={styles.cardTitle}>Fecha: </Text>
                <Text style={styles.cardTitleBtc}>{this.props.date}</Text>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Text style={styles.cardTitle}>Monto: </Text>
                <Text style={styles.cardTitleBtc}>{this.props.monto}</Text>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Text style={styles.cardTitle}>Fee: </Text>
                <Text style={styles.cardTitleBtc}>{this.props.fee}</Text>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Text style={styles.cardTitle}>Address: </Text>
                <Text style={styles.cardTitleAddress}>
                  {this.props.address}
                </Text>
              </View>
            </View>
          </CardItem>
        </Card>
      </View>
    );
  }
}

export default HistoryCard;
