import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const ComponentScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>This is the component screen</Text>
            <Text style={styles.textStyle}>This is the component 2 screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentScreen;