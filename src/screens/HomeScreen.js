//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.forText}>Welcome to Ahmad's App</Text>
        </View>
    );
};

// define your styles
const styles=StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
        
    },
    forText: {
        fontSize:40,
        color:'lightblue',
        textAlign:'center',
        position:'absolute',
        // the text should be in the top center of the screen
        top:20,
        backgroundColor:'darkred',
        padding:15,
        borderRadius:20,
    },
});

//make this component available to the app
export default HomeScreen;