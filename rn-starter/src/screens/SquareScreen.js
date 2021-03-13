import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {
        if (!['red', 'green', 'blue'].includes(color)) return;

        const currentValue = eval(color);
        const newValue = currentValue + change;
        const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

        if (newValue > 255 || newValue < 0) return;

        eval(`set${capitalize(color)}(${newValue})`);
    }

    return (
        <View>
            <ColorCounter
                color="Red"
                onIncrease={() => setColor('red', COLOR_INCREMENT)}
                onDecrease={() => setColor('red', -COLOR_INCREMENT)}
            />
            <ColorCounter
                color="Green"
                onIncrease={() => setColor('green', COLOR_INCREMENT)}
                onDecrease={() => setColor('green', -COLOR_INCREMENT)}
            />
            <ColorCounter
                color="Blue"
                onIncrease={() => setColor('blue', COLOR_INCREMENT)}
                onDecrease={() => setColor('blue', -COLOR_INCREMENT)}
            />
            <View
                style={{height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;