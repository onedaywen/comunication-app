import React, { Component } from 'react'
import { primaryColor } from './src/styles/var.js'
import styles from './index.css.js'
import { AppRegistry, Text, Image, View, ScrollView } from 'react-native'

export default class MyApp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      footerList: [
        { label: '消息', icon: require('./src/assets/icon/icon-msg.png'), activeIcon: require('./src/assets/icon/icon-msg-active.png'), activeColor: primaryColor },
        { label: '工作', icon: require('./src/assets/icon/icon-work.png'), activeIcon: require('./src/assets/icon/icon-work-active.png') },
        { label: '通讯录', icon: require('./src/assets/icon/icon-communicate.png'), activeIcon: require('./src/assets/icon/icon-communicate-active.png') },
        { label: '我', icon: require('./src/assets/icon/icon-me.png'), activeIcon: require('./src/assets/icon/icon-me-active.png') },
      ],
      footerIndex: 0
    }
  }
  handleClickFooter (item, index) {
    this.setState({
      ...this.state,
      footerIndex: index
    })
  }
  render() {
    let state = this.state
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>跨声</Text>
        </View>
        <ScrollView style={styles.contentBox}>
          <View style={styles.content}>
            <View style={styles.msgBox}><Text style={styles.msgItem}>内容1</Text></View>
            <View style={styles.msgBox}><Text style={styles.msgItem}>内容</Text></View>
            <View style={styles.msgBox}><Text style={styles.msgItem}>内容3</Text></View>
            <View style={styles.msgBox}><Text style={styles.msgItem}>内容</Text></View>
            <View style={styles.msgBox}><Text style={styles.msgItem}>内容5</Text></View>
            <View style={styles.msgBox}><Text style={styles.msgItem}>内容</Text></View>
            <View style={styles.msgBox}><Text style={styles.msgItem}>内容7</Text></View>
            <View style={styles.msgBox}><Text style={styles.msgItem}>内容</Text></View>
            <View style={styles.msgBox}><Text style={styles.msgItem}>内容9</Text></View>
            <View style={styles.msgBox}><Text style={styles.msgItem}>内容</Text></View>
            <View style={styles.msgBox}><Text style={styles.msgItem}>内容11</Text></View>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          {
            state.footerList.map((item, index) => {
              return (
                <Text style={styles.footerItem}
                  key={index}
                  onPress={this.handleClickFooter.bind(this, item, index)}>
                  <View style={styles.footerItemImageBox}>
                    <Image source={state.footerIndex === index ? item.activeIcon : item.icon}
                      style={styles.footerItemImage}></Image>
                  </View>
                  <View style={styles.footerItemTextBox}>
                    <Text style={styles.footerItemText}>
                      {item.label}
                    </Text>
                  </View>
                </Text>
              )
            })
          }
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('MyApp', () => MyApp);
