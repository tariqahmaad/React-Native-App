//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';

// create a component
const HomeScreen = ({ navigation }) => {

    console.log(navigation);

    return (
        <View style={styles.container}>
            <Text style={styles.forText}>Welcome to Ahmad's Apps</Text>
            <Button title='List Screen' onPress={() => navigation.navigate("ListScreen")} />
            <Button title="Component Screen" onPress={() => navigation.navigate("Component")} />

            <TouchableOpacity onPress={() => navigation.navigate("Ahmad")}>
                {/* <Text style={styles.button}>Touchable 1</Text> */}

                <Image
                    source={require('../../assets/eagle.jpg')}
                    style={{ width: 400, height: 400 }}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',

    },
    forText: {
        fontSize: 40,
        color: 'lightblue',
        textAlign: 'center',
        position: 'absolute',
        // the text should be in the top center of the screen
        top: 20,
        backgroundColor: 'darkred',
        padding: 15,
        borderRadius: 20,
    },
    button: {
        marginTop: 20,
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 10,
    },
});

//make this component available to the app
export default HomeScreen;