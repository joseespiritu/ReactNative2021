import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { RootStackProps } from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackProps, 'DetailScreen'> {}

export const DetailScreen = ({navigation, route}: Props) => {

  const movie = route.params;
  
  return (
    <View>
        <Text>DetailScreen</Text>
    </View>
  )
}
