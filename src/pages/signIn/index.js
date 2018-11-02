import React,{Component} from 'react'
import {Text, View, TextInput, Image, StatusBar, AsyncStorage, Button,StyleSheet, TouchableHighlight } from 'react-native'

import { StackActions, NavigationActions } from 'react-navigation'

import api from '../../services/api'
const Logo = require('../../images/airbnb_logo.png')
export default class SignIn extends Component{
    render(){
        return(
            <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
                <StatusBar hidden />
                <View style={styles.ptImg}>
                    <Image style={styles.img} source={Logo} resizeMode='contain' />
                </View>
                <View style={styles.ptBaixo}>
                    <TextInput 
                        style={styles.txtInput}
                        placeholder="Email"
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                    <TextInput 
                        style={styles.txtInput}
                        placeholder="Senha"
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry
                    />
                    
                    <TouchableHighlight style={styles.btnEntrar}>
                        <Text style={styles.txtBtnEntrar}>Entrar</Text>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <Text style={styles.txtCriaConta}>Criar conta grátis</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    img:{
        width: 200,
        height: 200
    },
    ptImg:{
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    ptBaixo:{
        flex: 4,
        alignItems: 'center'
    },
    txtInput:{
        backgroundColor: '#FFF',
        marginBottom: 10,
        borderRadius: 5,
        borderColor: '#FC6663',
        borderWidth: 1,
        width: 325,
        height:40,
        fontSize: 16
        
    },
    btnEntrar:{
        width:340,
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FC6663',
        marginBottom: 20
    },
    txtBtnEntrar:{
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    },
    txtCriaConta:{
        color: '#999',
        fontWeight: 'bold',
        fontSize: 16
    }
})