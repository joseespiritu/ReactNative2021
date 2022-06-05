import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
        defaultScreenOptions={{
            headerShown: false,
            headerStyle: {
                backgroundColor: 'white'
            }
        }}
    >
      <Stack.Screen name="HomeScreen" options={{headerShown: false}} component={HomeScreen} />
      <Stack.Screen name="DetailScreen" options={{headerShown: false}} component={DetailScreen} />
    </Stack.Navigator>
  );
}