import { View, Text, SafeAreaView, ScrollView, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";

const Login = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/images/auth_bg.png')} resizeMode={'cover'} style={styles.defaultBg}/>
            </View>
            <View style={{padding:10}}>
                <View style={styles.inputForm}>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <Image style={{width:'100%', height:80}} resizeMode={'contain'} source={require('../../assets/images/main_logo.png')}/>
                    </View>
                </View>
                <View style={styles.inputForm}>
                    <TextInput style={styles.inputText} placeholder="Enter your Email" />
                </View>
                <View style={styles.inputForm}>
                    <TextInput style={styles.inputText} placeholder="Enter your Password" secureTextEntry={true} />
                </View>
                <View style={styles.inputForm}>
                    <TouchableOpacity>
                        <Text style={{color:'#e00d0d', textAlign:'left', fontSize:16, fontWeight:'bold'}}>Forget Password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputForm}>
                    <TouchableOpacity style={styles.defaultButton}>
                        <Text style={{textAlign:'center', fontSize:16, color:'#fff'}}>Log In</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputForm}>
                    <Text style={{textAlign:'center'}}>Or</Text>
                </View>
                <View style={styles.inputForm}>
                    <View style={{justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                        <TouchableOpacity style={{marginRight:10}}>
                            <Image source={require('../../assets/images/google.png')} style={{width:40, height:40, borderRadius:1000}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:10}}>
                            <Image source={require('../../assets/images/facebook.png')} style={{width:40, height:40, borderRadius:1000}}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.inputForm}>
                    <Text style={{height:1, width:'100%', backgroundColor:'#ddd'}}></Text>
                </View>
                <View style={styles.inputForm}>
                    <TouchableOpacity>
                        <Text style={{color:'#099e1b', textAlign:'center', fontWeight:'bold', fontSize:14}}>Need an Account? Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container : {
        flex:1
    },
    defaultBg : {
        width : '100%',
        height : 120
    },
    formHeader : {        
        fontSize : '20'
    },
    inputForm : {
        marginTop: 10,
        padding:10
    },
    inputText : {
        padding :10,
        fontSize : 16,
        borderWidth : 1,
        borderColor : "#a7a7a7",
        borderRadius : 10
    },
    defaultButton : {
        padding : 12,
        backgroundColor : '#4287f5',
        borderRadius : 10,
    }
});

export default Login;
