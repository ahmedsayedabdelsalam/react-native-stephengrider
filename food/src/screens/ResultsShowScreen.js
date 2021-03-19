import React from 'react';
import {View, Image, StyleSheet, FlatList} from 'react-native';
import useResult from "../hooks/useResult";

const ResultsShowScreen = ({navigation}) => {
    const [result, getErrorMessage] = useResult(navigation.getParam('id'));

    if (!result) return null;

    return (
        <View>
            <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({item}) => {
                    return <Image style={styles.imageStyle} source={{uri: item}} />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: 300,
    }
});

export default ResultsShowScreen;