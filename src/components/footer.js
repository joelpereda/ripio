import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon, Tabs, Tab } from 'native-base';
import { styles } from '../styles/styles';
import Button from '../components/button'
class Footer extends Component {
    press(press) {
        press();
    }

    render() {
        const { press } = this.props;
        return (
            <View style={styles.footer}  >
                <TouchableOpacity onPress={() => this.press(press)}>
                    <Button iconName='ios-trending-up' iconType='Ionicons' iconText='Enviar btc'></Button>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Footer;