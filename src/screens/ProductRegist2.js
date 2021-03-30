import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View, Image, Alert} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button, Form  } from "native-base";
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios';
import { TextInput } from 'react-native-gesture-handler';

export default class ProductRegist2 extends Component{
   
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
               <Text style={styles.title_text}>모델명</Text>
               <TextInput style={styles.textInput} placeholder={'모델명'}/>
               </View>
               <View style={styles.bg}>
               <Text style={styles.title_text}>제조사</Text>
               <TextInput style={styles.textInput} placeholder={'제조사'}/>
               </View>
               <View style={styles.bg}>
               <Text style={styles.title_text}>제조년월</Text>
               <TextInput style={styles.textInput_2} placeholder={'제조년월'}/>
               </View>
               <View style={styles.bg}>
               <Text style={styles.title_text}>사용기간</Text>
               <TextInput style={styles.textInput_2} placeholder={'사용기간'}/>
               </View>
               <View style={styles.bg}>
               <Text style={styles.title_text}>수량</Text>
               <TextInput style={styles.textInput_3} placeholder={'수량'}/>
               </View>
               <View style={styles.bg}>
               <Text style={styles.title_text}>용량</Text>
               <TextInput style={styles.textInput_3} placeholder={'용량'}/>
               </View>
               <View style={styles.bg}>
               <Text style={styles.title_text_2}>인증서</Text>
               <Button onPress={()=>navigation.navigate('')}
                    style={{width:'12%',alignSelf:'center', justifyContent:'center', marginTop: 11, marginLeft: 26, borderWidth:1, backgroundColor:'#005A96', borderColor:'#005A96', borderRadius: 7}}>
                    <Text style={{fontSize:28, color:'#FFFFFF', textAlign: 'center'}}>+</Text>
                </Button>
               </View>
               <View style={styles.bg_3}>
                <Button onPress={()=>navigation.navigate('ProductRegistFin')}
                    style={{width:'80%',alignSelf:'center', justifyContent:'center', marginTop: 30, borderWidth:1, backgroundColor:'#005A96', borderColor:'#005A96', borderRadius: 7}}>
                    <Text style={{fontSize:15, color:'#FFFFFF', textAlign: 'center', fontWeight: 'bold'}}>상품 등록</Text>
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
        marginTop: 25,
        marginLeft:20,
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