import React, { Component } from 'react'
import { primaryColor } from '../../styles/var.js'
import { Text, Image, View, TouchableOpacity } from 'react-native'
import { StyleSheet, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'
const { height, width } =  Dimensions.get('window')
class TFooter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      footerList: [
        { 
          label: '消息',
          icon: require('../../assets/icon/icon-msg.png'),
          activeIcon: require('../../assets/icon/icon-msg-active.png'),
          routeName: 'Message'
        },
        {
          label: '工作',
          icon: require('../../assets/icon/icon-work.png'),
          activeIcon: require('../../assets/icon/icon-work-active.png'),
          routeName: 'Work'
        },
        {
          label: '通讯录',
          icon: require('../../assets/icon/icon-communicate.png'),
          activeIcon: require('../../assets/icon/icon-communicate-active.png'),
          routeName: 'Communication'
        },
        {
          label: '我',
          icon: require('../../assets/icon/icon-me.png'),
          activeIcon: require('../../assets/icon/icon-me-active.png'),
          routeName: 'Mine'
        },
      ],
      footerIndex: 0
    }
  }
  go (item, index) {
    this.setState({
      ...this.state,
      footerIndex: index
    })
    this.props.navigation.navigate(item.routeName || 'Message')
  }
  render() {
    let state = this.state
    return (
      <View style={styles.footer}>
        {
          state.footerList.map((item, index) => {
            return (
              <TouchableOpacity style={styles.footerItem}
                key={index}
                onPress={this.go.bind(this, item, index)}>
                <View style={styles.footerItemImageBox}>
                  <Image source={state.footerIndex === index ? item.activeIcon : item.icon}
                    style={styles.footerItemImage}></Image>
                </View>
                <View style={styles.footerItemTextBox}>
                  <Text style={styles.footerItemText}>
                    {item.label}
                  </Text>
                </View>
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }
}
export default withNavigation(TFooter)
const styles = StyleSheet.create({
  footer:{
    height: 60,
    flexDirection: 'row',
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    backgroundColor: '#fff'
  },
  footerItem:{
    flex: 1,
    width: width / 4,
    height: 60
  },
  footerItemImageBox: {
    width: 24,
    height: 24,
    marginTop: 10,
    marginBottom: 5
  },
  footerItemImage: {
    width: 24,
    height: 24,
    marginLeft: (width / 4 - 24) / 2,
  },
  footerItemTextBox: {
    width: width / 4,
    height: 20
  },
  footerItemText: {
    width: width / 4,
    marginTop: 15,
    fontSize: 14,
    textAlign: 'center',
    color: '#666'
  },
})

