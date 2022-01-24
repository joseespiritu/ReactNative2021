import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';

function App() {
  return (
    <SafeAreaView style={styles.contenedor}>
      <StatusBar backgroundColor={'#3B82F6'} />
      <View style={styles.header}>
        <Header />
        <NuevoPresupuesto />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  header: {
    backgroundColor: '#3B82F6',
  },
});

export default App;
