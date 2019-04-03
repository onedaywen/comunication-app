import React, { Component } from 'react'
import { AppRegistry, AsyncStorage, Text, View, Image, ActivityIndicator, StatusBar, StyleSheet, Button } from 'react-native'
import MessageScreen from './src/pages/message/index'
import WorkScreen from './src/pages/work/index'
import CommunicationScreen from './src/pages/communication/index'
import MineScreen from './src/pages/mine/index'
import LoginScreen from './src/pages/login/index'
import AuthLoadingScreen from './src/pages/auth-loading/index'
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation'
import { primaryColor } from './src/styles/var'
const routeNameMap = {
  Message: { 
    label: '消息',
    icon: require('./src/assets/icon/icon-msg.png'),
    activeIcon: require('./src/assets/icon/icon-msg-active.png'),
    routeName: 'Message'
  },
  Communication: {
    label: '通讯录',
    icon: require('./src/assets/icon/icon-communicate.png'),
    activeIcon: require('./src/assets/icon/icon-communicate-active.png'),
    routeName: 'Communication'
  },
  Mine: {
    label: '我',
    icon: require('./src/assets/icon/icon-me.png'),
    activeIcon: require('./src/assets/icon/icon-me-active.png'),
    routeName: 'Mine'
  },
}
const BottomNavigator = createBottomTabNavigator(
  { 
    Message: { screen: MessageScreen },
    Communication: { screen: CommunicationScreen },
    Mine: { screen: MineScreen },
  },
  {
    initialRouteName: 'Message',
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        const config = routeNameMap[routeName] || {}
        return (
          <Image source={focused ? config.activeIcon : config.icon}
                 style={{width: 22, height: 22, marginTop: 5}}></Image>
        )
      },
      tabBarLabel: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        const config = routeNameMap[routeName] || {}
        return (
          <Text style={{textAlign: 'center', fontSize: 12, color: focused ? primaryColor : '#999'}}>{config.label}</Text>
        )
      },
      tabBarOptions: {
        inactiveBackgroundColor: '#fff',
        activeBackgroundColor: '#f1f4f7'
      }
    })
  }
)
const SwitchNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Login: LoginScreen,
  BottomNavigator: BottomNavigator
}, {
  initialRouteName: 'AuthLoading'
})
class MyApp extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <SwitchNavigator></SwitchNavigator>
    )
  }
}
AppRegistry.registerComponent('MyApp', () => MyApp)
