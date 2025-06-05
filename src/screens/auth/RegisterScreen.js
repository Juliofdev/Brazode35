// screens/RegisterScreen.js
// ip local 192.168.18.35
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

export default function RegisterScreen({ navigation }) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async () => {
    if (!fullName || !email || !password || !confirmPassword) {
        alert("Por favor completa todos los campos.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    try {
        const response = await fetch("http://192.168.18.35/brazode35_api/register.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nombre: fullName,
            email: email,
            password: password,
            sexo: "otro",
            nivel_fisico: null,
            altura: null,
            peso: null,
        }),
        });

        const text = await response.text();
        console.log("Respuesta cruda:", text);

        let data;
        try {
        data = JSON.parse(text);
        } catch (e) {
        alert("Error: la respuesta del servidor no es JSON válido.");
        return;
        }

        if (data.success) {
        alert("Registro exitoso");
        navigation.replace("Login");
        } else {
        if (data.message === "El correo electrónico ya está registrado") {
            alert("Este correo ya está en uso. Por favor intenta con otro o inicia sesión.");
        } else {
            alert(data.message || "Error desconocido del servidor");
        }
        }
    } catch (error) {
        console.error(error);
        alert("Error al conectar con el servidor.");
    }
    };




    return (
        <View style={styles.container}>

        {/* Flecha para regresar */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        {/* Título */}
        <Text style={styles.title}>Registro</Text>

        {/* Input Nombre */}
        <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            value={fullName}
            onChangeText={setFullName}
        />

        {/* Input Email */}
        <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
        />

        {/* Input Clave */}
        <TextInput
            style={styles.input}
            placeholder="Clave"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
        />

        {/* Input Confirmar Clave */}
        <TextInput
            style={styles.input}
            placeholder="Confirmar clave"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
        />

        {/* Botón continuar */}
        <TouchableOpacity
            style={styles.button}
            onPress={handleRegister}
        >
            <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>

        {/* Texto Lorem Ipsum */}
        <Text style={styles.lorem}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            facilisis ultricies sem, et ultrices erat convallis non. Nulla facilisi.
        </Text>

        {/* Texto para ir a Login */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>¿Ya tienes cuenta? Inicia sesión aquí</Text>
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
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 30,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#E03B2E',
        paddingVertical: 15,
        borderRadius: 16,
        alignItems: "center",
        marginBottom: 30,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "600",
    },
    lorem: {
        fontSize: 14,
        color: "#555",
        lineHeight: 20,
        marginBottom: 20,
        textAlign: "center",
    },
    loginText: {
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
