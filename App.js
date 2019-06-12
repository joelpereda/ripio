/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import Drawer from './src/components/drawer';
import HomeScreen from './src/screens/homeScreen';

//Drawer config
const DrawerStack = createDrawerNavigator({
  Menu: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,

    }
  }
},
  {
    contentComponent: Drawer,
    drawerWidth: 290,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  });

//Navigator config
const AppNavigator = createStackNavigator({
  Home: {
    screen: DrawerStack,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(AppNavigator);