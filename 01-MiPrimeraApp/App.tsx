import React from 'react';
import { SafeAreaView } from 'react-native';
//import { FlexScreen } from './src/screens/FlexScreen';
//import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
//import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
//import { ContadorScreen } from './src/screens/ContadorScreen';
//import { DimensionesScreen } from './src/screens/DimensionesScreen';
//import { PositionScreen } from './src/screens/PositionScreen';
import { TareaScreens } from './src/screens/TareaScreens';

export const App = () => {
  return (
    //<ContadorScreen />
    <SafeAreaView style={{ 
      backgroundColor: '#28425B',
      flex: 1
    }}>
      <TareaScreens />
    </SafeAreaView>
  );
};
