import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View, Image, Alert} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button, Form  } from "native-base";
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import axios from 'axios';

export default class MyProduct extends Component{
   
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
                    <Text style={{fontSize:15, color:'white', textAlignVertical:'center'}}>내 상품</Text>
                </Header>
                        <View style={styles.bg_2}>
                    <Button onPress={()=>navigation.navigate('')}
                    style={{width:'30%',alignSelf:'center', justifyContent:'center',  borderWidth:1, backgroundColor:'#A9A9A9', borderColor:'#767676'}}>
                    <Text style={{fontSize:12, color:'#FFFFFF', textAlign: 'center'}}>대기</Text>
                    </Button>
                    <Button onPress={()=>navigation.navigate('')}
                    style={{width:'30%',alignSelf:'center', justifyContent:'center',  borderWidth:1, backgroundColor:'#A9A9A9', borderColor:'#767676'}}>
                    <Text style={{fontSize:12, color:'#FFFFFF', textAlign: 'center'}}>인증완료</Text>
                    </Button>
                    <Button onPress={()=>navigation.navigate('')}
                    style={{width:'30%',alignSelf:'center', justifyContent:'center',  borderWidth:1, backgroundColor:'#A9A9A9', borderColor:'#424242'}}>
                    <Text style={{fontSize:12, color:'#FFFFFF', textAlign: 'center'}}>미인증</Text>
                    </Button>
                    </View>
                    <View style={styles.bg_2}>
                        <TouchableHighlight onPress={()=>navigation.navigate('MyProductInf')}>
                        <Image source={{uri :"https://i1.wp.com/www.euroscientist.com/wp-content/uploads/2020/04/chelsea-WvusC5M-TM8-unsplash-scaled.jpg?fit=2560%2C1920&ssl=1"}} 
                        style={{width:370, height:200}}/>
                        </TouchableHighlight>
                    </View>
                    <Text style={{marginLeft: 18, marginTop: 9, fontSize: 15}}>상품명</Text>
                    <View style={styles.bg_2}>
                        <TouchableHighlight onPress={()=>navigation.navigate('MyProductInf')}>
                        <Image source={{uri :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbrVwGFpMW4yBVMwk_iEPmcMs4H8_y-8IJMA&usqp=CAU"}} 
                        style={{width:370, height:200}}/>
                        </TouchableHighlight>
                    </View>
                    <Text style={{marginLeft: 18, marginTop: 9, fontSize: 15}} >상품명</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header:{
        backgroundColor:'#005A96',
        alignItems:'center',
    },
    bg:{
        width:'100%',
        //height:'100%',
        justifyContent:'center',
        flexDirection:'row',
    },
    bg_2:{
        marginTop: 16,  
        width:'100%',
        //height:'100%',
        justifyContent:'center',
        flexDirection:'row',
    },
})