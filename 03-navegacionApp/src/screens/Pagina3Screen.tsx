import React from 'react'
import { Button, Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from '../theme/appTheme';

interface Props extends NativeStackScreenProps<any, any>{};

const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
        <Text>Pagina3Screen</Text>
        <Button
          title='Regresar'
          onPress={()=> navigation.pop()}
        />
        <Button
          title='Ir a Home'
          onPress={() => navigation.popToTop()}
        />
    </View>
  )
}

export default Pagina3Screen;