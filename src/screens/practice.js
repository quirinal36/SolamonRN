import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View, Image, Alert} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button, Form  } from "native-base";
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios';
import { API_URL } from './StaticVariable';

export default class practice extends Component{
   
    constructor(props){
        super(props);
        this.state={
            info:''
        };
    }


    render(){
        let navigation=this.props.navigation;
        return(
            <View style ={styles.container}>
            <View style ={styles.case2}/>
            <View style ={styles.case3}/>
            <View style ={styles.case4}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    case2: {
        width: '50%',
        height: 100,
        backgroundColor: 'red',
    },
    case3: {
        flex: 3,
        backgroundColor: 'green',
    },
    case4: {
        flex: 1,
        backgroundColor: 'blue',
    }
})