import React from 'react'
import { View, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons'
import { Linking } from 'expo'

import { styles } from './styles'


const Footer = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                if (Linking.canOpenURL('intent://resolve?domain=yourgang#Intent;package=org.telegram.messenger;scheme=tg;end')) {
                    Linking.openURL('intent://resolve?domain=yourgang#Intent;package=org.telegram.messenger;scheme=tg;end')
                }
                if (Linking.canOpenURL('tg://resolve?domain=yourgang')) {
                    Linking.openURL('tg://resolve?domain=yourgang')
                }
                Linking.openURL('https://t.me/yourgang');
            }}>
                    <FontAwesome name='telegram' style={styles.icon} size={35} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                if (Linking.canOpenURL('intent://send?phone=79215669677&text=#Intent;package=com.whatsapp;scheme=whatsapp;end')) {
                    Linking.openURL('intent://send?phone=79215669677&text=#Intent;package=com.whatsapp;scheme=whatsapp;end')
                }
                if (Linking.canOpenURL('whatsapp://send?phone=79215669677&text=')) {
                    Linking.openURL('whatsapp://send?phone=79215669677&text=')
                }
                Linking.openURL('https://wa.me/79215669677')
            }}>
                <FontAwesome name='whatsapp' style={styles.icon} size={35} />
            </TouchableOpacity>
        </View>
    )
};

export default Footer