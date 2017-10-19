import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import configureStore from './src/stores/configureStore';
import RouteSettings from './src/containers/RouteSettings';

const myStore = configureStore();


export default class App extends React.Component {
  render() {
    return (
      <Provider store={myStore}>
         <RouteSettings/>
      </Provider>
    );
  }
}
