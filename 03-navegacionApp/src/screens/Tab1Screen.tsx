import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import TouchableIcon from '../components/TouchableIcon';

const Tab1Screen = () => {

    useEffect(() => {
      console.log('Tab1Screen');
    }, []);
    

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Iconos</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableIcon iconName="airplane-outline"/>
          <TouchableIcon iconName="add-outline"/>
          <TouchableIcon iconName="alarm-outline"/>
        </View>
    </View>
  )
}

export default Tab1Screen;