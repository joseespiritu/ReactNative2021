import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import StackNavigator from './StackNavigator';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

const MenuLateralBasico = () => {

  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width>=768 ? 'permanent' : 'front'
      }}
    >
      <Drawer.Screen name="StackNavigator" options={{title: 'Home', headerShown: false}} component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" options={{title: 'Settings', headerShown: false}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default MenuLateralBasico;