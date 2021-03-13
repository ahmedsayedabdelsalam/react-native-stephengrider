import React, {useState} from 'react';
import {View, StyleSheet, Button, FlatList} from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    return (
        <View>
            <Button
                title="Add a Color"
                onPress={() => {
                    setColors([randomRgb(), ...colors])
                }}
            />
            <FlatList
                data={colors}
                renderItem={({item: color}) => {
                    return <View style={{height: 100, width: 100, backgroundColor: color}}/>;
                }}
                keyExtractor={color => color}
            />
        </View>
    );
}

const randomRgb = () => {
    function randomColorValue() {
        return Math.floor(Math.random() * 256);
    }

    return `rgb(${randomColorValue()}, ${randomColorValue()}, ${randomColorValue()})`;
}

const styles = StyleSheet.create({});

export default ColorScreen;