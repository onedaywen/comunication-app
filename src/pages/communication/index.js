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
          label: '通讯录',
          img: require('../../assets/imgs/communication.png')
        },
        {
          label: '普通群',
          img: require('../../assets/imgs/normal-group.png')
        },
        {
          label: '企业群',
          img: require('../../assets/imgs/company-group.png')
        },
      ]
    }
  }
  render() {
    let state = this.state
    return (
      <View style={styles.pageView}>
        <THeader headerTitle="通讯录"></THeader>
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
        {/* <TFooter></TFooter> */}
      </View>
    )
  }
}
