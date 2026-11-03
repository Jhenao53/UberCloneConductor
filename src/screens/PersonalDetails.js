
import React, { useContext } from 'react';

import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { DriverContext } from '../context/DriverContext';

export default function PersonalDetails() {

  // Accedemos a los datos compartidos
  const { driverData, updateDriverData } = useContext(DriverContext);

  return (
    <ScrollView style={styles.container}>

      <View style={styles.form}>

        <Text style={styles.title}>
          Datos personales
        </Text>

        <Text style={styles.subtitle}>
          Ingresa la información del conductor
        </Text>

        {/* Nombre completo */}
        <Text style={styles.label}>Nombre completo</Text>

        <TextInput
          style={styles.input}
          placeholder="Ej: Juan Pérez"
          value={driverData.fullName}
          onChangeText={(value) =>
            updateDriverData('fullName', value)
          }
          maxLength={50}
        />

        {/* Documento */}
        <Text style={styles.label}>Documento de identidad</Text>

        <TextInput
          style={styles.input}
          placeholder="Número de documento"
          value={driverData.document}
          onChangeText={(value) =>
            updateDriverData('document', value)
          }
          keyboardType="numeric"
          maxLength={10}
        />

        {/* Celular */}
        <Text style={styles.label}>Número de celular</Text>

        <TextInput
          style={styles.input}
          placeholder="Número de celular"
          value={driverData.phone}
          onChangeText={(value) =>
            updateDriverData('phone', value)
          }
          keyboardType="phone-pad"
          maxLength={10}
        />

        {/* Fecha de nacimiento */}
        <Text style={styles.label}>Fecha de nacimiento</Text>

        <TextInput
          style={styles.input}
          placeholder="DD/MM/AAAA"
          value={driverData.birthDate}
          onChangeText={(value) =>
            updateDriverData('birthDate', value)
          }
        />

        {/* Género */}
        <Text style={styles.label}>Género</Text>

        <TextInput
          style={styles.input}
          placeholder="Masculino / Femenino / Otro"
          value={driverData.gender}
          onChangeText={(value) =>
            updateDriverData('gender', value)
          }
        />

        {/* Correo electrónico */}
        <Text style={styles.label}>Correo electrónico</Text>

        <TextInput
          style={styles.input}
          placeholder="correo@ejemplo.com"
          value={driverData.email}
          onChangeText={(value) =>
            updateDriverData('email', value)
          }
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Idioma */}
        <Text style={styles.label}>Idioma</Text>

        <TextInput
          style={styles.input}
          placeholder="Español / Inglés"
          value={driverData.language}
          onChangeText={(value) =>
            updateDriverData('language', value)
          }
        />

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },

  form: {
    padding: 20,
    paddingBottom: 35,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#174D75',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    color: '#666666',
    marginBottom: 25,
  },

  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
    marginTop: 12,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D5DCE5',
    borderRadius: 10,
    padding: 13,
    fontSize: 15,
  },

});
