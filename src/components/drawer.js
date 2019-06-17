import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Switch,
  Linking
} from "react-native";
import { Icon } from "native-base";
import { styles as Styles } from "./styles";
import { styles } from "../styles/styles";
import { stylesDark } from "../styles/stylesDark";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import { changeStyles } from "../actions/price.actions";

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false
    };
  }

  handleDarkMode(value) {
    this.setState({
      darkMode: !this.state.darkMode
    });
    console.log("value :", value);
    this.props.loadStyles(value);
  }

  render() {
    return (
      <View
        style={
          this.state.darkMode ? stylesDark.preContainer : styles.preContainer
        }
      >
        <ScrollView
          style={
            this.state.darkMode
              ? stylesDark.containerDrawer
              : styles.containerDrawer
          }
        >
          <View style={this.state.darkMode ? stylesDark.header : styles.header}>
            <View
              style={
                this.state.darkMode
                  ? stylesDark.avatarContainer
                  : styles.avatarContainer
              }
            >
              <Image
                style={{ width: 65, height: 65 }}
                source={require("../../assets/man.png")}
              />
            </View>
            <View
              style={
                this.state.darkMode
                  ? stylesDark.textHeaderContainer
                  : styles.textHeaderContainer
              }
            >
              <Text
                style={
                  this.state.darkMode
                    ? stylesDark.drawerName
                    : styles.drawerName
                }
              >
                Joel Pereda
              </Text>
              <Text
                style={
                  this.state.darkMode
                    ? stylesDark.drawerEmail
                    : styles.drawerEmail
                }
              >
                maurojoelpereda@gmail.com
              </Text>
            </View>
          </View>
          <View
            style={
              this.state.darkMode
                ? stylesDark.drawerButtons
                : styles.drawerButtons
            }
          >
            <Text
              style={
                this.state.darkMode
                  ? stylesDark.drawerSubtitle
                  : styles.drawerSubtitle
              }
            >
              Ajustes
            </Text>
            <View style={styles.drawerRow}>
              <Text
                style={
                  this.state.darkMode
                    ? stylesDark.buttonDrawerSwitch
                    : styles.buttonDrawerSwitch
                }
              >
                Modo oscuro
              </Text>
              <Switch
                
                thumbColor="#0187d0"
                trackColor="#0187d0"
                value={this.state.darkMode}
                onValueChange={value => this.handleDarkMode(value)}
              />
            </View>
            <Text
              style={
                this.state.darkMode
                  ? stylesDark.drawerSubtitle
                  : styles.drawerSubtitle
              }
            >
              Ripio wallet
            </Text>

            <TouchableOpacity
              style={styles.drawerRow}
              onPress={() => Linking.openURL("https://ripio.com/es/faq/")}
            >
              <Text
                style={
                  this.state.darkMode
                    ? stylesDark.buttonDrawerText
                    : styles.buttonDrawerText
                }
              >
                FAQ
              </Text>
              <Icon
                name="ios-arrow-forward"
                type="Ionicons"
                style={{ color: "#555", fontSize: 20 }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.drawerRow}
              onPress={() => Linking.openURL("https://ripio.com/es/nosotros/")}
            >
              <Text
                style={
                  this.state.darkMode
                    ? stylesDark.buttonDrawerText
                    : styles.buttonDrawerText
                }
              >
                Sobre nosotros
              </Text>
              <Icon
                name="ios-arrow-forward"
                type="Ionicons"
                style={{ color: "#555", fontSize: 20 }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.drawerRow}
              onPress={() => Linking.openURL("https://ripio.com/es/terminos/")}
            >
              <Text
                style={
                  this.state.darkMode
                    ? stylesDark.buttonDrawerText
                    : styles.buttonDrawerText
                }
              >
                Terminos y condiciones
              </Text>
              <Icon
                name="ios-arrow-forward"
                type="Ionicons"
                style={{ color: "#555", fontSize: 20 }}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { price } = state;
  return {
    price
  };
}

const mapDispachToProps = dispatch => {
  return {
    loadStyles: data => dispatch(changeStyles(data))
  };
};

const connectedDrawer = connect(
  mapStateToProps,
  mapDispachToProps
)(withNavigation(Drawer));
export { connectedDrawer as Drawer };

// export default Drawer;
