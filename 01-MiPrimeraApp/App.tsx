import React from 'react';
import { SafeAreaView } from 'react-native';
//import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
//import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
//import { ContadorScreen } from './src/screens/ContadorScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';

export const App = () => {
  return (
    //<ContadorScreen />
    <SafeAreaView style={{ flex: 1 }}>
      <DimensionesScreen />
    </SafeAreaView>
  );
};
