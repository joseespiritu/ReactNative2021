import * as React from 'react';
import { Text, View } from 'react-native';
import movieDB from '../api/movieDB';

export const HomeScreen = () => {

  React.useEffect(() => {
    movieDB.get('/now_playing')
            .then(resp => {
              console.log(resp);
            })
  }, []);
  

  return (
    <View>
        <Text>HomeScreen</Text>
    </View>
  )
}
