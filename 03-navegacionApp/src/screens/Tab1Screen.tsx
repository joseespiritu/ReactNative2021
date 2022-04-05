import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native'
import { colores, styles } from '../theme/appTheme';

const Tab1Screen = () => {

    useEffect(() => {
      console.log('Tab1Screen');
    }, []);
    

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Iconos</Text>
        <Text>
          <Icon name="airplane-outline" size={50} color={colores.primary} />
          <Icon name="add-outline" size={50} color={colores.primary} />
          <Icon name="alarm-outline" size={50} color={colores.primary} />
        </Text>
    </View>
  )
}

export default Tab1Screen;