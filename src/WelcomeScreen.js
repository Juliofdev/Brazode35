// /src/WelcomeScreen.js

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Icono.png')} style={styles.imageStyle} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('Login')}
      ><Text style={styles.buttonText}>Empezar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#E03B2E',
    paddingVertical: 10,
    paddingHorizontal: 105,
    borderRadius: 16,
    marginTop: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
