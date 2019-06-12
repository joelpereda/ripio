import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Card, CardItem, Body } from 'native-base';
import { styles } from '../styles/styles';
import { ScrollView } from 'react-native-gesture-handler';

class TabOverview extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={[styles.title, { marginTop: 10 }]}>Wallets</Text>
                <ScrollView horizontal={true}>
                    <Card style={{ height: 100, width: 250, borderRadius: 12 }}>
                        <CardItem style={{ borderRadius: 12 }}>
                            <Body>
                                <Text>
                                //Your text here
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{ height: 100, width: 250, borderRadius: 12 }}>
                        <CardItem style={{ borderRadius: 12 }}>
                            <Body>
                                <Text>
                                //Your text here
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{ height: 100, width: 250, borderRadius: 12 }}>
                        <CardItem style={{ borderRadius: 12 }}>
                            <Body>
                                <Text>
                                //Your text here
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{ height: 100, width: 250, borderRadius: 12 }}>
                        <CardItem style={{ borderRadius: 12 }}>
                            <Body>
                                <Text>
                                //Your text here
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                </ScrollView>
            </View>
        );
    }
}

export default TabOverview;