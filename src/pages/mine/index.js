import React, { Component } from 'react'
import styles from './index.css.js'
import { Text, Image, View } from 'react-native'
import THeader from '../../components/t-header/index'
import TFooter from '../../components/t-footer/index'
export default class Message extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [
        {
          label: '我的收藏',
          img: require('../../assets/imgs/collect.png')
        },
        {
          label: '设置',
          img: require('../../assets/imgs/set.png')
        }
      ]
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
                  <View style={styles.itemTextBox}>
                    <Text style={styles.itemText}>{item.label}</Text>
                  </View>
                </View>
              )
            })
          }
        </View>
        <TFooter></TFooter>
      </View>
    )
  }
}
