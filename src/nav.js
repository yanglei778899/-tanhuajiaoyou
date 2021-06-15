import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator()

import Login from "./pages/account/login/index"
export default class Nav extends Component {

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode="none" initialRouteName="Login">
                    <Stack.Screen name="Login" component={Login}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
