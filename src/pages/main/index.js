import React,{Component} from 'react'
import {Text, View, TextInput, Image, StatusBar, AsyncStorage} from 'react-native'

import { StackActions, NavigationActions } from 'react-navigation'

import api from '../../services/api'
const Logo = require('../../images/airbnb_logo.png')
export default class Main extends Component{
    render(){
        return(
            <View>
                <StatusBar hidden />
                <Image source={{Logo}} />
            </View>
        )
    }
}