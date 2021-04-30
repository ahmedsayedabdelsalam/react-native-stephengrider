import React, { Component } from 'react'
import {connect} from 'react-redux';
import {FlatList} from 'react-native';
import ListItem from './ListItem';

export class LibraryList extends Component {
  renderItem({item}) {
    return <ListItem library={item} />;
  }
  
  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={library => library.id}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    libraries: state.libraries
  }
}

export default connect(mapStateToProps)(LibraryList);
