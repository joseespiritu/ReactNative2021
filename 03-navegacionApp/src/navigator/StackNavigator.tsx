import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pagina1Screen from '../screens/Pagina1Screen';
import Pagina2Screen from '../screens/Pagina2Screen';
import Pagina3Screen from '../screens/Pagina3Screen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Pagina1Screen" component={Pagina1Screen} />
        <Stack.Screen name="Pagina2Screen" component={Pagina2Screen} />
        <Stack.Screen name="Pagina3Screen" component={Pagina3Screen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;