import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { Card, CardItem, Body, Icon } from "native-base";
import { styles } from "../styles/styles";

class TabOverview extends Component {
  press(press) {
    press();
  }
  render() {
    const { press } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Text style={[styles.title, { marginTop: 10 }]}>Criptomonedas</Text>
        <TouchableOpacity onPress={() => this.press(press)}>
          <Card style={styles.card}>
            <CardItem
              style={{
                borderRadius: 12,
                flexDirection: "row",
                justifyContent: "space-between"
              }}
              header={true}
            >
              <Image
                source={require("../../assets/btc.png")}
                style={{ width: 35, height: 35 }}
              />
              <View>
                <Text style={styles.cardTitleBtc}>Bitcoin</Text>
                <Text style={styles.cardSubtitle}>BTC/ARS</Text>
              </View>
              <View>
                <Text style={styles.cardTitle}>Compra</Text>
                <Text style={styles.cardPriceBuy}>
                  $ {this.props.btcBuy.substr(0, 6)}
                </Text>
              </View>
              <View>
                <Text style={styles.cardTitle}>Venta</Text>
                <Text style={styles.cardPriceSell}>
                  ${this.props.btcSell.substr(0, 6)}
                </Text>
              </View>
            </CardItem>
            <CardItem style={{ borderRadius: 12 }}>
              <Body>
                <View style={this.props.styleVariation}>
                  <Text style={styles.cardText}>{this.props.variation}</Text>
                  <Icon
                    name={this.props.iconName}
                    type={this.props.iconType}
                    style={{
                      color: "white",
                      marginLeft: 10,
                      textAlign: "center"
                    }}
                  />
                </View>
              </Body>
            </CardItem>
          </Card>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TabOverview;
