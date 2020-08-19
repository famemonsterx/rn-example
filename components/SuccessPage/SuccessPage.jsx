import React from 'react'
import { View, Text } from 'react-native'
import Button from "../ui/Button";
import {styles} from './styles'

const SuccessPage = ({ navigator }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Заявка успешно отправленна</Text>
            <Button label='На главную' onPress={() => navigator.push('Welcome')}/>
        </View>
    )
};

export default SuccessPage
