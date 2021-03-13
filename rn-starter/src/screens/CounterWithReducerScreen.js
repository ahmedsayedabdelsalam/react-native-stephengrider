import React, { useReducer } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const reducer = (state, action) => {
    if (action.type === 'change_counter') {
        return {...state, counter: state.counter + action.payload}
    }

    return state;
};

const CounterWithReducerScreen = () => {
    const [state, dispatch] = useReducer(
        reducer,
        {
            counter: 0
        }
    );
    const {counter} = state

    return (
        <View>
            <Button
                title="Increase"
                onPress={() => dispatch({type: 'change_counter', payload: 1})}
            />
            <Button
                title="Decrease"
                onPress={() => dispatch({type: 'change_counter', payload: -1})}
            />
            <Text>Current Count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterWithReducerScreen;