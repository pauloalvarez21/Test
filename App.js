import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
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
