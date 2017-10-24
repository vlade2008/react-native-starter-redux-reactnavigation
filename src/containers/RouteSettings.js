import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert,
    Platform,
    StatusBar
} from 'react-native';

import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import { addNavigationHelpers } from 'react-navigation';
import MainNavigation from '../navigation/MainNavigation'

 class RouteSettings extends Component {

    render() {
        return (
          <MainNavigation navigation={addNavigationHelpers({
                       dispatch: this.props.dispatch,
                       state: this.props.nav,
            })} />
        );
    }
}

function mapStateToProps(state) {

    return {
      nav: state.nav
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RouteSettings);
