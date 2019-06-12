import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon, Tabs, Tab, TabHeading } from 'native-base';
import { styles } from '../styles/styles';
import TabOverview from '../components/tabOverview'
import TabActivity from '../components/tabActivity'
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
                <Tabs
                    style={styles.tabContainer}
                    tabBarPosition='top'
                    tabBarUnderlineStyle={{
                        backgroundColor: '#0187d0'
                    }}>
                    <Tab
                        activeTextStyle={{
                            color: 'black',
                            fontFamily: 'ProductSans-Bold'
                        }}
                        activeTabStyle={{
                            backgroundColor: 'transparent',
                            shadowColor: 'transparent',
                            shadowOpacity: 0
                        }}
                        tabStyle={{
                            backgroundColor: 'transparent',
                            shadowColor: 'transparent',
                            shadowOpacity: 0
                        }}
                        textStyle={{ fontFamily: 'ProductSans-Bold' }}
                        heading={
                            <TabHeading style={{ backgroundColor: 'white' }}>
                                <Text style={{ fontFamily: 'ProductSans-Bold', fontSize: 17, color: '#000' }}>Vista general</Text>
                            </TabHeading>}
                    >
                        <TabOverview />
                    </Tab>
                    <Tab
                        activeTextStyle={{
                            color: 'black',
                            fontFamily: 'ProductSans-Bold'
                        }}
                        activeTabStyle={{
                            backgroundColor: '#fff',
                            shadowColor: 'transparent',
                            shadowOpacity: 0
                        }}
                        tabStyle={{
                            backgroundColor: '#fff',
                            shadowColor: 'transparent',
                            shadowOpacity: 0,
                            elevation: 0,
                        }}
                        textStyle={{
                            fontFamily: 'ProductSans-Bold'
                        }}
                        heading={
                            <TabHeading style={{ backgroundColor: 'white' }}>
                                <Text style={{ fontFamily: 'ProductSans-Bold', fontSize: 17, color: '#000' }}>Actividad</Text>
                            </TabHeading>}>
                        <TabActivity />
                    </Tab>
                </Tabs>
            </View>
        );
    }
}

export default HomeScreen;