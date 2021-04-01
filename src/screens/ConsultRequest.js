import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View, Image, Alert} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button, Form  } from "native-base";
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios';

export default class ConsultRequest extends Component{
   
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
                <Text>테스트</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
})