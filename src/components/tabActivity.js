import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon, Tabs, Tab } from 'native-base';
import { styles } from '../styles/styles';

class TabActivity extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Tab 1</Text>
            </View>
        );
    }
}

export default TabActivity;