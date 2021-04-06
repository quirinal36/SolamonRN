/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Pressable, StyleSheet, View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default class SignUp_select extends Component{
    componentDidMount(){
        setTimeout(()=>{
            SplashScreen.hide();
        }, 500);
    }
    render(){
        let navigation = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={styles.top_text_view}>
                    <Text style={styles.top_text}>사용자 유형을 선택해주세요.</Text>
                </View>
                <View style={styles.bg}>
                    <Pressable
                        style={styles.btn}
                        onPress={()=>navigation.navigate('SignUp_seller')} 
                    >
                        <Text style={styles.label}>판매자</Text>
                    </Pressable>
                    <Pressable
                        style={styles.btn}
                        onPress={()=>navigation.navigate('SignUpScreen')}
                    >
                        <Text style={styles.label}>구매자</Text>
                    </Pressable>
                </View>

                <View style={styles.bg}>
                <View style={styles.below_text_view_r}>
                    <Text style={styles.top_text}>제품을 등록하고{"\n"}판매합니다.</Text>
                </View>
                <View style={styles.below_text_view_l}>
                    <Text style={styles.top_text}>제품을 구매하고{"\n"}싶습니다.</Text>
                </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#005A96',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        flexDirection:'column',
    },
    top_text_view:{
        width: '100%',
        marginBottom: 20,
        alignItems:'center',
        
    },
    top_text:{
        color:'#DDDDDD',
        textAlign:'center'
    },
    below_text_view_l:{
        alignItems:'center',
        width: '100%',
        marginTop: 20,
        paddingRight: 250
    },
    below_text_view_r:{
        alignItems:'center',
        width: '100%',
        marginTop: 20,
        paddingLeft: 250    
    },
    bg:{
        width:'100%',
        //height:'100%',
        justifyContent:'center',
        flexDirection:'row',
    },
    btn:{
        backgroundColor:'blue',
        borderRadius:180,
        width:100,
        height:100,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        marginHorizontal:30,
    },
    label:{
        color:'white',
    },
});