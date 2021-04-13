import React, {useContext} from 'react';
import {Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {ListItem} from "react-native-elements";
import {NavigationEvents} from "react-navigation";
import {Context as TrackContext} from "../context/TrackContext";

const TrackListScreen = ({navigation}) => {
    const {state, fetchTracks} = useContext(TrackContext);

    return <>
        <NavigationEvents onWillFocus={fetchTracks}/>
        <FlatList
            data={state}
            keyExtractor={item => item._id}
            renderItem={({item}) => {
                return <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', {_id: item._id})}>
                    <ListItem style={styles.listItemStyle}>
                        <ListItem.Title style={styles.titleStyle}>{item.name}</ListItem.Title>
                        <ListItem.Chevron/>
                    </ListItem>
                </TouchableOpacity>;
            }}
        />
    </>;
}

TrackListScreen.navigationOptions =  {
   title: 'Tracks'
}

const styles = StyleSheet.create({
    listItemStyle: {
        display: 'flex'
    },
    titleStyle: {
        flex: 1
    }
});

export default TrackListScreen;