import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'native-base'
import { styles } from './styles';

class Drawer extends Component {

    firstList = [
        { "title": "Billetera", "id": "001" },
        { "title": "Recibir cripto", "id": "002" },
        { "title": "Enviar", "id": "003" },
        { "title": "Promociones", "id": "004" }
    ]

    _keyExtractor = (item, index) => item.id;

    render() {
        return (
            <View style={styles.preContainer}>
                <ScrollView style={styles.container}>
                    <View style={styles.header}>
                        <ImageBackground
                            source={require('../../assets/texture.jpg')}
                            imageStyle={{
                                borderTopRightRadius: 12,
                                borderBottomLeftRadius: 12,
                                borderBottomRightRadius: 12
                            }}
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
                            keyExtractor={this._keyExtractor}
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
            </View>
        );
    }
}

export default Drawer;