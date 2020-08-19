import React from 'react'
import {styles} from './styles'
import {Text, TouchableOpacity} from "react-native";

const Button = ({ onPress, label }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    )
};

export default Button