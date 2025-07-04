// /src/screens/auth/LoginScreen.js

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons'; // Íconos para la UI
import AsyncStorage from '@react-native-async-storage/async-storage';


// Función para alertar funciones no disponibles
const mostrarAlerta = () => {
    Alert.alert("🚧 Función en desarrollo", "Estamos trabajando para traerla lo antes posible.");
};

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>

            {/* Flecha para regresar a Welcome */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Welcome')}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            {/* Título */}
            <Text style={styles.title}>Iniciar Sesión</Text>

            {/* Input email */}
            <TextInput
                style={styles.input}
                placeholder="Introduce tu correo"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            {/* Input clave */}
            <TextInput
                style={styles.input}
                placeholder="Introduce tu clave"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                autoCapitalize="none"
            />

            {/* Botón continuar */}
            <TouchableOpacity
                style={styles.button}
                onPress={async () => {
                    if (!email || !password) {
                        alert("Por favor completa todos los campos");
                        return;
                    }

                    try {
                        const response = await fetch("https://emcservices.tech/login.php", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ email, password }),
                        });

                        const data = await response.json();
                        if (data.success) {
                            await AsyncStorage.setItem('usuario', JSON.stringify(data.user));
                            alert("Bienvenido " + data.user.nombre);
                            navigation.replace("Planing"); // Redirige a pantalla principal
                        } else {
                            alert(data.message);
                        }
                    } catch (error) {
                        console.error(error);
                        alert("No se pudo conectar al servidor.");
                    }
                }}
            >
                <Text style={styles.buttonText}>Continuar</Text>
            </TouchableOpacity>

            {/* Botón para ir a Register */}
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.registerText}>¿Aún no tienes cuenta? Crear Cuenta</Text>
            </TouchableOpacity>

            {/* Contenedor de iconos sociales */}
            <View style={styles.socialIconsContainer}>
                <TouchableOpacity style={styles.iconButton} onPress={mostrarAlerta}>
                    <AntDesign name="google" size={24} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconButton} onPress={mostrarAlerta}>
                    <AntDesign name="apple1" size={24} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconButton} onPress={mostrarAlerta}>
                    <FontAwesome name="facebook" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

        </View>
    );
}

// Estilos del componente
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 60,
        backgroundColor: 'white',
    },
    backButton: {
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: '#E03B2E',
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#E03B2E',
        padding: 15,
        borderRadius: 16,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    registerText: {
        color: "#007bff",
        fontSize: 16,
        textAlign: "center",
        marginTop: 15,
        textDecorationLine: "underline",
    },
    socialIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    iconButton: {
        backgroundColor: '#E03B2E',
        padding: 12,
        borderRadius: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
});
