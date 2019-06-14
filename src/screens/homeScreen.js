import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Icon, Tabs, Tab, TabHeading } from 'native-base';
import { styles } from '../styles/styles';
import TabOverview from '../components/tabOverview'
import TabActivity from '../components/tabActivity'
import { connect } from 'react-redux';
import { getPrices, loading } from '../actions/price.actions'
import { withNavigation } from "react-navigation";
import Footer from '../components/footer'
import Modal from 'react-native-modal';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from 'react-native-chart-kit'
class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            activity: true,
            chart: false
        }
    }

    componentDidMount() {
        this.props.onLoadPrices(true);
        this.props.getPrices()
    }

    showModalCard() {
        this.setState({
            isModalVisible: true
        })
        console.log('asdsad')
    }
    hideModalCard() {
        this.setState({
            isModalVisible: false
        })
    }
    handleActivityModal() {
        if (!this.state.activity) {
            this.setState({ activity: true, chart: false })
        }
    }

    handleChartModal() {
        if (!this.state.chart) {
            this.setState({ chart: true, activity: false })
        }
    }

    render() {
        console.log('this.state.activity :', this.state.activity);
        console.log('this.state.chart :', this.state.chart);

        let { price } = this.props;
        if (!price.price.isLoading) {
            console.log('price :', price.price.data.rates.ARS_BUY);
        }
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Text style={styles.title}>ripio.</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                        <Icon name='menu' type='MaterialIcons' style={[styles.icon, { color: 'grey', marginTop: 5, }]} />
                    </TouchableOpacity>
                </View>
                <View style={styles.balanceContainer}>
                    <Text style={styles.balanceTextTitle}>MI BALANCE</Text>
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
                                <Text style={{ fontFamily: 'ProductSans-Bold', fontSize: 17, color: '#000' }}>Resumen</Text>
                            </TabHeading>}
                    >
                        <TabOverview btcPrice={price.price.isLoading ? '-' : `${price.price.data.rates.ARS_BUY} ARS`} />
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
                <Footer press={() => this.showModalCard()}></Footer>
                <Modal
                    style={styles.modal}
                    swipeDirection='down'
                    isVisible={this.state.isModalVisible}
                    onBackButtonPress={() => { this.hideModalCard() }}
                    onBackdropPress={() => { this.hideModalCard() }}
                    onSwipeComplete={() => { this.hideModalCard() }}
                    animationInTiming={1000}
                    animationOutTiming={1000}
                    animationIn='slideInUp'
                    animationOut='slideOutDown'
                    backdropOpacity={0}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>BILLETERA BITCOIN</Text>
                            <Text style={styles.modalBalance}>0 BTC</Text>
                        </View>
                        <View style={styles.modalActivity}>
                            <View style={styles.modalRow}>
                                <TouchableOpacity onPress={() => this.handleActivityModal()}>
                                    <Text style={this.state.activity ? styles.modalActivityTitleActive : styles.modalActivityTitle}>Historial</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.handleChartModal()}>
                                    <Text style={this.state.chart ? styles.modalChartTitleActive : styles.modalChartTitle}>Gráfico</Text>
                                </TouchableOpacity>
                            </View>
                            {this.state.activity ?
                                <View style={styles.activityViewModal}>

                                </View>
                                :
                                <View style={styles.chartViewModal}>
                                    <Text style={styles.subtitleChart}>1 BTC = {price.price.isLoading ? '-' : `${price.price.data.rates.USD_BUY} USD`}</Text>
                                    <LineChart
                                        data={{
                                            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                                            datasets: [{
                                                data: [
                                                    1263,
                                                    1571,
                                                    3543,
                                                    2327,
                                                    3824,
                                                    price.price.data.rates.USD_BUY
                                                ]
                                            }]
                                        }}
                                        width={Dimensions.get('window').width} // from react-native
                                        height={300}
                                        yAxisLabel={'$'}
                                        chartConfig={{
                                            backgroundColor: '#e26a00',
                                            backgroundGradientFrom: '#ff9951',
                                            backgroundGradientTo: '#ff6a00',
                                            decimalPlaces: 0, // optional, defaults to 2dp
                                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                            style: {
                                                borderRadius: 20,
                                            }
                                        }}
                                        bezier
                                        style={{
                                            borderRadius: 20,
                                        }}
                                    />
                                </View>
                            }
                        </View>
                    </View>
                </Modal>
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


const mapDispachToProps = (dispatch) => {
    return {
        onLoadPrices: (data) => dispatch(loading(data)),
        getPrices: (data) => dispatch(getPrices(data)),
    }
}

const connectedHomeScreen = connect(mapStateToProps, mapDispachToProps)(withNavigation(HomeScreen));
export { connectedHomeScreen as HomeScreen };
