import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View, Image, Alert} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button, Form  } from "native-base";
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios';
import { TextInput } from 'react-native-gesture-handler';

export default class scene_diagnosis extends Component{
   
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
                 <Header style={styles.header}>
                    <Pressable style={{position:'absolute', left:5}} onPress={()=>navigation.navigate('HomeScreen')}>
                        <Icon style={{color:'white'}} name={'chevron-back'}/>
                    </Pressable>
                    <Text style={{fontSize:15, color:'white', textAlignVertical:'center'}}>현장진단 신청</Text>
                </Header>
                <View style={styles.bg}>
                    <Text style={styles.top_Text}>발전소 사진</Text>
                </View>
                <View style={styles.bg}>
                <Button onPress={()=>navigation.navigate('')}
                    style={{width:'12%',alignSelf:'center', justifyContent:'center', marginTop: 12, borderWidth:1, backgroundColor:'#005A96', borderColor:'#005A96', borderRadius: 7, marginRight: 320}}>
                    <Text style={{fontSize:28, color:'#FFFFFF', textAlign: 'center'}}>+</Text>
                </Button>
                </View>
                <View style={styles.bg}>
                    <Text style={styles.text}>발전소 용량</Text>
                    <TextInput style={styles.textInput} placeholder={'발전소 용량'}/>
                </View>
                <View style={styles.bg}>
                    <Text style={styles.text_2}>인버터{"\n"}모델명</Text>
                    <TextInput style={styles.textInput_2} placeholder={'인버터 모델명'}/>
                </View>
                <View style={styles.bg}>
                    <Text style={styles.text_3}>위치</Text>
                    <TextInput style={styles.textInput_3} placeholder={'위치'}/>
                </View>
                <View style={styles.bg}>
                    <Text style={styles.text_4}>이메일</Text>
                    <TextInput style={styles.textInput_email} placeholder={'이메일'}/>
                    <Text style={{fontSize:20, marginTop: 47, marginLeft:4, marginRight:4}}>@</Text>
                    <TextInput style={styles.textInput_domain} placeholder={'도메인'}/>
                </View>
                <View style={styles.bg}>
                <Button onPress={()=>navigation.navigate('')}
                    style={{width:'80%',alignSelf:'center', justifyContent:'center', marginTop: 120, borderWidth:1, backgroundColor:'#005A96', borderColor:'#005A96', borderRadius: 7}}>
                    <Text style={{fontSize:15, color:'#FFFFFF', textAlign: 'center', fontWeight: 'bold'}}>현장진단 신청</Text>
                </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#F0F2FA',
    },
    header:{
        backgroundColor:'#005A96',
        alignItems:'center',
    },
    top_Text: {
        textAlign: 'left',
        color: '#212121',
        marginRight: 300,
        marginTop: 16,
    },
    text: {
        marginTop: 24,
        marginRight: 12,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#212121',
    },
    bg:{
        width:'100%',
        //height:'100%',
        justifyContent:'center',
        flexDirection:'row',
    },
    textInput:{
        marginTop: 10,
        backgroundColor:'white', 
        width:'50%', 
        marginVertical:5, 
        alignSelf:'center',
        borderRadius: 10,
        marginRight: 82,
    },
    text_2: {
        marginTop: 18,
        marginRight: 40,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#212121',
    },
    textInput_2:{
        marginTop: 10,
        backgroundColor:'white', 
        width:'50%', 
        marginVertical:5, 
        alignSelf:'center',
        borderRadius: 10,
        marginRight: 82,
    },
    text_3: {
        marginTop: 55,
        marginRight: 53,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#212121',
    },
    textInput_3:{
        marginTop: 40,
        backgroundColor:'white', 
        width:'50%', 
        height: '110%',
        marginVertical:5, 
        alignSelf:'center',
        borderRadius: 10,
        marginRight: 82,
    },
    textInput_email:{
        marginTop: 40,
        marginLeft: 40,
        borderRadius: 10,
        backgroundColor:'white', 
        width:'23%', 
        marginVertical:5, 
        alignSelf:'center',
    },
    textInput_domain:{
        marginTop: 40,  
        marginRight: 132,
        borderRadius: 10,
        backgroundColor:'white', 
        width:'20%', 
        marginVertical:5, 
        alignSelf:'center',
    },
    text_4: {
        marginLeft: 47,
        marginTop: 55,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#212121',
    },
})