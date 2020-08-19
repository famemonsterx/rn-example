import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'
import Button from "../ui/Button";
import {styles} from '../Registration/styles'
import Header from "../Header";

const Information = ( { navigator,text,isLoaded } ) => {
      return (
          <View style={styles.container}>
              <Header/>
              <View style={styles.data}>
              { (isLoaded) ?
                  <Text>
                      {text}
                      123
                  </Text>
                  : <></>
              }
              </View>
              <View style={styles.buttonArea}>
                <Button label='Регистрация' onPress={() => navigator.push('Registration')}/>
              </View>
          </View>
      )
};

export default Information