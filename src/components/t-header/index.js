import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { StyleSheet, Dimensions } from 'react-native'
const { height, width } =  Dimensions.get('window')

export default class THeader extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>树洞</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({ 
  header: {     
    width: width,
    height: 60,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#efefef'
  },
  headerTitle: {
    height: 59,
    lineHeight: 59,
    fontSize: 30,
    marginLeft: 20,
    fontWeight: 'bold'
  }
})