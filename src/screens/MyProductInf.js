import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View, Image, Alert} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button, Form  } from "native-base";
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class MyProductInf extends Component{
   
    constructor(props){
        super(props);
        this.state = {
            tableTitle: ['모델명', '제조사', '제조연월', '사용기간', '수량', '용량'],
            tableData: [
              ['SL-12353'],
              ['(주)태양광사랑'],
              ['2018-12-02'],
              ['2년 4개월'],
              ['1개'],
              ['용량'],
            ]
          };
    }

    render(){
        let navigation=this.props.navigation;
        const state = this.state;
        return(
            <View style ={styles.container}>
                <Header style={styles.header}>
                    <Pressable style={{position:'absolute', left:5}} onPress={()=>navigation.navigate('HomeScreen')}>
                        <Icon style={{color:'white'}} name={'chevron-back'}/>
                    </Pressable>
                    <Text style={{fontSize:15, color:'white', textAlignVertical:'center'}}>내 상품</Text>
                </Header>
                    <View style={styles.bg_2}>
                        <Image source={{uri :"https://i1.wp.com/www.euroscientist.com/wp-content/uploads/2020/04/chelsea-WvusC5M-TM8-unsplash-scaled.jpg?fit=2560%2C1920&ssl=1"}} 
                        style={{width:370, height:150}}/>
                    </View>
                    <Text style={{marginLeft: 18, marginTop: 9, fontSize: 18, fontWeight: 'bold'}}>상품명</Text>  
                    <Text style={{marginLeft: 18, marginTop: 9, fontSize: 15}}>상세설명</Text>
                    <View style={styles.bg}>
                    <Table borderStyle={{borderWidth: 1}}>
                    <TableWrapper style={styles.wrapper}>
                        <Col data={state.tableTitle} style={styles.title} heightArr={[40,40]} textStyle={styles.text}/>
                        <Rows data={state.tableData} flexArr={[1, 1, 1]} style={styles.row} textStyle={styles.text_sub}/>
                        </TableWrapper>
                    </Table>
                    </View>
                    {/* 수정 버튼은 관리자에게만 표시되도록. */}
                    <View style={styles.bg}>
                    <Button onPress={()=>navigation.navigate('')}
                    style={{width:'80%',alignSelf:'center', justifyContent:'center', borderWidth:1, backgroundColor:'#808080', borderColor:'#808080', borderRadius: 7}}>
                    <Text style={{fontSize:15, color:'#FFFFFF', textAlign: 'center', fontWeight: 'bold'}}>수정</Text>
                    </Button>
                    </View>
                    <View style={styles.bg}>
                    <Button onPress={()=>navigation.navigate('')}
                    style={{width:'80%',alignSelf:'center', justifyContent:'center', borderWidth:1, backgroundColor:'#005A96', borderColor:'#005A96', borderRadius: 7}}>
                    <Text style={{fontSize:15, color:'#FFFFFF', textAlign: 'center', fontWeight: 'bold'}}>목록</Text>
                    </Button>
                    </View>
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
        width:'90%',
        marginLeft: 20,
        marginTop: 12,
    },
    bg_2:{
        marginTop: 16,  
        width:'100%',
        //height:'100%',
        justifyContent:'center',
        flexDirection:'row',
    },
    head: {  height: 40,  backgroundColor: '#f1f8ff'  },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#d3d3d3' },
    row: {  height: 40, backgroundColor: '#f6f8fa'  },
    text: { textAlign: 'center' },
    text_sub: { textAlign: 'left', marginLeft: 8 },
})