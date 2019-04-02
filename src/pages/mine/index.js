import React, { Component } from 'react'
import styles from './index.css.js'
import { Text, Image, View, TouchableOpacity, AsyncStorage } from 'react-native'
import THeader from '../../components/t-header/index'
import TFooter from '../../components/t-footer/index'
export default class Message extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [
        {
          label: '我的收藏',
          img: require('../../assets/imgs/collect.png'),
          key: 'collect'
        },
        {
          label: '设置',
          img: require('../../assets/imgs/set.png'),
          key: 'set'
        },
        {
          label: '退出登录',
          img: require('../../assets/imgs/set.png'),
          key: 'logout'
        }
      ]
    }
  }
  async handlePress (item = {}) {
    let k = item.key
    if (k === 'logout') {
      try {
        await AsyncStorage.clear()
        this.props.navigation.navigate('AuthLoading')
      } catch (e) {}
    }
  }
  render() {
    let state = this.state
    return (
      <View style={styles.pageView}>
        <THeader></THeader>
        <View style={styles.listBox}>
          {
            this.state.list.map((item, index) => {
              return (
                <View style={styles.itemBox}
                  key={index}>
                  <View style={styles.imgBox}>
                    <Image source={item.img}/>
                  </View>
                  <TouchableOpacity style={styles.itemTextBox} onPress={this.handlePress.bind(this, item)}>
                    <Text style={styles.itemText}>{item.label}</Text>
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </View>
        {/* <TFooter></TFooter> */}
      </View>
    )
  }
}
