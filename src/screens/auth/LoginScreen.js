// /src/screens/auth/LoginScreen.js
// ip local 192.168.18.35
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons,AntDesign, FontAwesome } from '@expo/vector-icons';



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
                const response = await fetch("http://192.168.18.35/brazode35_api/login.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
                });

                const data = await response.json();
                if (data.success) {
                alert("Bienvenido " + data.user.nombre);
                navigation.replace("Planing"); // redirige a tu pantalla principal
                } else {
                alert(data.message);
                }
            } catch (error) {
                console.error(error);
                alert("No se pudo conectar al servidor.");
            }
            }}

        ><Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>

        {/* Texto Lorem Ipsum */}
        <Text style={styles.lorem}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            facilisis ultricies sem, et ultrices erat convallis non. Nulla facilisi.
        </Text>

        {/* Botón para ir a Register */}
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Flacow ¿Aun no tienes cuenta? Crear Cuenta</Text>
        </TouchableOpacity>

        {/* Contenedor de iconos sociales */}
        <View style={styles.socialIconsContainer}>
        <TouchableOpacity style={styles.iconButton}>
            <AntDesign name="google" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
            <AntDesign name="apple1" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="facebook" size={24} color="#fff" />
        </TouchableOpacity>
        </View>

        </View>
    );
    }

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
    lorem: {
        fontSize: 14,
        color: "#555",
        lineHeight: 20,
        marginBottom: 20,
    },
    registerText: {
        color: "#007bff",
        fontSize: 16,
        textAlign: "center",
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
