import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'
import Message from './src/pages/message/index'
import Work from './src/pages/work/index'
import Communication from './src/pages/communication/index'
import Mine from './src/pages/mine/index'
import Login from './src/pages/login/index'
// import TToast from './src/components/t-toast/index'
import { createStackNavigator } from 'react-navigation'
const AppNavigator = createStackNavigator(
  { 
    Message: { screen: Message },
    Work: { screen: Work },
    Communication: { screen: Communication },
    Mine: { screen: Mine },
    Login: { screen: Login },
  },
  {
    initialRouteName: 'Login'
  }
)

export default class MyApp extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <View>
        {/* <TToast message={'请求成功'}/> */}
        <AppNavigator></AppNavigator>
      </View>
    )
  }
}

AppRegistry.registerComponent('MyApp', () => MyApp)
