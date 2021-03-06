import React, { Component } from 'react';
import { ScrollView, Text, View , FlatList, ActivityIndicator, StyleSheet,Linking } from 'react-native';
import axios from 'axios';
import PhotoDetail from './PhotoDetail';
import { Actions } from 'react-native-router-flux';
import { List, ListItem, SearchBar } from "react-native-elements";


class PhotoList extends Component {
  state = { photos: null };

  componentWillMount() {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${this.props.albumId}&user_id=141154827@N05&format=json&nojsoncallback=1`)
      .then(response => this.setState({ photos: response.data.photoset.photo }));
  }

  renderAlbums() {
    return this.state.photos;
  }

  render() {
    if (!this.state.photos) { 
			return (
                <View style={{ flex: 1 }}>
					<ActivityIndicator size="large" color="#6c923e" style={{flex: 3}} />
				</View>
				);
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={this.renderAlbums()}
                renderItem={({item}) => {return (
                    <ListItem
                        roundAvatar
                        title={<View>
                            <Text style={styles.title}> {item.title} </Text>
                        </View>}
                        avatar={{ uri: `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}}
                        Button  onPress={() =>
                        Actions.photoDetail({
                                title:item.title ,
                                imageUrl:`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`,
                                photoId : item.id
                            })}/>
                );}}
                keyExtractor={item => item.id}
            />
        </View>
    );
  }
}

export default PhotoList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
    title: {
        color: 'black'
    }
});

