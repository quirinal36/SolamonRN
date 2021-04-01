import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button, Form } from "native-base";
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import SideMenu from 'react-native-side-menu'
import SideBar from '../../components/SideBar';
import axios from 'axios';
import { API_URL } from '../StaticVariable';
import { NavigationEvents } from 'react-navigation';

class ContentView extends Component{

    _loginHandler=async (id, pw, navigation)=>{
        if(typeof(id)=='undefined' || id.length<=0 || id===''){
            return;
        }
        if(typeof(pw)=='undefined' || pw.length<=0 || pw===''){
            return;
        }
        axios.post(API_URL+"/auth/tokens",{
            login : id,
            passwd : pw
        }).then((res)=>{
            if(res.data && res.data.token && res.data.token.length != 0){
                AsyncStorage.setItem('token',res.data.token);
                AsyncStorage.setItem('userId',res.data.userId.toString());

                this._infoHandler(res.data.token);
            } else {
                console.log('failed');
                AsyncStorage.setItem('token','');
                AsyncStorage.setItem('userId','');
            }
        }).catch((err)=>{
            console.error(err);
            AsyncStorage.setItem('token','');
            AsyncStorage.setItem('userId','');
        })

        navigation.navigate('HomeScreen');
    }

    _infoHandler= async (tok)=>{
        await axios.get(API_URL+"/users/info",
        {headers: {'Authorization': 'Bearer '+tok,
            'Content-Type': 'application/json'}
        }).then((result)=>{
            console.log(result.data);
            AsyncStorage.setItem('userType', result.data.type.toString());
        })
    }

    render(){

        let id;
        let pw;
        let navigation=this.props.navigation;        

        return(
            <View style={styles.container}>
                <Header style={styles.header}>
                    <Pressable style={{position:'absolute', left:5}} onPress={()=>navigation.navigate('HomeScreen')}>
                        <Icon style={{color:'white'}} name={'chevron-back'}/>
                    </Pressable>
                    <Text style={{fontSize:15, color:'white', textAlignVertical:'center'}}>로그인</Text>
                </Header>

                {/* body */}
                <View style={styles.bg}>
                    {/* 안내 메세지 */}
                            <Text style={{marginTop: 100, fontSize:15, color:'gray', textAlign:'center'}}>솔라몬 서비스를 이용하기 위해{"\n"}로그인을 해주세요</Text>
                    </View>

                    {/* ID, PW 입력칸 */}
                    <View style={styles.bg_2}>
                            <TextInput style={styles.textInput} onChangeText={(_id)=>id=_id} placeholder={'아이디'}/>
                            </View>
                            <View style={styles.bg}>
                            <TextInput style={styles.textInput} onChangeText={(_pw)=>pw=_pw} placeholder={'비밀번호'}/>
                            </View>
                    

                    {/* 버튼 */}
                    <View style={styles.bg_2}>
                        <Button onPress={()=>this._loginHandler(id, pw,navigation)} style={{borderRadius: 10,width:'75%', backgroundColor:'#005A96', alignSelf:'center', justifyContent:'center'}}>
                            <Text style={{fontSize:15, color:'white'}}>로그인</Text>
                        </Button>
                        </View>
                        <View style={styles.bg}>
                        <Text style={{marginTop: 70}}>또는</Text>
                        </View>
                        {/* <Button style={{width:'95%', backgroundColor:'#FFEB32', alignSelf:'center', justifyContent:'space-around'}}>
                            <Icon style={{color:'black', position:'absolute', left:5}} name='chatbubble'/>
                            <Text>카카오 로그인</Text>
                        </Button> */}
                        <View style={styles.bg_2}>
                         <Button style={{width:'75%', backgroundColor:'#FFEB32', alignSelf:'center', justifyContent:'space-around', borderRadius: 10}}>
                            <Text>카카오 로그인</Text>
                        </Button>
                        </View>
                        <View style={styles.bg}>
                        <Button style={{marginTop: 10, width:'75%', backgroundColor:'#2DB400', alignSelf:'center', justifyContent:'space-around', borderRadius: 10}}>
                            <Text>네이버 로그인</Text>
                        </Button>
                        </View>
                        <View style={styles.bg}>
                        <Button style={{marginTop: 10, width:'75%', backgroundColor:'#808080', alignSelf:'center', justifyContent:'space-around', borderRadius: 10}}>
                            <Text>회원가입</Text>
                        </Button>
                        </View>
                        <View style={styles.bg}>
                        <Pressable style={{flexDirection:'row'}} onPress={()=>navigation.navigate('searchId')}>
                            <Text>아이디를 찾을 수 없나요? </Text>
                            <Text style={{color:'gray'}}>아이디찾기</Text>
                        </Pressable>
                        </View>
                    <View style={{flex:0.5}}></View>
                    </View>
        );
    }
}

export default class SignInScreen extends Component{
    render(){
        let navigation=this.props.navigation;
        const menu = <SideBar navigation={navigation}/>;

        return (
            <SideMenu
                menu={menu}
            >
                <ContentView navigation={navigation}/>
            </SideMenu>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#005A96',
        alignItems:'center',
    },
    textInput:{
        borderRadius: 10,   
        backgroundColor:'white', 
        width:'75%', 
        marginVertical:5, 
        alignSelf:'center'
    },
    bg:{
        width:'100%',
        //height:'100%',
        flexDirection:'row',
        justifyContent:'center',
    },
    bg_2:{
        marginTop: 8,
        width:'100%',
        //height:'100%',
        flexDirection:'row',
        justifyContent:'center',
    },
    container:{
        flex: 1,
        backgroundColor:'#F0F2FA',
    }
})