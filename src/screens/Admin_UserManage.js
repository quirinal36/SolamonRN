import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View, Image, Alert} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button, Form  } from "native-base";
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios';
import { API_URL } from './StaticVariable';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { TextInput } from 'react-native-gesture-handler';

export default class Admin_UserManage extends Component{
   
    constructor(props){
        super(props);
        this.state={
            tableHead: ['회원구분','회사명'],
            tableData: [
              ['판매자','(주)태양광사랑'],
              ['구매자', '솔라빔'],
              ['판매자','(주)태양광사랑'], 
              ['구매자', '솔라빔'],
              ['판매자','(주)태양광사랑'],
              ['구매자', '솔라빔'],
            ]
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
        const state = this.state;
        return(
            <Container style={{backgroundColor:'#F0F2FA'}}>
               <Header style={styles.header}>
                    <Pressable style={{position:'absolute', left:5}} onPress={()=>navigation.navigate('HomeScreen')}>
                        <Icon style={{color:'white'}} name={'chevron-back'}/>
                    </Pressable>
                    <Text style={{fontSize:15, color:'white', textAlignVertical:'center'}}>관리자 페이지</Text>
                </Header>

<View>
 <Text style={styles.top_Text}>관리자</Text>
 <Text style={styles.top_Text_2}>회원관리</Text> 
</View> 
<View style={styles.bg}>
<View style={{flexDirection:'row', backgroundColor:'F0F2FA', padding:10, height:60, marginTop:16}}>
                        <TextInput style={{backgroundColor:'white', borderWidth:2, marginRight:10, flex:9, borderRadius:10, padding:5}} placeholder={'검색어를 입력해주세요.'}></TextInput>
                        <Pressable style={{backgroundColor:'#FFF', borderWidth:2, flex:1, borderRadius:10}}>
                            <Text style={{textAlignVertical:'center', textAlign:'center', flex:1}}>검색</Text>
                        </Pressable>
                    </View>
</View>

<View style={styles.bg_2}>
<Table borderStyle={{borderWidth: 2, borderColor: '#d3d3d3'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
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
    // container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#d3d3d3' },
  text: { margin: 6, textAlign: 'center' },

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
    },
    bg_2:{
        marginTop: 18,
        marginLeft: 20,
        width:'90%',
        height:'90%',
    },
    top_Text: {
        marginLeft: 18,
        marginTop: 18,
        color: '#8C8C8C',
    },
    top_Text_2: {
        marginLeft: 18,
        marginTop: 4,
        fontSize: 20,
        color: '#000000',
    },
})