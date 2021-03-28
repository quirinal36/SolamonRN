import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View, Image, Alert} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button, Form  } from "native-base";
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios';
import { API_URL } from './StaticVariable';
import { TextInput } from 'react-native-gesture-handler';

export default class searchPwd extends Component{
   
    constructor(props){
        super(props);
        this.state={
            info:''
        };
    }


    render(){
        let navigation=this.props.navigation;
        return(
          <View style={styles.container}>
              <Header style={styles.header}>
                    <Pressable style={{position:'absolute', left:5}} onPress={()=>navigation.navigate('HomeScreen')}>
                        <Icon style={{color:'white'}} name={'chevron-back'}/>
                    </Pressable>
                    <Text style={{fontSize:15, color:'white', textAlignVertical:'center'}}>비밀번호 찾기</Text>
                </Header>
              <View style={styles.bg}>
              <Text style={styles.top_Text}>아이디와 담당자 이메일을 입력하시면{"\n"}담당자 이메일로 임시 비밀번호를 보내드립니다.</Text>
              </View>
              <View style={styles.bg}>
                <TextInput style={styles.textInput_id} placeholder={'아이디'}/>  
              </View>
              <View style={styles.bg}>
               <TextInput style={styles.textInput_email} placeholder={'이메일'}/>
               <Text style={{fontSize:20}}>@</Text>
               <TextInput style={styles.textInput_domain} placeholder={'도메인'}/>
                </View>
                <View style={styles.bg}>
                <Button onPress={()=>navigation.navigate('searchPwd_result')}
                    style={{width:'70%',alignSelf:'center', justifyContent:'center', marginTop: 16, marginBottom: 100, borderWidth:1, backgroundColor:'#005A96', borderColor:'#005A96'}}>
                    <Text style={{fontSize:15, color:'#FFFFFF'}}>비밀번호 찾기</Text>
                </Button>
                </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F0F2FA',
        width: '100%',
        height: '100%',    
    },
    header:{
        backgroundColor:'#005A96',
        alignItems:'center',
    },
    top_Text: {
        marginTop: 140,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center',
        color: '#8C8C8C',
    },
    textInput_email:{
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
    textInput_id:{
        backgroundColor:'white', 
        width:'50%', 
        marginVertical:5, 
        alignSelf:'center',
    },
    bg:{
        width:'100%',
        //height:'100%',
        justifyContent:'center',
        flexDirection:'row',
    },
})