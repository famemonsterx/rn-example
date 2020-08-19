import React from 'react'
import { View, Image } from 'react-native'
import {styles} from './styles'

const Header = () => {
    return (
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../Welcome/images/head-logo.png')}/>
                <Image style={styles.logo} source={require('../Welcome/images/12-3.png')}/>
            </View>
    )
};

export default Header