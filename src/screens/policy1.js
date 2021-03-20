import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View, Image, Alert} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button, Form  } from "native-base";
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios';
import { API_URL } from './StaticVariable';

export default class Test extends Component{
   
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
                    <Text style={{fontSize:15, color:'white', textAlignVertical:'center'}}>회원가입</Text>
                </Header>


                <View>

                   <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci velit, fringilla sit amet aliquam vel, imperdiet non turpis. Aenean rutrum dictum tortor, nec placerat lacus scelerisque at. Curabitur blandit, magna eget scelerisque elementum, libero nisi sagittis risus, id volutpat eros sapien ultricies massa. Praesent vitae augue et nibh dapibus eleifend. Phasellus luctus sapien iaculis ultricies eleifend. Suspendisse risus arcu, tristique facilisis hendrerit ac, consectetur et nisi. Cras et commodo sem. Nunc iaculis libero non justo dictum, nec ornare diam malesuada. Donec maximus orci turpis, quis porta erat porttitor ut. Nulla facilisi. Aenean justo tellus, efficitur vitae vestibulum a, tempus eget libero. Nam tincidunt blandit elementum. Etiam dictum pulvinar tincidunt.

Nulla risus enim, semper at turpis quis, eleifend pharetra tellus. Maecenas imperdiet augue ante, eu pellentesque nisi sodales at. Proin a tincidunt mauris, vitae tincidunt dolor. Etiam finibus accumsan augue, id faucibus orci ullamcorper quis. Ut placerat vel metus non posuere. Ut quis felis non magna lobortis volutpat nec varius dui. Aliquam lobortis, magna ut auctor mattis, arcu augue tempor lorem, vel viverra nisl eros sit amet neque.</Text> 
</View>

<View>
    <Pressable 
        style={{backgroundColor:'#0078FF', justifyContent:'center', borderRadius:5, paddingBottom:5}}
        onPress={() => Alert.alert("클릭")}>
        <Text style={{textAlign:"center", textAlignVertical:"bottom"}}>동의합니다.</Text>
    </Pressable>
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
    buttonSize: {
        margin: 10
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
    },
})