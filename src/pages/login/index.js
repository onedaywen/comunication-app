import React, { Component } from 'react'
import styles from './index.css.js'
import { Text, Image, View, TextInput, Button } from 'react-native'
import THeader from '../../components/t-header/index'
import TFooter from '../../components/t-footer/index'
// import Toast from 'react-native-root-toast'
export default class Message extends Component {
  constructor (props) {
    super(props)
    this.state = {
      account: '',
      password: ''
    }
  }
  handleAccount (text) {
    this.setState({
      ...this.state,
      account: text
    })
  }
  handlePassword (text) {
    this.setState({
      ...this.state,
      password: text
    })
  }
  handleLogin () {
    // Toast.show('请求成功')
    fetch('https://mywebsite.com/endpoint/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
      })
    })
  }
  render() {
    let state = this.state
    return (
      <View style={styles.pageView}>
        <THeader></THeader>
        <View style={styles.contentBox}>
          <View style={styles.textInputBox}>
            <TextInput
              style={styles.textInput}
              onChangeText={text => this.handleAccount(text)}
              value={this.state.account}
              placeholder="请输入账号"
              maxLength={6}
            />
          </View>
          <View style={styles.textInputBox}>
            <TextInput
              style={styles.textInput}
              onChangeText={text => this.handlePassword({text})}
              value={this.state.password}
              placeholder="请输入密码"
              maxLength={6}
            />
          </View>
          <View style={styles.buttonBox}>
            <Button
              style={styles.button}
              onPress={this.handleLogin.bind(this)}
              title="登陆"
              color="#fff"
              fontSize={50}
              accessibilityLabel="app登陆按钮"
            />
          </View>
        </View>
        <TFooter></TFooter>
      </View>
    )
  }
}
