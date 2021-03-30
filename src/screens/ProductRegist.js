import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View, Image, Alert} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button, Form  } from "native-base";
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios';
import { TextInput } from 'react-native-gesture-handler';

export default class ProductRegist extends Component{
   
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
               <View style={styles.bg}>
               <Text style={styles.title_text}>제목</Text>
               <TextInput style={styles.textInput} placeholder={'제목'}/>
               </View>
               <View style={styles.bg}>
               <Text style={styles.title_text}>상세설명</Text>
               <TextInput style={styles.textInput_2} placeholder={'상세설명'}/>
               </View>
               <View style={styles.bg}>
               <Text style={styles.title_text_2}>대표사진</Text>
               <Button onPress={()=>navigation.navigate('')}
                    style={{width:'12%',alignSelf:'center', justifyContent:'center', marginTop: 50, borderWidth:1, backgroundColor:'#005A96', borderColor:'#005A96', borderRadius: 7}}>
                    <Text style={{fontSize:28, color:'#FFFFFF', textAlign: 'center'}}>+</Text>
                </Button>
               </View>
               <View style={styles.bg_2}>
               <Text style={styles.title_text_3}>추가사진</Text>
               <Button onPress={()=>navigation.navigate('')}
                    style={{width:'12%',alignSelf:'center', justifyContent:'center', borderWidth:1, backgroundColor:'#005A96', borderColor:'#005A96', borderRadius: 7}}>
                    <Text style={{fontSize:28, color:'#FFFFFF', textAlign: 'center'}}>+</Text>
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
        marginTop: 32,
        marginLeft:20,
    },
    title_text_2: {
        marginTop: 64,
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
    textInput:{
        marginLeft: 64,
        marginTop: 18,
        backgroundColor:'white', 
        width:'50%', 
        marginVertical:5, 
        alignSelf:'center',
        borderRadius: 10,
    },
    textInput_2:{
        marginLeft: 38,
        marginTop: 50,
        backgroundColor:'white', 
        width:'50%', 
        height: '110%',
        marginVertical:5, 
        alignSelf:'center',
        borderRadius: 10,
    },
    header:{
        backgroundColor:'#005A96',
        alignItems:'center',
    },
})