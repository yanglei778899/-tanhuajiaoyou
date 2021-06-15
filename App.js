import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Nav from "./src/nav.js"
export default class Home extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Nav></Nav>
      </View>
    )
  }
}
