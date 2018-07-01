import React from 'react';
import { AppRegistry } from 'react-native';
import AlbumList from './src/components/AlbumList';
import PhotoList from './src/components/PhotoList';
import PhotoDetail from './src/components/PhotoDetail';
import { Router, Scene } from 'react-native-router-flux';


// Create a component
const App = () => (
    <Router>
        <Scene key="root">
            <Scene key="albumList" component={AlbumList} title="Albums" initial={true} />
            <Scene key="photoList" component={PhotoList} title="Photos" />
            <Scene key="photoDetail" component={PhotoDetail} title="Photos Detail" />
        </Scene>
    </Router>
);

export default App;

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
