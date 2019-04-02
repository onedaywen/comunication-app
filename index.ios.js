import React, { Component } from 'react'
import { AppRegistry, Text, View, Image } from 'react-native'
import Message from './src/pages/message/index'
import Work from './src/pages/work/index'
import Communication from './src/pages/communication/index'
import Mine from './src/pages/mine/index'
import Login from './src/pages/login/index'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
const routeNameMap = {
  Message: { 
    label: '消息',
    icon: require('./src/assets/icon/icon-msg.png'),
    activeIcon: require('./src/assets/icon/icon-msg-active.png'),
    routeName: 'Message'
  },
  Work: {
    label: '工作',
    icon: require('./src/assets/icon/icon-work.png'),
    activeIcon: require('./src/assets/icon/icon-work-active.png'),
    routeName: 'Work'
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
const AppNavigator = createBottomTabNavigator(
  { 
    Message: { screen: Message },
    Work: { screen: Work },
    Communication: { screen: Communication },
    Mine: { screen: Mine },
  },
  {
    initialRouteName: 'Message',
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        const config = routeNameMap[routeName] || {}
        if (routeName === 'Login') {
          return
        }
        return (
          <Image source={config.icon}
                 style={{width: 24, height: 24}}></Image>
        )
      },
      tabBarLabel: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        const config = routeNameMap[routeName] || {}
        if (routeName === 'Login') {
          return
        }
        return (
          <Text style={{textAlign: 'center'}}>{config.label}</Text>
        )
      },
    })
  }
)

export default class MyApp extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <AppNavigator></AppNavigator>
    )
  }
}

AppRegistry.registerComponent('MyApp', () => MyApp)
