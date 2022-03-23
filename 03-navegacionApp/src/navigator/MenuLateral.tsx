import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import StackNavigator from './StackNavigator';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

const MenuLateral = () => {

  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width>=768 ? 'permanent' : 'front',
      }}
      drawerContent={(props) => <MenuInterno {...props} />}
    >
      <Drawer.Screen name="StackNavigator" options={{headerShown: false}} component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" options={{headerShown: false}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>

      {/* Parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png'
          }}
          style={styles.avatar}
        />
      </View>
      
      {/* Opciones de Menú */}
      <View style={styles.menuContainer}>

        <TouchableOpacity 
          style={styles.menuBoton}
          onPress={() => navigation.navigate('StackNavigator')}
        >
          <Text style={styles.menuTexto}>Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuBoton}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Text style={styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>

      </View>

    </DrawerContentScrollView>
  );
}

export default MenuLateral;