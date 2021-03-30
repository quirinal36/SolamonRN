import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View, Image, Alert} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button, Form  } from "native-base";
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios';
import { TextInput } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

export default class ProductRegistFin extends Component{
   
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
                    <Text style={{fontSize:15, color:'white', textAlignVertical:'center'}}>상품 등록</Text>
                </Header>
              <View style={styles.bg_3}>
                <Text style={styles.title_text}>
                    상품 등록이 완료되었습니다.{"\n"}
                    담당자 확인 후 [대기] 상태에서{"\n"}
                    [미인증] 상태로 변경되며{"\n"}
                    인증이 완료되면 인증서 발급과 함께{"\n"}
                    [인증완료] 상태로 변경됩니다.

                </Text>
              </View>
               <View style={styles.bg_3}>
                <Button onPress={()=>navigation.navigate('')}
                    style={{width:'80%',alignSelf:'center', justifyContent:'center', marginTop: 30, borderWidth:1, backgroundColor:'#005A96', borderColor:'#005A96', borderRadius: 7}}>
                    <Text style={{fontSize:15, color:'#FFFFFF', textAlign: 'center', fontWeight: 'bold'}}>등록한 상품 보기</Text>
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
    title_text: {
        marginTop: 50,
        marginLeft:20,
        textAlign: 'center',
        color: '#555555'
    },
    title_text_2: {
        marginTop: 25,
        marginLeft:20,
        marginRight: 37,
    },
    title_text_3: {
        marginTop: 14,
        marginLeft:20,
        marginRight: 37,
    },
    bg:{
        width:'100%',
        //height:'100%',
        flexDirection:'row',
    },
    bg_2:{
        marginTop: 14,
        width:'100%',
        //height:'100%',
        flexDirection:'row',
    },
    bg_3:{
        width:'100%',
        //height:'100%',
        justifyContent: 'center',
        flexDirection:'row',
    },
    textInput:{
        marginLeft: 64,
        marginTop: 9,
        backgroundColor:'white', 
        width:'50%', 
        marginVertical:5, 
        alignSelf:'center',
        borderRadius: 10,
    },
    textInput_2:{
        marginLeft: 50,
        marginTop: 9,
        backgroundColor:'white', 
        width:'50%', 
        marginVertical:5, 
        alignSelf:'center',
        borderRadius: 10,
    },
    textInput_3:{
        marginLeft: 76,
        marginTop: 9,
        backgroundColor:'white', 
        width:'50%', 
        marginVertical:5, 
        alignSelf:'center',
        borderRadius: 10,
    },
    header:{
        backgroundColor:'#005A96',
        alignItems:'center',
    },
})