import React, { Component } from 'react'
import styles from './index.css.js'
import { AsyncStorage, Dimensions, Text, Image, View, TouchableOpacity } from 'react-native'
const { height, width } =  Dimensions.get('window')
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
        <View style={styles.mineHeader}>
          <Image source={require('../../assets/imgs/mine-bg.jpeg')} style={styles.img}>
          </Image>
          <View style={styles.personPictureBox}>
            <Image  style={styles.img} source={require('../../assets/imgs/person-picture.jpeg')}></Image>
          </View>
          <View style={styles.headerContent}>
            <View style={styles.firstLine}>
              <Text style={styles.text}>034157</Text>
              <Text style={styles.text}>前端开发工程师</Text>
            </View>
            <View>
              <Text style={styles.text}>大唐经理部-协调策划组</Text>
            </View>
          </View>
        </View>
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
      </View>
    )
  }
}
