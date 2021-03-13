import React, {useReducer} from 'react';
import {View, StyleSheet} from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    if (!['change_red', 'change_green', 'change_blue'].includes(action.type)) return state;

    const color = action.type.split('_').pop();
    const newValue = state[color] + action.payload;

    if (newValue < 0 || newValue > 255) return state;

    return {...state, [color]: newValue};
};

const SquareWithReducerScreen = () => {
    const [state, dispatch] = useReducer(
        reducer,
        {
            red: 0,
            green: 0,
            blue: 0
        }
    );
    const {red, green, blue} = state;

    return (
        <View>
            <ColorCounter
                color='Red'
                onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_red', payload: -COLOR_INCREMENT})}
            />
            <ColorCounter
                color='Green'
                onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_green', payload: -COLOR_INCREMENT})}
            />
            <ColorCounter
                color='Blue'
                onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_blue', payload: -COLOR_INCREMENT})}
            />
            <View
                style={{width: 100, height: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}
            />
        </View>
    );
}

const styles = StyleSheet.create({});

export default SquareWithReducerScreen;