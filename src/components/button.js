import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon, Tabs, Tab } from 'native-base';
import { styles } from '../styles/styles';

class Footer extends Component {
    render() {
        return (
            <View style={styles.button}>
                <Icon name={this.props.iconName} type={this.props.iconType} style={{ textAlignVertical: 'center' }}></Icon>
                <Text style={styles.buttonText}>{this.props.iconText}</Text>
            </View>
        );
    }
}

export default Footer;