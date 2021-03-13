import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {
    const [password, setPassword] = useState('');
    const PASSWORD_MIN_LENGTH = 6;

    return (
        <View>
            <Text>Enter Password</Text>
            <TextInput
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
            />
            {password.length < PASSWORD_MIN_LENGTH ? <Text>Password must be longer than {PASSWORD_MIN_LENGTH - 1} Characters</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        padding: 5,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;