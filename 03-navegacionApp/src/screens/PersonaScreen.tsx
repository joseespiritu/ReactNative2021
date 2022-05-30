import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

// interface RouteParams {
//     id: number;
//     nombre: string;
// }

interface Props extends NativeStackScreenProps<RouteStackParams,'PersonaScreen'>{};

const PersonaScreen = ({route, navigation}: Props) => {

  
  // const params = route.params as RouteParams;
  const params = route.params;
  const {changeUsername} = useContext(AuthContext);

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        });
    }, [])

    useEffect(() => {
      changeUsername(params.nombre);
    }, [])
    
    
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  )
}

export default PersonaScreen;