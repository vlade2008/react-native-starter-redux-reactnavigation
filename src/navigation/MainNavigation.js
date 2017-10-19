import {Button, Alert, Text, TouchableOpacity} from "react-native";
import React, {Component} from "react";
import { NavigationActions, TabNavigator,StackNavigator } from 'react-navigation'

import Dashboard from '../components/Dashboard';


export default  StackNavigator({
    dashboard: {
        screen: Dashboard,
        navigationOptions: ({navigation}) => ({
            header:null
        })
    }
}, {
    initialRouteName: 'dashboard',
    headerMode: 'screen',
    cardStyle:{backgroundColor:'white'},
    navigationOptions: {
        headerStyle: {
            backgroundColor: 'blue'
        },
        statusBarStyle: 'light',
        headerTintColor: 'white',
        tintColor: 'white'
    }
});
