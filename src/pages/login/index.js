import React, { Component } from 'react'
import styles from './index.css.js'
import { Text, Image, View, TextInput, Button, AsyncStorage, ActivityIndicator } from 'react-native'
import { primaryColor } from '../../styles/var'
import TButton from '../../components/t-button/index'
import ajax from '../../common/js/ajax'
// import console = require('console');

export default class Message extends Component {
  static navigationOptions = {
    title: '登录'
  }
  constructor (props) {
    super(props)
    this.state = {
      account: '',
      password: '',
      loading: false
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
      this.setState({
        ...this.state,
        loading: true
      })
      let res = await fetch('http://localhost:3000/login?' + Math.random())
      res = await res.json()

      if (res && res.code === 0) {
        this.setState({
          ...this.state,
          data: res.data.token
        })
        await AsyncStorage.setItem('token', 'token_' + res.data.token)
        this.setState({
          ...this.state,
          loading: false
        })
        this.props.navigation.navigate('Message')
      }
    } catch (e) {
      this.setState({
        ...this.state,
        loading: false
      })
    }
  }
  render() {
    let state = this.state
    return (
      <View style={styles.pageView}>
        {
          this.state.loading ?
          <ActivityIndicator size="large" color={primaryColor} style={{height: 700}}/>
          : <Text></Text>
        }
        <View style={styles.contentBox}>
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
