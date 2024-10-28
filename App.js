import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import Aha from './src/screens/Aha';
import ListScreen from './src/screens/ListScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="Ahmad" component={Aha} />
        <Stack.Screen name="Component" component={ComponentScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}