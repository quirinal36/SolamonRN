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
           <View style={styles.container}>
                <Header style={styles.header}>
                    <Pressable style={{position:'absolute', left:5}} onPress={()=>navigation.navigate('HomeScreen')}>
                        <Icon style={{color:'white'}} name={'chevron-back'}/>
                    </Pressable>
                    <Text style={{fontSize:15, color:'white', textAlignVertical:'center'}}>회원가입</Text>
                </Header>
                <View style={styles.bg}>
                <Text style={styles.id}>
                   아이디
               </Text>  
               <TextInput style={styles.textInput_id} placeholder={'아이디'}/>
                </View>
                <View style={styles.bg}>
                <Text style={styles.pwd}>
                   비밀번호
               </Text>  
               <TextInput style={styles.textInput} placeholder={'비밀번호(8자이상)'}/>
                </View>
                <View style={styles.bg}>
                <Text style={styles.pwd}>
                   회사명
               </Text>  
               <TextInput style={styles.textInput_id} placeholder={'회사명'}/>
                </View>
                <View style={styles.bg}>
                <Text style={styles.sd}>
                   사업자{"\n"}등록번호
               </Text>  
               <TextInput style={styles.textInput_sd1} placeholder={'123'}/>
               <TextInput style={styles.textInput_sd2} placeholder={'45'}/>
               <TextInput style={styles.textInput_sd3} placeholder={'67890'}/>
                </View>
                <View style={styles.bg}>
                <Text style={styles.pwd}>
                   이름
               </Text>  
               <TextInput style={styles.textInput_name} placeholder={'이름'}/>
                </View>
                <View style={styles.bg}>
                <Text style={styles.pwd}>
                   전화번호
               </Text>  
               <TextInput style={styles.textInput_phone} placeholder={'010'}/>
               <TextInput style={styles.textInput_phone_1} placeholder={'1234'}/>
               <TextInput style={styles.textInput_phone_1} placeholder={'1234'}/>
                </View>
                <View style={styles.bg}>
                <Text style={styles.pwd}>
                   이메일
               </Text>  
               <TextInput style={styles.textInput_email} placeholder={'이메일'}/>
               <Text style={{fontSize:20}}>@</Text>
               <TextInput style={styles.textInput_domain} placeholder={'도메인'}/>
                </View>
                <View style={styles.bg}>
                <Text style={styles.pwd}>
                   팩스번호
               </Text>  
               <TextInput style={styles.textInput_phone} placeholder={'063'}/>
               <TextInput style={styles.textInput_phone_1} placeholder={'123'}/>
               <TextInput style={styles.textInput_phone_1} placeholder={'1234'}/>
                </View>
                <Button
                    style={{width:'95%',alignSelf:'center', justifyContent:'center',  borderWidth:1, backgroundColor:'#F0F2FA', borderColor:'#005A96'}}>
                    <Text style={{fontSize:15, color:'#005A96'}}>회원가입</Text>
                </Button>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',    
    },
    header:{
        backgroundColor:'#005A96',
        alignItems:'center',
    },
    textInput:{
        backgroundColor:'white', 
        width:'90%', 
        marginVertical:5, 
        alignSelf:'center',
    },
    id:{
        marginTop: 20,
        paddingLeft: 20,
    },
    pwd:{
        marginTop: 20,
        paddingLeft: 20 ,
    },
    bg:{
        width:'100%',
        flexDirection:'row',
    },
    textInput:{
        marginLeft: 20,
        backgroundColor:'white', 
        width:'50%', 
        marginVertical:5, 
        alignSelf:'center',
    },
    textInput_id:{
        marginLeft: 33,
        backgroundColor:'white', 
        width:'50%', 
        marginVertical:5, 
        alignSelf:'center',
    },
    sd:{
        marginTop: 10,
        paddingLeft: 20 ,
    },
    textInput_sd1:{
        marginLeft: 20,
        backgroundColor:'white', 
        width:'10%', 
        textAlign:'center',
        marginVertical:5, 
        alignSelf:'center', 
    },
    textInput_sd2:{
        marginLeft: 7,
        backgroundColor:'white', 
        width:'10%', 
        textAlign:'center',
        marginVertical:5, 
        alignSelf:'center', 
    },
    textInput_sd3:{
        marginLeft: 7,
        backgroundColor:'white', 
        width:'15%', 
        textAlign:'center',
        marginVertical:5, 
        alignSelf:'center', 
    },
    textInput_name:{
        marginLeft: 45,
        backgroundColor:'white', 
        width:'20%', 
        marginVertical:5, 
        alignSelf:'center',
    },
    textInput_phone:{
        textAlign: 'center',
        marginLeft: 20,
        backgroundColor:'white', 
        width:'10%', 
        marginVertical:5, 
        alignSelf:'center',
    },
    textInput_phone_1:{
        textAlign: 'center',
        marginLeft: 7,
        backgroundColor:'white', 
        width:'15%', 
        marginVertical:5, 
        alignSelf:'center',
    },
    textInput_email:{
        marginLeft: 33,
        marginRight: 5,
        backgroundColor:'white', 
        width:'23%', 
        marginVertical:5, 
        alignSelf:'center',
    },
    textInput_domain:{
        marginLeft: 5,
        backgroundColor:'white', 
        width:'20%', 
        marginVertical:5, 
        alignSelf:'center',
    },

})