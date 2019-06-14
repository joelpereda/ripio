import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";
import Button from "../components/button";
class Footer extends Component {
  pressReceive(pressReceive) {
    pressReceive();
  }
  pressSend(pressSend) {
    pressSend();
  }
  render() {
    const { pressReceive, pressSend } = this.props;
    return (
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => this.pressReceive(pressReceive)}>
          <Button
            iconName="ios-arrow-dropup"
            iconType="Ionicons"
            buttonText="Enviar btc"
            buttonStyle={{
              fontSize: 17,
              fontFamily: "ProductSans-Regular",
              color: "#a01616"
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pressSend(pressSend)}>
          <Button
            iconName="ios-arrow-dropdown"
            iconType="Ionicons"
            buttonText="Recibir btc"
            buttonStyle={{
              fontSize: 17,
              fontFamily: "ProductSans-Regular",
              color: "#0187d0"
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Footer;
