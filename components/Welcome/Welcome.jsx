import React, {useEffect, useState} from 'react'
import { View, Image } from 'react-native'
import { styles } from "./styles";
import Button from '../ui/Button'

const Welcome = ({ navigator }) => {
    const [text,setText] = useState('');
    const [loaded,isLoaded] = useState(false);
    const addText = async () => {
        await fetch('https://api.github.com/gists/86a719d3c105518d19f19fd616b68bae')
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            })
            .then(json => {
                let obj = Object.values(json.files);
                setText(obj[0].content)});
    };
    useEffect(() => {
        addText()
    }, []);
    useEffect(() => {
        if (text.length > 0) {
            isLoaded(true);
        }
    }, [text]);
    return (
        <View style={styles.container}>
            {/*<Image source={require('./images/head-logo.png')} style={{ resizeMode: 'contain', width: 200}}/>*/}
            {/*<Image source={require('./images/12-3.png')} style={styles.logo}/>*/}
            <Image source={require('./images/logo-1.png')} style={styles.logo}/>
            <Button label='Зарегистрироваться' onPress={() => navigator.push('Registration')} />
            <Button label='Информация' onPress={() => navigator.push('Information', {text: text, isLoaded: loaded})} />
        </View>
    )
};

export default Welcome