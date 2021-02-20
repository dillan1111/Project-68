import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Header } from 'react-native-elements';
import { createAppContainer} from 'react-navigation'; 
import { createBottomTabNavigator} from 'react-navigation-tabs'; 


import fb from './screens/fb';
import insta from './screens/in';



export default class App extends Component {
  render() {
    return (
    <View>
      <Appcontainer />
      <Header backgroundColor={'#9A4DFE'} 
        centerComponent={{text: 'Buzz App', style:{color: '000000', fontSize:20, fontWeight: 1000}}}/>
    </View>
        
    )
  }
}

var TabNavigator = createBottomTabNavigator({
  Facebook:{screen: fb},
  Instagram:{screen: insta}
})
const Appcontainer = createAppContainer(TabNavigator)