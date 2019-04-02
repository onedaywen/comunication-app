import React, { Component } from 'react'
import styles from './index.css.js'
import { AsyncStorage, Text, Image, View, ScrollView } from 'react-native'
import THeader from '../../components/t-header/index'
import TFooter from '../../components/t-footer/index'

export default class Message extends Component {
  constructor (props) {
    super(props)
    this.state = {
      messageList: new Array(2).fill(1).map(item => {
        return {
          label: Math.random().toString(36).substr(2),
          img: require('../../assets/imgs/communication.png')
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
                  <View style={styles.itemBox}
                    key={index}>
                    <View style={styles.imgBox}>
                      <Image source={item.img}/>
                    </View>
                    <View style={styles.itemRightBox}>
                      <View style={styles.firstLine}>
                        <Text style={styles.firstLineText}>{item.label}</Text>
                        <Text style={styles.firstLineTime}>{item.time || '昨天10:20'}</Text>
                      </View>
                      <View style={styles.secondLine}>
                        <Text style={styles.secondLineText} numberOfLines={1}>温奕添-前端开发工程师: 麻烦运维同事在今晚8点发车管家的生产包，构建吗876</Text>
                      </View>
                    </View>
                  </View>
                )
              })
            }
          </View>
        </ScrollView>
      </View>
    )
  }
}
