import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsScreen from '../screens/SettingsScreen';
// import StackNavigator from './StackNavigator';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { colores, styles } from '../theme/appTheme';
import { Tabs } from './Tabs';

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
      <Drawer.Screen name="Tabs" options={{headerShown: false}} component={Tabs} />
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
          style={[styles.menuBoton, {flexDirection: 'row', alignItems: 'center'}]}
          onPress={() => navigation.navigate('Tabs')}
        >
          <Text>
            <Icon name="map-outline" size={30} color={colores.primary} />
          </Text>
          <Text style={[styles.menuTexto, {marginLeft: 5}]}>Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.menuBoton, {flexDirection: 'row', alignItems: 'center'}]}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Text>
            <Icon name="settings-outline" size={30} color={colores.primary} />
          </Text>
          <Text style={[styles.menuTexto, {marginLeft: 5}]}>Ajustes</Text>
        </TouchableOpacity>

      </View>

    </DrawerContentScrollView>
  );
}

export default MenuLateral;