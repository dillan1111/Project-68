import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class insta extends Component {
  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
            <Text style={{color: 'blue', fontWidth: 'bold'}}>Instagram</Text> 
        </View>
    );
  }
}