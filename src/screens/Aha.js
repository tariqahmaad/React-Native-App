import { Text, TextComponent, View } from 'react-native'
import React, { Component } from 'react'

const Aha = () => {

    // Variables
    let myVar = "Hello Aydin";
    // Constants
    const myCont = "this is my content";
    // Numbers
    const myNum = 1234;
    // Arrays
    const myArr = [1,2,3,4,5,6,7,8,9,10];
    // Objects
    const myObj = {
        name: 'Aydin',
        age: 25,
        city: 'Istanbul'
    }

return (
    <View>
    <Text>Alp</Text>
    <Text>{myVar}</Text>
    <Text>{myCont}</Text>
    <Text>{myNum}</Text>
    <Text>{myArr}</Text>
    <Text>{myObj.name}</Text>
    </View>
)
}

export default Aha