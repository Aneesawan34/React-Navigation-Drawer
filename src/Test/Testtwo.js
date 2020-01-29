import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {toggleDrawer, DrawerActions} from 'react-navigation-drawer';

export default class Testtwo extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            marginTop: 50,
            width: 100,
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
          }}
          onPress={
            () => this.props.navigation.dispatch(DrawerActions.openDrawer())
            // this.props.navigation.toggleDrawer()
          }>
          <Text style={{color: '#fff'}}>Screen Two</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
