import React from 'react';
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';

const NuevoPresupuesto = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>Definir presupuesto</Text>

      <TextInput
        keyboardType="numeric"
        placeholder="Agrega tu presupuesto: Ej. 300"
        style={styles.input}
      />

      <Pressable style={styles.boton}>
        <Text style={styles.botonTexto}>Agregar presupuesto</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 40,
    paddingHorizontal: 20,
    transform: [{translateY: 50}],
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    textAlign: 'center',
    fontSize: 24,
    color: '#3B82F6',
  },
  input: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 30,
  },
  boton: {
    marginTop: 30,
    backgroundColor: '#1048A4',
    padding: 10,
    borderRadius: 10,
  },
  botonTexto: {
    color: '#FFF',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default NuevoPresupuesto;
