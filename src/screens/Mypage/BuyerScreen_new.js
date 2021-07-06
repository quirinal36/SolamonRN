/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button, Tabs, Tab, TabHeading } from "native-base";
import { TextInput } from 'react-native-gesture-handler';
import DatePicker from '../../components/DatePicker'
import SellerModifyScreen from './SellerModifyScreen'
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { API_URL } from '../StaticVariable';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
export default class BuyerScreen_new extends Component{
   
    constructor(props){
        super(props);
        this.state = {
            tableTitle: ['전화번호', '팩스번호', '이메일', '담당자명', '담당자\n전화번호', '담당자\n이메일주소', '담당자\n팩스번호'],
            tableData: [
              ['판매자'],
              ['미인증'],
              ['solalove@aaa.ccc'],
              ['김이름'],
              ['063-111-1234'],
              ['solalove@aaa.ccc'],
              ['063-111-1235'],
            ],
          };
        AsyncStorage.getItem('jwt', (err, result) => {
            const jwt = JSON.parse(result);
            console.log('buyer screen');
            console.log(jwt);
            console.log('-------------------');
            this._infoHandler(jwt.accessToken);
        });
    }

    _infoHandler= async (tok)=>{
        console.log(tok);
        await axios({
            method: 'post',
            url:API_URL + 'getUserInfo',
            headers :{
                'Authorization': 'Bearer ' + tok,
                'Content-Type': 'application/json',
            },
        }).then((result)=>{
            console.log(result.data.data);
            const userInfo = result.data.data;
            this.setState({tableData:[
                ['판매자'],
                ['미인증'],
                [userInfo.email],
                [userInfo.name],
                [userInfo.phone],
                [userInfo.email],
                [userInfo.fax],
            ]});
        });
    }

    render(){
        let navigation = this.props.navigation;
        const state = this.state;
        return (
          <View style={styles.container}>
              <Header style={styles.header}>
                    <Pressable style={{position:'absolute', left:5}} onPress={()=>navigation.navigate('HomeScreen')}>
                        <Icon style={{color:'white'}} name={'chevron-back'}/>
                    </Pressable>
                    <Text style={{fontSize:15, color:'white', textAlignVertical:'center'}}>내 정보</Text>
                </Header>
                <View style={styles.bg}>
                <Table borderStyle={{borderWidth: 1}}>
          <TableWrapper style={styles.wrapper}>
            <Col data={state.tableTitle} style={styles.title} heightArr={[40,40]} textStyle={styles.text}/>
            <Rows data={state.tableData} flexArr={[1, 1, 1]} style={styles.row} textStyle={styles.text_sub}/>
          </TableWrapper>
        </Table>
        <Button onPress={()=>navigation.navigate('searchId_result')}
                    style={{width:'80%',alignSelf:'center', justifyContent:'center', marginTop: 8, borderWidth:1, backgroundColor:'#808080', borderColor:'#808080'}}>
                    <Text style={{fontSize:15, color:'#FFFFFF', fontWeight: 'bold'}}>회원정보 수정</Text>
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
    head: {  height: 40,  backgroundColor: '#f1f8ff'  },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#d3d3d3' },
    row: {  height: 40, backgroundColor: '#f6f8fa'  },
    text: { textAlign: 'center' },
    text_sub: { textAlign: 'left', marginLeft: 8 },
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
    bg:{
        marginTop: 18,
        marginLeft: 20,
        width:'90%',
        height:'90%',
    },
    back:{
        width:'100%',
        //height:'100%',
        justifyContent:'center',
        flexDirection:'row',
    },
})