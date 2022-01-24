import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function Header() {
  return (
    <View>
      <Text style={styles.texto}>Planificador de gastos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    paddingTop: 20,
  },
});

export default Header;
