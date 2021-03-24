import React, {Component, useState} from 'react';
import {Text,StyleSheet, Pressable, View} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button } from "native-base";
import { TextInput } from 'react-native-gesture-handler';

import axios from 'axios';
import { API_URL } from '../StaticVariable';
import AsyncStorage from '@react-native-community/async-storage';

export default class SignUp_seller extends Component{
   
    _signUpHandler=(id, pw, navigation)=>{
        axios.post(API_URL+"/users",{
            login:id,
            companyName:'test',
            companyId:'test1',
            companyAddress:'전북전주시',
            hp:'01012345678',
            phone:'0631234567',
            type:'1',
            passwd:pw,
        }).then((res)=>{
            console.log(res);
            navigation.navigate('HomeScreen');
        }).catch((err)=>{
            //Alert.alert(err);
            console.error(err);
            AsyncStorage.setItem('token','');
            AsyncStorage.setItem('userId','');
        });
    }


    _testHandler= async ()=>{
        await axios.get(API_URL+"/users/test").then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }
    render(){

        let navigation=this.props.navigation;
        return(
           <View>
               <Text>
                   야호
               </Text>  
           </View>
        );
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#005A96',
        alignItems:'center',
    },
    textInput:{
        backgroundColor:'white', 
        width:'90%', 
        marginVertical:5, 
        alignSelf:'center',
    }
})