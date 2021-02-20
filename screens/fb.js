import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class fb extends Component {
  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
            <Text style={{color: 'purple', fontWidth: 'bold'}}>Facebook</Text> 
        </View>
    );
  }
}