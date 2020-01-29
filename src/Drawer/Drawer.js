import React from 'react';
// import {createDrawerNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
// import {StackActions, NavigationActions} from 'react-navigation';
import {
  StackActions,
  NavigationActions,
  createAppContainer,
} from 'react-navigation';

import Testone from '../Test/Testone';
import Testtwo from '../Test/Testtwo';

const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
  drawerWidth: WIDTH * 0.8,
  drawerPosition: 'left',
  drawerBackgroundColor: 'white',
  overlayColor: 'black',

  contentComponent: ({navigation}) => {
    return <Drawer navigation={navigation} />;
  },
};
// const DrawerConfig = createDrawerNavigator
export default createAppContainer(
  createDrawerNavigator(
    {
      Testone: {
        screen: Testone,
      },
      Testtwo: {
        screen: Testtwo,
      },
    },

    DrawerConfig,
  ),
);

class Drawer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: 150,
            backgroundColor: '#ED671E',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',

              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{}}>
              <Text style={{color: 'white', fontSize: 20}}>Gary Coleman</Text>
              <Text style={{color: 'rgba(255, 255, 255, 0.7)', fontSize: 15}}>
                Profile
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.imageView}
          onPress={() => this.props.navigation.navigate('Testone')}>
          <Text style={styles.text}>Test One</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.imageView}
          onPress={() => this.props.navigation.navigate('Testtwo')}>
          <Text
            style={{
              color: 'black',
              marginLeft: 25,
              marginTop: 5,
              fontSize: 16,
            }}>
            Test Two
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
  },
  imageView: {
    flexDirection: 'row',
    height: 40,
    marginLeft: 30,
    marginTop: 25,
  },
  text: {
    color: '#000000',
    marginLeft: 25,
    fontWeight: '300',
    marginTop: 5,
    fontSize: 16,
  },
  image: {width: 28, height: 30, resizeMode: 'contain'},
});
