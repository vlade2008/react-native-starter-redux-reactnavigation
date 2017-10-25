import {Button, Alert, Text, TouchableOpacity} from "react-native";
import React, {Component} from "react";
import { NavigationActions, TabNavigator,StackNavigator,DrawerNavigator,DrawerItems } from 'react-navigation'

import Dashboard from '../components/Dashboard';
import HomeTabsNavigator from './HomeTabsNavigator';

export default  DrawerNavigator({
    dashboard: {
        screen: Dashboard,
        navigationOptions: ({navigation}) => ({
            header:null
        })
    },
    home: {screen: HomeTabsNavigator}
}, {
    initialRouteName: 'home',
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
