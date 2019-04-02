import React, { Component } from 'react'
import styles from './index.css.js'
import { Text, Image, View, TextInput, Button, AsyncStorage } from 'react-native'
import { primaryColor } from '../../styles/var'
import TButton from '../../components/t-button/index'
import ajax from '../../common/js/ajax'

export default class Message extends Component {
  static navigationOptions = {
    title: '登录'
  }
  constructor (props) {
    super(props)
    this.state = {
      account: '',
      password: '',
      token: '',
      data: '啊啊啊啊啊啊啊啊啊'
    }
  }
  async getToken () {
    try {
      let token = await AsyncStorage.getItem('token')
      if (token !== 'null' && token !== 'undefined') {
        this.setState({
          ...this.state,
          token
        })
      }
    } catch (e) {}
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
      let { account, password } = this.state
      if (!(account && password)) {
        return
      }
      let res = await fetch('http://localhost:3000/login?' + Math.random())
      res = await res.json()
      if (res && res.code === 0) {
        this.setState({
          ...this.state,
          data: res.data.token
        })
        await AsyncStorage.setItem('token', 'token_' + res.data.token)
        this.props.navigation.navigate('Message')
      }
      
    } catch (e) {
      let str = ''
      for (let k in e) {
        str += k + '---'
      }
      this.setState({
        ...this.state,
        data: str
      })
    }
  }
  componentWillMount () {
    this.getToken()
  }
  render() {
    let state = this.state
    return (
      <View style={styles.pageView}>
        <View style={styles.contentBox}>
          <Text>{this.state.data}</Text>
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
