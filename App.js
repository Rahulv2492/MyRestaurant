/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  StatusBar,
  Image,
  ImageBackground
} from 'react-native';

import RootNavigator from './src/components/RootNavigator'

const App = () => {
  return (
    <View style={{flex:1}}>
      <StatusBar barStyle="dark-content" />
      {/* <SafeAreaView> */}
        <RootNavigator/>
      {/* </SafeAreaView> */}
    </View>
  );
};


export default App;
