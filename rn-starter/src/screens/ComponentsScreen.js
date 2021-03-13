import React from 'react';
import { View, Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
    const name = 'ahmed';

    return (
        <View>
            <Text style={styles.headerStyle}>Getting Started with React Native!</Text>
            <Text style={styles.textStyle}>My Name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 45
    },
    textStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;