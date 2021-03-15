import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.parentViewStyle}>
            <View style={styles.viewOneStyle} />
            <View style={styles.viewTwoStyle} />
            <View style={styles.viewThreeStyle} />
        </View>
    )
}

const styles = StyleSheet.create({
    parentViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 100
    },
    viewOneStyle: {
        width: 50,
        height: 50,
        backgroundColor: 'red'
    },
    viewTwoStyle: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
        alignSelf: 'flex-end'
    },
    viewThreeStyle: {
        width: 50,
        height: 50,
        backgroundColor: 'purple'
    }
});

export default BoxScreen;