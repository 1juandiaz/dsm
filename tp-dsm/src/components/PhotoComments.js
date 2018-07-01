import React, { Component } from 'react';
import { Text, View, FlatList, ListItem } from 'react-native';
import axios from 'axios';
import Card from './Card';
import CardSection from './CardSection';

class PhotoComments extends Component {
    state = { comments: null };
    photoId = this.props.photoId;
    componentWillMount() {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photo_id=${this.photoId}&format=json&nojsoncallback=1`)
            .then(response => this.setState({ comments: response.data.comments.comment }));
    }
    render() {
        if (!this.state.comments) {
            return (
                <View>
                    <Text>No comments!</Text>
                </View>
            );
        }
        return (
            <Card>
                <CardSection>
                    <View style={{ flex: 1, borderWidth:3}}>
                        <FlatList
                            data={this.state.comments}
                            renderItem={({item}) => {return (
                                <ListItem  title={item.authorname} subtitle = {item._content} />
                            );}}
                            keyExtractor={item => item.id}
                        />>
                    </View>
                </CardSection>
            </Card>
        );
    }
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center'
//     },
//     horizontal: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         padding: 10
//     }
// });

export default PhotoComments;



