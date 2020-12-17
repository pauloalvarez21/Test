import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import Globals from '../utils/Globals'

export default class HomeView extends Component<Props>  {

    state = {
      album:[]
    }

    componentDidMount() {
      let url = Globals.BASE_URL
      fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log('json', json)
        this.setState({album: json.album.tracks.track })
      })
      .catch((error) => {
        this.setState({album: [] })
      });
    }

    render() {
    return (
            <View style={{ flex: 1}}>
            {/*Header */}
            <View style={{
              borderBottomWidth: 1,
              borderColor: '#ddd',
              alignContent: 'center',
              justifyContent: 'center',
              height: 100
            }}>
            <Text style={{
              marginTop: 50,
              fontSize: 16,
              fontWeight: 'bold'
            }}>Prueba</Text>
            </View>
            <View style={{ backgroundColor: '#777' }}>
              {/*List */}
              <FlatList
                data={this.state.album}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <View style={{ backgroundColor: '#777' }}>
                    <Text>item.name</Text>
                  </View>
                )}
                
              />  
              </View>
            </View>
    );
  }
  }