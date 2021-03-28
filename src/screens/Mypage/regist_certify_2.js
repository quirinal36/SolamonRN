import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View, Image, Alert} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button, Form  } from "native-base";
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios';

export default class regist_certify_2 extends Component{
   
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
                    <Text style={{fontSize:15, color:'white', textAlignVertical:'center'}}>사업자 인증하기</Text>
                </Header>

            <View style={styles.bg}>
                <Text style={styles.title}>
                사업자등록증을 등록해주세요.
                </Text>
            </View>
            <Button onPress={()=>navigation.navigate('regist_certify_result')}
                    style={{width:'80%',alignSelf:'center', justifyContent:'center', marginTop: 250, borderWidth:1, backgroundColor:'#005A96', borderColor:'#005A96'}}>
                    <Text style={{fontSize:15, color:'#FFFFFF', fontWeight: 'bold'}}>사업자 인증신청</Text>
                </Button>
                <Button onPress={()=>navigation.navigate('')}
                    style={{width:'80%',alignSelf:'center', justifyContent:'center', marginTop: 8, borderWidth:1, backgroundColor:'#808080', borderColor:'#808080'}}>
                    <Text style={{fontSize:15, color:'#FFFFFF', fontWeight: 'bold'}}>다시 등록하기</Text>
                </Button>
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
    title:{
        marginTop: 64
    },
})