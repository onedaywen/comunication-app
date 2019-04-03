import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { StyleSheet, Dimensions } from 'react-native'
import { primaryColor } from '../../styles/var'
const { height, width } =  Dimensions.get('window')

export default class TButton extends Component {
  constructor (props) {
    super(props)
  }
  handlePress () {
    this.props.onPress.call(this)
  }
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.handlePress.bind(this)}>
        <Text style={styles.buttonLabel}>{this.props.label}</Text>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({ 
  button: {
    paddingTop: 14,
    paddingBottom: 14,
    backgroundColor: primaryColor,
    borderColor: primaryColor,
    borderWidth: 1,
    borderRadius: 10
  },
  buttonLabel: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center'
  }
})