import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from "@expo/vector-icons";

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
                style={styles.inputStyle}
                placeholder="Search"
                autoCapitalize="none"
                autoCorrect={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    }
});

export default SearchBar;