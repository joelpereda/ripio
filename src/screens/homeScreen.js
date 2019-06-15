import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Linking,
  Image,
  Clipboard,
  RefreshControl
} from "react-native";
import {
  Icon,
  Tabs,
  Tab,
  TabHeading,
  Toast,
  Form,
  Item,
  Input,
  Spinner
} from "native-base";
import { styles } from "../styles/styles";
import { stylesDark } from "../styles/stylesDark";
import { connect } from "react-redux";
import { getPrices, loading } from "../actions/price.actions";
import { getWallet, sendBtc } from "../actions/wallet.actions";
import { withNavigation } from "react-navigation";
import { LineChart } from "react-native-chart-kit";
import TabOverview from "../components/tabOverview";
import TabActivity from "../components/tabActivity";
import Footer from "../components/footer";
import Modal from "react-native-modal";
import coinAddressValidator from "coin-address-validator";
import { ScrollView } from "react-native-gesture-handler";
import { Styles } from "../styles/styles";
import Placeholder, { Line, Media } from "rn-placeholder";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      isModalVisible: false,
      modalSendBtc: false,
      modalReceiveBtc: false,
      modalConfirm: false,
      modalLoading: false,
      modalOk: false,
      loadingSend: false,
      activity: true,
      chart: false,
      refreshing: false,
      bitcoin: Number(0),
      btcBuy: "-",
      btcSell: "-",
      variation: "-",
      clipboard: "",
      wallet: {}
    };
  }

  componentDidMount() {
    this.props.onLoadPrices(true);
    this._getPrices();
    this._getWallet();
  }

  _getPrices() {
    this.props.getPrices().then(prices => {
      console.log("prices :", prices);
      this.setState({
        btcBuy: prices.data.rates.ARS_BUY,
        btcSell: prices.data.rates.ARS_SELL,
        variation: prices.data.variation.ARS.toString()
      });
    });
  }

  _getWallet() {
    this.props.getWallet().then(wallet => {
      console.log("wallet _getWallet:", wallet);
      this.setState({
        wallet: wallet.data
      });
    });
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.props.getPrices().then(prices => {
      console.log("prices :", prices);
      this.setState({
        btcBuy: prices.data.rates.ARS_BUY,
        btcSell: prices.data.rates.ARS_SELL,
        variation: prices.data.variation.ARS.toString(),
        refreshing: false
      });
    });
    this.props.getWallet().then(wallet => {
      console.log("wallet _getWallet:", wallet);
      this.setState({
        wallet: wallet.data,
        refreshing: false
      });
    });
  };

  showModalCard() {
    this.setState({
      isModalVisible: true
    });
    console.log("asdsad");
  }

  hideModalCard() {
    this.setState({
      isModalVisible: false
    });
  }

  showModalSendBtc() {
    this.setState({
      modalSendBtc: true
    });
  }

  hideModalSendBtc() {
    this.setState({
      clipboard: "",
      bitcoin: "",
      modalSendBtc: false
    });
  }

  showModalReceiveBtc() {
    this.setState({
      modalReceiveBtc: true
    });
  }

  hideModalReceiveBtc() {
    this.setState({
      modalReceiveBtc: false
    });
  }

  showModalConfirm() {
    this.setState({
      modalConfirm: true
    });
  }

  hideModalConfirm() {
    this.setState({
      modalConfirm: false
    });
  }

  sendBitcoin() {
    const isBtcAddress = coinAddressValidator.validate(
      this.state.clipboard,
      "btc",
      "prod"
    );
    if (isBtcAddress) {
      if (this.state.clipboard != "" && this.state.bitcoin != 0) {
        this.showModalConfirm();
      } else {
        Toast.show({
          text: "Debe completar ambos campos para continuar.",
          buttonText: "X",
          position: "top",
          type: "danger",
          textStyle: { fontFamily: "ProductSans-Regular" },
          duration: 3000
        });
      }
    } else {
      Toast.show({
        text: "Introduzca una dirección correcta.",
        buttonText: "X",
        position: "top",
        type: "danger",
        textStyle: { fontFamily: "ProductSans-Regular" },
        duration: 3000
      });
    }
  }

  aceptSend(address, monto) {
    console.log("id :", address);
    console.log("monto :", monto);
    this.props
      .sendBtc(address, monto)
      .then(() => {
        this.loadingSend(true);
        this.showModalOk();
        setTimeout(() => {
          this.props.getWallet().then(wallet => {
            this.setState({
              wallet: wallet.data,
              refreshing: false
            });
          });
          this.hideModalSendBtc();
          this.loadingSend(false);
        }, 2500);
      })
      .catch(err => {
        console.log("err :", err);
      });
  }

  showModalLoading() {
    this.setState({
      modalLoading: true
    });
  }

  loadingSend(value) {
    this.setState({
      loadingSend: value
    });
  }

  hideModalLoading() {
    this.setState({
      modalLoading: false
    });
  }

  showModalOk() {
    this.setState({
      modalOk: true
    });
  }

  hideModalOk() {
    this.setState({
      modalOk: false
    });
  }

  handleActivityModal() {
    if (!this.state.activity) {
      this.setState({ activity: true, chart: false });
    }
  }

  handleChartModal() {
    if (!this.state.chart) {
      this.setState({ chart: true, activity: false });
    }
  }

  copyToClipboard(value) {
    Clipboard.setString(value);
    Toast.show({
      text: "Copiado al portapapeles",
      buttonText: "X",
      position: "top",
      textStyle: { fontFamily: "ProductSans-Regular" },
      duration: 2000
    });
  }
  async getClipboard() {
    var content = await Clipboard.getString();
    this.setState({
      clipboard: content
    });
  }

  changeInputBitcoin(value) {
    this.setState({
      bitcoin: value
    });
  }

  changeInput(value) {
    this.setState({
      clipboard: value
    });
  }

  render() {
    let { price, wallet } = this.props;
    console.log("wallet :", wallet);
    let btcSell = this.state.btcSell;
    let btcBuy = this.state.btcBuy;
    let variation = this.state.variation.substr(0, 6);
    let balanceBtc = wallet.isLoading ? 0 : wallet.data[0].balance;
    let balanceArs = balanceBtc * btcSell;
    balanceBtc = balanceBtc.toString().substr(0, 14);
    let darkMode = price.darkMode;
    return (
      <View style={darkMode ? stylesDark.container : styles.container}>
        <Styles />
        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://ripio.com/es/")}
          >
            {/* <Text style={styles.title}>ripio.</Text> */}
            <Image
              source={
                darkMode
                  ? require("../../assets/ripio-white.png")
                  : require("../../assets/ripio-dark.png")
              }
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <Icon
              name="menu"
              type="MaterialIcons"
              style={[styles.icon, { color: "grey", marginTop: 5 }]}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.balanceContainer}>
          <Text
            style={
              darkMode ? stylesDark.balanceTextTitle : styles.balanceTextTitle
            }
          >
            MI BALANCE
          </Text>
          <Text
            style={
              darkMode ? stylesDark.balanceTextValue : styles.balanceTextValue
            }
          >
            AR$ {balanceArs ? balanceArs : 0}
          </Text>
          <Text
            style={darkMode ? stylesDark.balanceBtcText : styles.balanceBtcText}
          >
            BTC {balanceBtc ? balanceBtc : 0}
          </Text>
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          <Tabs
            style={styles.tabContainer}
            tabBarPosition="top"
            tabBarUnderlineStyle={{
              backgroundColor: "#0187d0"
            }}
          >
            <Tab
              activeTextStyle={{
                color: darkMode ? "#000" : "#fff",
                fontFamily: "ProductSans-Bold"
              }}
              activeTabStyle={{
                backgroundColor: "transparent",
                shadowColor: "transparent",
                shadowOpacity: 0
              }}
              tabStyle={{
                backgroundColor: "transparent",
                shadowColor: "transparent",
                shadowOpacity: 0
              }}
              textStyle={{ fontFamily: "ProductSans-Bold" }}
              heading={
                <TabHeading
                  style={{ backgroundColor: darkMode ? "#000" : "#fff" }}
                >
                  <Text
                    style={{
                      fontFamily: "ProductSans-Bold",
                      fontSize: 17,
                      color: darkMode ? "#fff" : "#000"
                    }}
                  >
                    Resumen
                  </Text>
                </TabHeading>
              }
            >
              <TabOverview
                style={{ backgroundColor: darkMode ? "#000" : "#fff" }}
                variationText="Variación"
                press={() => this.showModalCard()}
                variation={`${variation}`}
                styleVariation={
                  variation <= 0 ? styles.variationRed : styles.variationBlue
                }
                iconName={
                  variation <= 0 ? "md-arrow-dropdown" : "md-arrow-dropup"
                }
                iconType="Ionicons"
                cardText="Card text"
                btcBuy={price.isLoading ? "-" : `${btcBuy}`}
                btcSell={price.isLoading ? "-" : `${btcSell}`}
              />
            </Tab>
            <Tab
              activeTextStyle={{
                color: darkMode ? "#fff" : "#000",
                fontFamily: "ProductSans-Bold"
              }}
              activeTabStyle={{
                backgroundColor: darkMode ? "#000" : "#fff",
                shadowColor: "transparent",
                shadowOpacity: 0
              }}
              tabStyle={{
                backgroundColor: darkMode ? "#000" : "#fff",
                shadowColor: "transparent",
                shadowOpacity: 0,
                elevation: 0
              }}
              textStyle={{
                fontFamily: "ProductSans-Bold"
              }}
              heading={
                <TabHeading
                  style={{
                    backgroundColor: darkMode ? "#000" : "#fff"
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "ProductSans-Bold",
                      fontSize: 17,
                      color: darkMode ? "#fff" : "#000"
                    }}
                  >
                    Actividad
                  </Text>
                </TabHeading>
              }
            >
              <TabActivity />
            </Tab>
          </Tabs>
        </ScrollView>
        <Footer
          iconStyle={{
            textAlignVertical: "center",
            fontSize: 35,
            color: darkMode ? "#fff" : "#000"
          }}
          pressReceive={() => this.showModalSendBtc()}
          pressSend={() => this.showModalReceiveBtc()}
        />
        {/* MODAL CUANDO APRETAS EL CARD */}
        <Modal
          style={styles.modal}
          swipeDirection="down"
          isVisible={this.state.isModalVisible}
          onBackButtonPress={() => {
            this.hideModalCard();
          }}
          onBackdropPress={() => {
            this.hideModalCard();
          }}
          onSwipeComplete={() => {
            this.hideModalCard();
          }}
          animationInTiming={1000}
          animationOutTiming={1000}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          backdropOpacity={0}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>BITCOIN</Text>
              <Text style={styles.modalBalanceBtc}>{balanceBtc} BTC</Text>
              <Text style={styles.modalBalanceArs}>AR$ {balanceArs}</Text>
            </View>
            <View style={styles.modalActivity}>
              <View style={styles.modalRow}>
                <TouchableOpacity onPress={() => this.handleActivityModal()}>
                  <Text
                    style={
                      this.state.activity
                        ? styles.modalActivityTitleActive
                        : styles.modalActivityTitle
                    }
                  >
                    Historial
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.handleChartModal()}>
                  <Text
                    style={
                      this.state.chart
                        ? styles.modalChartTitleActive
                        : styles.modalChartTitle
                    }
                  >
                    Gráfico
                  </Text>
                </TouchableOpacity>
              </View>
              {this.state.activity ? (
                <View style={styles.activityViewModal}>
                  <Text style={styles.activityViewModalText}>
                    No hay operaciones realizadas :(
                  </Text>
                </View>
              ) : (
                <View style={styles.chartViewModal}>
                  <Text style={styles.subtitleChart}>
                    1 BTC = {price.isLoading ? "-" : `${btcSell} ARS`}
                  </Text>
                  <LineChart
                    data={{
                      labels: [
                        "Enero",
                        "Febrero",
                        "Marzo",
                        "Abril",
                        "Mayo",
                        "Junio"
                      ],
                      datasets: [
                        {
                          data: [
                            128848,
                            151706,
                            177448,
                            232382,
                            299465,
                            btcBuy.toString().substr(0, 6)
                          ]
                        }
                      ]
                    }}
                    width={Dimensions.get("window").width}
                    height={300}
                    yAxisLabel={"$"}
                    chartConfig={{
                      backgroundColor: "#e26a00",
                      backgroundGradientFrom: "#ff9951",
                      backgroundGradientTo: "#ff6a00",
                      decimalPlaces: 0,
                      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                      style: {
                        borderRadius: 20
                      }
                    }}
                    bezier
                    style={{
                      borderRadius: 20
                    }}
                  />
                </View>
              )}
            </View>
          </View>
        </Modal>

        {/* MODAL CUANDO APRETAS ENVIAR BTC */}
        <Modal
          style={styles.modal}
          swipeDirection="down"
          isVisible={this.state.modalSendBtc}
          onBackButtonPress={() => {
            this.hideModalSendBtc();
          }}
          onBackdropPress={() => {
            this.hideModalSendBtc();
          }}
          onSwipeComplete={() => {
            this.hideModalSendBtc();
          }}
          animationInTiming={1000}
          animationOutTiming={1000}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          backdropOpacity={0}
        >
          <View style={styles.modalContainerSend}>
            <Text style={styles.modalTitleSend}>ENVIAR BTC</Text>
            <View style={styles.modalSendSaldo}>
              <View style={styles.modalHeaderSend}>
                <Text style={styles.saldoDisponible}>SALDO BTC</Text>
                <Text style={styles.cardText}>{balanceBtc}</Text>
              </View>
              <View style={styles.modalHeaderSend}>
                <Text style={styles.saldoDisponible}>SALDO AR$</Text>
                <Text style={styles.cardText}>{balanceArs}</Text>
              </View>
            </View>
            <View style={styles.inputCard}>
              <Form style={{ width: "100%" }}>
                <Item
                  style={{
                    borderWidth: 0,
                    borderColor: "rgba(255,255,255,0.0)"
                  }}
                  stackedLabel
                >
                  <Input
                    style={{
                      fontFamily: "ProductSans-Regular",
                      borderWidth: 0
                    }}
                    placeholderStyle={{ fontFamily: "ProductSans-Regular" }}
                    placeholder="Introduzca el monto"
                    value={this.state.bitcoin}
                    onChangeText={value => this.changeInputBitcoin(value)}
                    keyboardType="numeric"
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      this.refs["bitcoinAddress"]._root.focus();
                    }}
                  />
                </Item>
                <Item
                  style={{
                    borderWidth: 0,
                    borderColor: "rgba(255,255,255,0.0)"
                  }}
                  stackedLabel
                >
                  <Input
                    ref="bitcoinAddress"
                    style={{
                      fontFamily: "ProductSans-Regular",
                      borderWidth: 0
                    }}
                    placeholderStyle={{ fontFamily: "ProductSans-Regular" }}
                    placeholder="Introduzca la dirección de BTC"
                    value={this.state.clipboard}
                    onChangeText={value => this.changeInput(value)}
                  />
                </Item>
              </Form>
              <TouchableOpacity onPress={() => this.getClipboard()}>
                <Text style={styles.sendClipboardText}>
                  Pegar dirección desde el portapapeles
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.buttonSend}
              onPress={() => {
                this.sendBitcoin();
              }}
            >
              <Text style={styles.buttonSendText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        {/* MODAL CUANDO APRETAS ENVIAR BTC */}
        <Modal
          style={styles.modal}
          swipeDirection="down"
          isVisible={this.state.modalReceiveBtc}
          onBackButtonPress={() => {
            this.hideModalReceiveBtc();
          }}
          onBackdropPress={() => {
            this.hideModalReceiveBtc();
          }}
          onSwipeComplete={() => {
            this.hideModalReceiveBtc();
          }}
          animationInTiming={1000}
          animationOutTiming={1000}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          backdropOpacity={0}
        >
          <View style={styles.modalContainerReceive}>
            <Text style={styles.modalTitleReceive}>RECIBIR BTC</Text>
            <View style={styles.modalHeaderReceive}>
              <Text style={styles.saldoDisponible}>Saldo disponible</Text>
              <Text style={styles.cardText}>{balanceBtc} BTC</Text>
            </View>
            <View style={styles.qrContainer}>
              <Image
                source={require("../../assets/qr.png")}
                style={{ width: 300, height: 300 }}
              />
            </View>
            <View style={styles.addressContainer}>
              <Text style={styles.addressTitle}>Mi dirección BTC</Text>
              <View style={styles.addressRow}>
                <Text style={styles.addressText}>
                  1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    this.copyToClipboard("1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX")
                  }
                >
                  <Icon
                    name="md-copy"
                    type="Ionicons"
                    style={[styles.icon, { color: "#fff", marginLeft: 15 }]}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          style={styles.modal}
          swipeDirection="down"
          isVisible={this.state.modalConfirm}
          onBackButtonPress={() => {}}
          onBackdropPress={() => {}}
          onSwipeComplete={() => {}}
          animationInTiming={1000}
          animationOutTiming={1000}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          backdropOpacity={0}
        >
          <View style={styles.modalConfirm}>
            <Text style={styles.titleConfirm}>¿Estás seguro?</Text>
            <Text style={styles.subtitleConfirm}>
              Estás a punto de enviar {this.state.bitcoin} BTC a{" "}
              {this.state.clipboard}.
            </Text>
            <View style={styles.confirmBtnContainer}>
              <TouchableOpacity
                style={styles.buttonCancel}
                onPress={() => {
                  this.hideModalConfirm();
                }}
              >
                <Text style={styles.buttonCancelText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonConfirm}
                onPress={() => {
                  this.hideModalConfirm();
                  this.aceptSend(
                    "5d05323b035a093b24cc1c1c",
                    this.state.bitcoin
                  );
                }}
              >
                <Text style={styles.buttonConfirmText}>Aceptar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* <Modal
          style={styles.modalLoad}
          swipeDirection="down"
          isVisible={this.state.modalLoading}
          onBackButtonPress={() => {}}
          onBackdropPress={() => {}}
          onSwipeComplete={() => {}}
          animationInTiming={1000}
          animationOutTiming={1000}
          animationIn="fadeIn"
          animationOut="fadeOut"
          backdropOpacity={0}
        >
          <View style={styles.modalLoading}>
            <Spinner />
          </View>
        </Modal> */}
        <Modal
          style={styles.modal}
          swipeDirection="down"
          isVisible={this.state.modalOk}
          onBackButtonPress={() => {
            this.hideModalOk();
          }}
          onBackdropPress={() => {
            this.hideModalOk();
          }}
          onSwipeComplete={() => {
            this.hideModalOk();
          }}
          animationInTiming={500}
          animationOutTiming={500}
          backdropOpacity={0}
        >
          <View style={styles.modalOk}>
            {/* <View style={styles.modalOkHeader}>
              <TouchableOpacity onPress={() => this.hideModalOk()}>
                <Icon
                  name="md-close"
                  type="Ionicons"
                  style={{ color: "#000" }}
                />
              </TouchableOpacity>
            </View> */}
            {this.state.loadingSend ? 
            <View style={{ height: 300 ,width: '90%', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 20}}>
              <Placeholder
                isReady={!this.state.loadingSend}
                animation="fade"
              >
                <Line width="70%" />
                <Line />
                <Line />
                <Line width="30%" />
                <Line />
                <Line />
                <Line width="70%" />
                <Line />
                <Line width="30%" />
                <Line width="50%" />
              </Placeholder>
              </View>
             : 
              <View style={styles.modalOkContainer}>
                <Text style={styles.modalOkTitle}>
                  ¡Transferencia realizada con éxito!
                </Text>
                <Image
                  source={require("../../assets/checked.png")}
                  style={{
                    width: 100,
                    height: 100,
                    marginTop: 30,
                    marginBottom: 30
                  }}
                  resizeMode="center"
                />
                <Text style={styles.modalOkBalances}>
                  Tu nuevo balance {"\n"}
                  BTC {balanceBtc} {"\n"}
                  AR$ {balanceArs}
                </Text>
              </View>
            }
          </View>
        </Modal>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { price, wallet } = state;
  return {
    price,
    wallet
  };
}

const mapDispachToProps = dispatch => {
  return {
    onLoadPrices: data => dispatch(loading(data)),
    getPrices: data => dispatch(getPrices(data)),
    getWallet: data => dispatch(getWallet(data)),
    sendBtc: (address, monto) => dispatch(sendBtc(address, monto))
  };
};

const connectedHomeScreen = connect(
  mapStateToProps,
  mapDispachToProps
)(withNavigation(HomeScreen));
export { connectedHomeScreen as HomeScreen };
