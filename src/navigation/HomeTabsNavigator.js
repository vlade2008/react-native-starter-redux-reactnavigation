import {Button, Alert, Text, TouchableOpacity} from "react-native";
import React, {Component} from "react";
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons';
import Profile from '../components/home/Profile'
import Contact from '../components/home/Contact'
import Skills from '../components/home/Skills'
import Work from '../components/home/Work'

const HomeTabsNavigator = TabNavigator({
  Profile:
    { screen: Profile,
      navigationOptions: ({navigation}) => ({
          tabBarIcon: ({tintColor})=>(<Icon  name={'ios-person'} size={29} color={tintColor} />)
      })
    },
    Work:
      { screen: Work,
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({tintColor})=>(<Icon  name={'ios-briefcase'} size={29} color={tintColor} />)
        })
      },
    Skills:
      { screen: Skills,
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({tintColor})=>(<Icon  name={'ios-hammer'} size={29} color={tintColor} />)
        })
      },
    Contact:
      { screen: Contact,
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({tintColor})=>(<Icon  name={'ios-contact'} size={29} color={tintColor} />)
        })
      },
    },
    {
      initialRouteName:'Profile',
      tabBarPosition: 'bottom',
      animationEnabled: true,
      swipeEnabled: true,
      lazy:true,
      tabBarOptions:{
        showLabel:false
      }
  }
)

export default HomeTabsNavigator
