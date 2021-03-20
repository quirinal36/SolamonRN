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
        let navigation=this.props.navigation;

        return(
            <View style={styles.container}>
                <View style={styles.top_text}>
                <Text>여기에 텍스트를 넣어야되는데!!</Text>
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        flexDirection:'column',
    },
    bg:{
        backgroundColor:'#005A96',
        width:'100%',
        height:'100%',
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
    }
});