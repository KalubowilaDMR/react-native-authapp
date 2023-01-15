import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";

const Home = () => {
  return (
    <SafeAreaView style={{flex:1}}>
        <ScrollView>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Image source={require('../assets/images/default_bg.png')} resizeMode='contain' style={{width:200}}/>
            </View>
            <View style={styles.container}>
                <Text style={styles.appTitile}>Hello My App</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor : 'white'
    },
    appTitile : {
        fontSize : 24,
        fontWeight : 'bold',
        textAlign : 'center'
    }
});

export default Home;
