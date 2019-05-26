/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'native-base'

class Drawer extends Component {
    constructor(props) {
        super(props);
    }

    firstList = [
        { "title": "Billetera", "id": "001" },
        { "title": "Recibir cripto", "id": "002" },
        { "title": "Enviar", "id": "003" },
        { "title": "Promociones", "id": "004" }
    ]

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <ImageBackground source={require('../../assets/texture.jpg')} 
                    style={{
                        width: '100%',
                        height: '100%'
                    }}>
                        <View style={styles.avatarContainer}>
                            <Image
                                style={{ width: 65, height: 65 }}
                                source={require('../../assets/avatar.png')} />
                        </View>
                        <View style={styles.textHeaderContainer}>
                            <Text style={styles.drawerName}>Mauro Joel Pereda</Text>
                            <Text style={styles.drawerEmail}>Maurojoelpereda@gmail.com</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.firstList}>
                    <FlatList
                        renderItem={({ item, index }) => {
                            return (
                                <View style={styles.listRow}>
                                    <Icon style={styles.rowIcon} name='ios-wallet' type='Ionicons'></Icon>
                                    <Text style={styles.rowText}>{item.title}</Text>
                                </View>
                            )
                        }
                        }
                        data={this.firstList}
                    />
                </View>
            </ScrollView>
        );
    }
}


export default Drawer;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 1,
        justifyContent: 'space-between',
        height: 200
    },
    avatarContainer: {
        flex: 1,
        margin: 10
    },
    textHeaderContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        margin: 10
    },
    drawerName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    drawerEmail: {
        fontSize: 16,
        color: '#fff'
    },
    firstList: {
        flex: 1
    },
    listRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowIcon: {
        marginLeft: 15
    },
    rowText: {
        fontSize: 16,
        color: '#000',
        marginLeft: 15,
    }
});
