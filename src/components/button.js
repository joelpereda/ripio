import React, { Component } from "react";
import { Text, View } from "react-native";
import { Icon } from "native-base";
import { styles } from "../styles/styles";

class Button extends Component {
  render() {
    return (
      <View style={styles.button}>
        <Icon
          name={this.props.iconName}
          type={this.props.iconType}
          style={this.props.iconStyle}
        />
        <Text style={this.props.buttonStyle}>{this.props.buttonText}</Text>
      </View>
    );
  }
}

export default Button;
