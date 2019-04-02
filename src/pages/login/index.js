import React, { Component } from 'react'
import styles from './index.css.js'
import { Text, Image, View, TextInput, Button, AsyncStorage } from 'react-native'
import { primaryColor } from '../../styles/var'
import TButton from '../../components/t-button/index'
export default class Message extends Component {
  constructor (props) {
    super(props)
    this.state = {
      account: '',
      password: '',
      token: ''
    }
  }
  async getToken () {
    try {
      let token = await AsyncStorage.getItem('token')
      this.setState({
        ...this.state,
        token
      })
    } catch (e) {
      this.setState({
        ...this.state,
        token: 'token无数据'
      })
    }
  }
  async removeToken () {
    try {
      let token = await AsyncStorage.removeItem('token')
      this.setState({
        ...this.state,
        token
      })
      return true
    } catch (e) {
      this.setState({
        ...this.state,
        token: 'token无数据'
      })
      return false
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
  async handleLogin () {
    try {
      await AsyncStorage.setItem('token', 'token_' + Math.random().toString(36).substr(2))
      this.props.navigation.navigate('Message')
    } catch (e) {}
  }
  componentWillMount () {
    this.getToken()
  }
  render() {
    let state = this.state
    return (
      <View style={styles.pageView}>
        <View style={styles.contentBox}>
          <Text>{this.state.token}</Text>
          <View style={styles.textInputBox}>
            <TextInput
              style={styles.textInput}
              onChangeText={text => this.handleAccount(text)}
              value={this.state.account}
              placeholder="请输入账号"
              maxLength={6}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.textInputBox}>
            <TextInput
              style={styles.textInput}
              onChangeText={text => this.handlePassword(text)}
              value={this.state.password}
              placeholder="请输入密码"
              maxLength={6}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.buttonBox}>
            <TButton label="登陆"
              style={styles.button}
              onPress={this.handleLogin.bind(this)}
              accessibilityLabel="app登陆按钮"
              />
          </View>
        </View>
      </View>
    )
  }
}
