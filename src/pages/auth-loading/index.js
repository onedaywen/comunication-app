
import React, { Component } from 'react'
import { AsyncStorage, View, ActivityIndicator, StatusBar, Dimensions } from 'react-native'
const { height, width } =  Dimensions.get('window')
export default class AuthLoading extends React.Component {
  constructor() {
    super()
    this.auth()
  }
  auth = async () => {
    const userToken = await AsyncStorage.getItem('token')
    this.props.navigation.navigate(userToken ? 'Mine' : 'Login')
  };
  render() {
    return (
      <View style={{width: width, height: height}}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}