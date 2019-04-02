import React, { Component } from 'react'
import styles from './index.css.js'
import { Text, Image, View, ScrollView } from 'react-native'
import THeader from '../../components/t-header/index'
import TFooter from '../../components/t-footer/index'
export default class Message extends Component {
  constructor (props) {
    super(props)
    this.state = {
      messageList: new Array(20).fill(1).map(item => {
        return {
          label: Math.random().toString(36).substr(2)
        }
      })
    }
  }
  render() {
    let state = this.state
    return (
      <View style={styles.pageView}>
        <THeader></THeader>
        <ScrollView styles={styles.scrollView}>
          <View style={styles.messageBox}>
            {
              this.state.messageList.map((item, index) => {
                return (
                  <View style={styles.msgItemBox}
                    key={index}>
                    <Text style={styles.msgItem}>{item.label}</Text>
                  </View>
                )
              })
            }
          </View>
        </ScrollView>
        {/* <TFooter></TFooter> */}
      </View>
    )
  }
}
