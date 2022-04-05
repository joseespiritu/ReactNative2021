import React, { useEffect } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { colores, styles } from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {};
// interface Props extends NativeStackScreenProps<any, any> {};

const Pagina1Screen = ({navigation}: Props) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginRight: 10}}
          onPress={() => navigation.toggleDrawer()}
        >
          <Icon name='menu-outline' size={35} />
        </TouchableOpacity>
      )
    });
  }, [])
  

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Pagina1Screen</Text>
        <Button
            title='Ir a página 2'
            onPress={() => navigation.navigate('Pagina2Screen')}
        />
        <Text style={{marginVertical: 20, fontSize: 20}}>Navegar con argumentos</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{...styles.botonGrande, backgroundColor:'#5856D6'}}
            onPress={() => navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Jose'
            })}
          >
            <Icon name='man-outline' color='white' size={35}/>
            <Text style={styles.botonGrandeTexto}>Jose</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{...styles.botonGrande, backgroundColor: '#FF9427'}}
            onPress={() => navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Maria'
            })}
          >
            <Icon name='woman-outline' color='white' size={35}/>
            <Text style={styles.botonGrandeTexto}>Maria</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Pagina1Screen;