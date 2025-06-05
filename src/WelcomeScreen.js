// /src/WelcomeScreen.js

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// Componente de pantalla de bienvenida
const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Imagen principal del logo o ícono */}
      <Image source={require('../assets/Icono.png')} style={styles.imageStyle} />

      {/* Botón para comenzar y navegar a la pantalla de Login */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('Login')}  // Reemplaza la pantalla actual por Login
      >
        <Text style={styles.buttonText}>Empezar</Text>
      </TouchableOpacity>

      {/* Barra de estado (hora, batería, etc) con estilo automático */}
      <StatusBar style="auto" />
    </View>
  );
};

export default WelcomeScreen;

// Estilos para el componente
const styles = StyleSheet.create({
  container: {
    flex: 1,  // Ocupa toda la pantalla
    backgroundColor: '#fff',  // Fondo blanco
    alignItems: 'center',  // Centra horizontalmente
    justifyContent: 'center',  // Centra verticalmente
  },
  imageStyle: {
    width: 300,  // Ancho fijo para la imagen
    height: 300,  // Alto fijo para la imagen
    resizeMode: 'contain',  // Ajusta la imagen manteniendo proporción
  },
  button: {
    backgroundColor: '#E03B2E',  // Color rojo para el botón
    paddingVertical: 10,  // Espacio vertical dentro del botón
    paddingHorizontal: 105,  // Espacio horizontal dentro del botón
    borderRadius: 16,  // Bordes redondeados
    marginTop: 40,  // Margen superior para separar de la imagen
  },
  buttonText: {
    color: '#fff',  // Texto blanco
    fontSize: 18,  // Tamaño de fuente
  },
});
