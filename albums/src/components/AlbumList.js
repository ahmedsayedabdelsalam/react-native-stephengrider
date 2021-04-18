import axios from 'axios';
import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {
    albums: [],
  };

  UNSAFE_componentWillMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(res => this.setState({albums: res.data}));
  }

  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.id} album={album} />
    ));
  }

  render() {
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;
