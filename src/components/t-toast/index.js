import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { StyleSheet, Dimensions } from 'react-native'
const { height, width } =  Dimensions.get('window')

export default class TToast extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.toast}>
        <Text style={styles.toastTitle}>{this.props.message}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({ 
  toast: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: width,
    height: height,
    backgroundColor: '#000'
  },
  toastTitle: {
    height: 59,
    lineHeight: 59,
    fontSize: 20,
  }
})