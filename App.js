import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import HomeView from './src/view/HomeView';

export default class App extends Component<Props>  {
  render() {
  return (
    
      <View style={styles.container}>
        <HomeView/> 
      </View>
  );
}
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
