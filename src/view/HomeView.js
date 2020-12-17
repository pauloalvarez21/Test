import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';
import Globals from '../utils/Globals';
import Card from '../components/Card';
import AutoHeightImage from 'react-native-auto-height-image';

const {width} = Dimensions.get('window');

export default class HomeView extends Component<Props>  {

    state = {
      album:[], summary: '', published: '', image: ''
    }

    componentDidMount() {
      let url = Globals.BASE_URL
      fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log('json', json)
        this.setState({
          album: json.album.tracks.track,
          published: json.album.wiki.published, 
          summary: json.album.wiki.summary,
        });
      })
      .catch((error) => {
        this.setState({album: [] })
      });
    }

    render() {
    return (
            <View style={{ flex: 1}}>
            {/*Header */}
            <View style={styles.header}>
            <Text style={styles.appName}>{Globals.appName}</Text>
            </View>
            <View>
              {/*List */}
              <FlatList
                data={this.state.album}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <View style={{width: 5}}/>}
                renderItem={({ item }) => (
                  <Card>
                    <AutoHeightImage
                        width={width}
                        source={{uri: Globals.image_url}}
                     />
                    <Text style={styles.cardText}>Canción: {item.name}</Text>
                    <Text>Duración: {item.duration}</Text>
                    <Text>Artista: {item.artist.name}</Text>
                    <Text>Publicación: {this.state.published}</Text>
                    <Text>Resumen: {this.state.summary}</Text>
                  </Card>
                )}
                
              />  
              </View>
            </View>
    );
  }
  }

  const styles = StyleSheet.create({
    header : {
      borderBottomWidth: 1,
      borderColor: '#ddd',
      alignContent: 'center',
      justifyContent: 'center',
      height: 100,
      backgroundColor: '#00ffbf',
      width: width,
    },
    appName: {
      marginTop: 20,
      marginBottom: 5,
      fontSize: 20,
      fontWeight: 'bold'
    },
    cardText: {
      fontWeight: 'bold',
      fontSize: 18
    }
  });