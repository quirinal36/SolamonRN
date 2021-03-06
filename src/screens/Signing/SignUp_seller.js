/* eslint-disable prettier/prettier */
import React, {Component, useState} from 'react';
import {Text,StyleSheet, Pressable, View} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button } from "native-base";
import { TextInput } from 'react-native-gesture-handler';

import axios from 'axios';
import { API_URL } from '../StaticVariable';
export default class SignUp_seller extends Component{
    constructor(props){
        super(props);
        this.state = {
            login:'',
            email:'',
            domain:'',
            password:'',
            name:'',
            mobile:'',
            fax1:'',fax2:'',fax3:'',
            phone1:'',phone2:'',phone3:'',
        };
    }
    _signUpHandler=()=>{
        const url = API_URL + 'member/add';
        const { navigate } = this.props.navigation;
        const { login } = this.state.login;

        const formData = new FormData();
        formData.append('login', this.state.login);
        formData.append('password', this.state.password);
        formData.append('email', this.state.email + '@' + this.state.domain);
        formData.append('role', 3);
        formData.append('name', this.state.name);
        formData.append('phone', this.state.phone1 + this.state.phone2 + this.state.phone3);
        formData.append('fax', this.state.fax1 + this.state.fax2 + this.state.fax3);
        axios({
            method: 'POST',
            url: url,
            data: formData,
        }).then(function(response){
            console.log(response);
            navigate('SignInScreen', {'login':login});
        }).catch(function(error){
            console.log('ERROR');
            console.log(error);
        });
        /*
        axios.post(url ,{
            login:'turboguy',
            mobile:'01012345678',
            phone:'0631234567',
            password:'11111111',
            role:3,
            email:'aaa@bbb.ccc'
        }).then((res)=>{
            console.log(res);
            navigation.navigate('HomeScreen');
        }).catch((err)=>{
            //Alert.alert(err);
            console.error(err);
            AsyncStorage.setItem('token','');
            AsyncStorage.setItem('userId','');
        });
        */
    }


    _testHandler= async ()=>{
        await axios.get(API_URL + '/users/test').then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        });
    }
    render(){

        let navigation = this.props.navigation;
        return (
           <View style={styles.container}>
                <Header style={styles.header}>
                    <Pressable style={{position : 'absolute', left : 5}} onPress={()=>navigation.navigate('HomeScreen')}>
                        <Icon style={{color : 'white'}} name={'chevron-back'}/>
                    </Pressable>
                    <Text style={{fontSize:15, color:'white', textAlignVertical:'center'}}>회원가입</Text>
                </Header>
                <View style={styles.bg}>
                <Text style={styles.id}>
                   아이디
               </Text>
               <TextInput onChangeText={login => this.setState({login})}
                    style={styles.textInput_id} placeholder={'아이디'}/>
                </View>
                <View style={styles.bg}>
                <Text style={styles.pwd}>
                   비밀번호
               </Text>
               <TextInput onChangeText={password => this.setState({password})}
                    secureTextEntry={true}
                    style={styles.textInput} placeholder={'비밀번호(8자이상)'}/>
                </View>
                <View style={styles.bg}>
                <Text style={styles.pwd}>
                   회사명
               </Text>
               <TextInput style={styles.textInput_id} placeholder={'회사명'}/>
                </View>
                <View style={styles.bg}>
                <Text style={styles.sd}>
                   사업자{'\n'}등록번호
               </Text>
               <TextInput style={styles.textInput_sd1} placeholder={'123'}/>
               <TextInput style={styles.textInput_sd2} placeholder={'45'}/>
               <TextInput style={styles.textInput_sd3} placeholder={'67890'}/>
                </View>
                <View style={styles.bg}>
                <Text style={styles.pwd}>
                   이름
               </Text>
               <TextInput onChangeText={name => this.setState({name})}
                    style={styles.textInput_name} placeholder={'이름'}/>
                </View>
                <View style={styles.bg}>
                <Text style={styles.pwd}>
                   전화번호
               </Text>
               <TextInput onChangeText={phone1 => this.setState({phone1})}
                    style={styles.textInput_phone} placeholder={'010'}/>
               <TextInput onChangeText={phone2 => this.setState({phone2})}
                    style={styles.textInput_phone_1} placeholder={'1234'}/>
               <TextInput onChangeText={phone3 => this.setState({phone3})}
                    style={styles.textInput_phone_1} placeholder={'1234'}/>
                </View>
                <View style={styles.bg}>
                <Text style={styles.pwd}>
                   이메일
               </Text>
               <TextInput onChangeText={email => this.setState({email})}
                    style={styles.textInput_email} placeholder={'이메일'}/>
               <Text style={{fontSize:20}}>@</Text>
               <TextInput onChangeText={domain => this.setState({domain})}
                    style={styles.textInput_domain} placeholder={'도메인'}/>
                </View>
                <View style={styles.bg}>
                <Text style={styles.pwd}>
                   팩스번호
               </Text>
               <TextInput onChangeText={fax1 => this.setState({fax1})}
                     style={styles.textInput_phone} placeholder={'063'}/>
               <TextInput onChangeText={fax2 => this.setState({fax2})}
                     style={styles.textInput_phone_1} placeholder={'123'}/>
               <TextInput onChangeText={fax3 => this.setState({fax3})}
                     style={styles.textInput_phone_1} placeholder={'1234'}/>
                </View>
                <Button
                    onPress={this._signUpHandler}
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
        marginLeft: 20,
        width:'50%',
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
});
