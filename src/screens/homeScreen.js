import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { styles } from '../styles/styles';

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Text style={styles.title}>ripio.</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                        <Icon name='menu' type='MaterialIcons' style={[styles.icon, { color: 'grey', marginTop: 5, }]} />
                    </TouchableOpacity>
                </View>
                <View style={styles.balanceContainer}>
                    <Text style={styles.balanceTextTitle}>BALANCE</Text>
                    <Text style={styles.balanceTextValue}>0.00 ARS</Text>
                </View>
            </View>
        );
    }
}

export default HomeScreen;