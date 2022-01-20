import React, {useState, useRef} from 'react';
import {
  Modal,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Pressable,
  StatusBar,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

const Formulario = ({modalVisible, setModalVisible}) => {
  const [paciente, setPaciente] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [sintomas, setSintomas] = useState('');
  const propietarioRef = useRef();
  const emailRef = useRef();
  const telefonoRef = useRef();
  const sintomasRef = useRef();

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <StatusBar backgroundColor={'#6D28D9'} />
      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>
            Nueva {''}
            <Text style={styles.tituloBold}>Cita</Text>
          </Text>

          <Pressable
            style={styles.btnCancelar}
            onLongPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
          </Pressable>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre Paciente"
              placeholderTextColor={'#666'}
              value={paciente}
              onChangeText={setPaciente}
              returnKeyType="done"
              onSubmitEditing={() => {
                propietarioRef.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Propietario</Text>
            <TextInput
              ref={propietarioRef}
              style={styles.input}
              placeholder="Nombre Propietario"
              placeholderTextColor={'#666'}
              value={propietario}
              onChangeText={setPropietario}
              returnKeyType="done"
              onSubmitEditing={() => {
                emailRef.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Email Propietario</Text>
            <TextInput
              ref={emailRef}
              style={styles.input}
              placeholder="Email Propietario"
              placeholderTextColor={'#666'}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              returnKeyType="done"
              onSubmitEditing={() => {
                telefonoRef.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Teléfono Propietario</Text>
            <TextInput
              ref={telefonoRef}
              style={styles.input}
              placeholder="Teléfono Propietario"
              placeholderTextColor={'#666'}
              keyboardType="number-pad"
              value={telefono}
              onChangeText={setTelefono}
              maxLength={10}
              returnKeyType="done"
              onSubmitEditing={() => {
                sintomasRef.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Fecha Alta</Text>
            <View style={styles.fechaContenedor}>
              <DatePicker
                date={fecha}
                locale="es"
                onDateChange={date => setFecha(date)}
              />
            </View>
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Síntomas</Text>
            <TextInput
              ref={sintomasRef}
              style={[styles.input, styles.sintomasInput]}
              placeholder="Síntomas paciente"
              placeholderTextColor={'#666'}
              value={sintomas}
              onChangeText={setSintomas}
              multiline={true}
              numberOfLines={4}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#6D28D9',
    flex: 1,
    paddingBottom: 30,
  },
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#fff',
  },
  tituloBold: {
    fontWeight: '900',
  },
  btnCancelar: {
    marginVertical: 30,
    backgroundColor: '#5827A4',
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
  },
  btnCancelarTexto: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  label: {
    color: '#fff',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
  },
  sintomasInput: {
    height: 100,
  },
  fechaContenedor: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});

export default Formulario;
