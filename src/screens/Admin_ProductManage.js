import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View, Image, Alert} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button, Form  } from "native-base";
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios';
import { API_URL } from './StaticVariable';

export default class Admin_ProductManage extends Component{
   
    constructor(props){
        super(props);
        this.state={
            info:''
        };
    }

    // componentDidMount(){
    //     this.getToken();
    // }

    // getToken = async () => {
    //     try {
    //         await this._getUserData();
    //     } catch (error) {
    //         console.log('데이터를 가져오는데 실패하였습니다.');
    //         return false;
    //     }
    //     return true;
    // }


    render(){
        let navigation=this.props.navigation;
        return(
            <Container style={{backgroundColor:'#F0F2FA'}}>
               <Header style={styles.header}>
                    <Pressable style={{position:'absolute', left:5}} onPress={()=>navigation.navigate('HomeScreen')}>
                        <Icon style={{color:'white'}} name={'chevron-back'}/>
                    </Pressable>
                    <Text style={{fontSize:15, color:'white', textAlignVertical:'center'}}>관리자 페이지</Text>
                </Header>

<View>
 <Text>Admin_ProductManage.js</Text>
</View> 
                
                
    </Container>
        );
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#005A96',
        alignItems:'center',
    },
    container: {
        flex: 1,
        marginHorizontal: 16,
       },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
    },
    bg:{
        width:'100%',
        //height:'100%',
        justifyContent:'center',
        flexDirection:'row',
    },
})