import React, { Component } from 'react'
import { AppRegistry, Text, View, ScrollView } from 'react-native'
import Message from './src/pages/message/index'
import Work from './src/pages/work/index'
import Communication from './src/pages/communication/index'
import Mine from './src/pages/mine/index'
import Login from './src/pages/login/index'
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
    initialRouteName: 'Message'
  }
)

export default class MyApp extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    // return (
    //   <View style={{flexDirection: 'column', justifyContent: 'space-between', height: 600}}>
    //     <View style={{borderWidth: 1, height: 60}}><Text>hello world top</Text></View>
    //     <ScrollView style={{borderWidth: 1, height: 200}}>
    //       <Text style={{lineHeight: 200}}>hello world top1</Text>
    //       <Text style={{lineHeight: 200}}>hello world top</Text>
    //       <Text style={{lineHeight: 200}}>hello world top</Text>
    //       <Text style={{lineHeight: 200}}>hello world top</Text>
    //       <Text style={{lineHeight: 200}}>hello world top2</Text>
    //       <Text style={{lineHeight: 200}}>hello world top</Text>
    //       <Text style={{lineHeight: 200}}>hello world top</Text>
    //       <Text style={{lineHeight: 200}}>hello world top</Text>
    //       <Text style={{lineHeight: 200}}>hello world top1</Text>
    //     </ScrollView>
    //     <View style={{borderWidth: 1, height: 60}}><Text>hello world bottom</Text></View>
    //   </View>
    // )
    return (
      <AppNavigator></AppNavigator>
    )
  }
}

AppRegistry.registerComponent('MyApp', () => MyApp)
