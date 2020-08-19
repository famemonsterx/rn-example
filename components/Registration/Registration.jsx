import React, { useState } from 'react'
import { View, TextInput } from 'react-native'
import Button from "../ui/Button";
import { styles } from './styles'
import axios from 'axios'
import Header from "../Header";

const Registration = ({ navigator }) => {
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [city,setCity] = useState('');
    const [error, setError] = useState(null);
    const handleSubmit = async () => {
        if (city.length > 0 && phone.length > 0 && name.length > 0) {
            await axios.post('http://194-58-92-147.ovz.vps.regruhosting.ru/telegram', {
                'name': name,
                'email': phone,
                'text': city
            })
                .then(res => {
                    if (res.status === 200) {
                        navigator.push('SuccessPage')
                    } else {
                        setError('Что-то пошло не так')
                    }
                })
                .catch(e => {
                    setError('Что-то пошло не так');
                    console.log(e);
                })
        }
        return null;
    };
    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.textarea}>
            <TextInput value={name} onChangeText={setName} style={styles.input} placeholder='Как вас зовут?'/>
            <TextInput keyboardType='number-pad' autoCompleteType='tel' value={phone} onChangeText={setPhone} style={styles.input} placeholder='Ваш номер телефона'/>
            <TextInput value={city} onChangeText={setCity} style={styles.input} placeholder='Ваш город'/>
            </View>
            <View style={styles.buttonArea}>
                <Button onPress={
                    () => handleSubmit()}
                        label='Зарегистрироваться'
                />
                <Button label='Назад' onPress={() => navigator.push('Welcome')}/>
            </View>
        </View>
    )
};

export default Registration