// /src/screens/planes/PlaningScreen.js
import React from "react";
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";

// Obtener dimensiones de la pantalla para estilos responsivos
const { width, height } = Dimensions.get('window');

// Función que muestra una alerta indicando que la función está en desarrollo
const mostrarAlerta = () => {
    Alert.alert("🚧 Función en desarrollo", "Esta función aún no está disponible.");
};

export default function PlaningScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Título principal y subtítulo */}
            <View>
                <Text style={styles.title}>Escoge tu plan y ponte serio…</Text>
                <Text style={styles.subtitle}>o sigue igual.</Text>
            </View>

            {/* Sección Plan Free */}
            <View style={{ backgroundColor: "#ffffff" }}>
                <TouchableOpacity 
                    style={styles.section} 
                    onPress={() => { navigation.replace('PlanFree') }}  // Navega a pantalla PlanFree
                >
                    {/* Contenedor imagen a la izquierda */}
                    <View style={styles.leftContainer}>
                        <Image 
                            source={require('../../../assets/Plan_free.png')} 
                            style={styles.imageStyle} 
                        />
                    </View>

                    {/* Contenedor texto a la derecha */}
                    <View style={styles.rightContainer}>
                        <Text style={[styles.title, { color: "#1E1E22" }]}>
                            ¿Pa’ qué gym? Si igual nadie te ve
                        </Text>
                        <Text style={[styles.subtitle, { color: "#1E1E22" }]}>
                            Empieza gratis y sin excusas, pero no prometemos milagros.
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* Sección Plan Básico */}
            <View style={{ backgroundColor: "#CE6363" }}>
                <TouchableOpacity 
                    style={styles.section} 
                    onPress={() => { navigation.replace('PlanBasico') }}  // Función no disponible muestra alerta
                >
                    {/* Texto a la izquierda */}
                    <View style={styles.rightContainer}>
                        <Text style={[styles.title, { color: "#1E1E22" }]}>
                            Perfecto pa’ que no te lleve el viento, flacow
                        </Text>
                        <Text style={[styles.subtitle, { color: "#1E1E22" }]}>
                            Sube de nivel y deja de ser invisible, mínimo para llenar la camiseta.
                        </Text>
                    </View>

                    {/* Imagen a la derecha */}
                    <View style={styles.leftContainer}>
                        <Image 
                            source={require('../../../assets/Plan_Basico.png')} 
                            style={styles.imageStyle} 
                        />
                    </View>
                </TouchableOpacity>
            </View>

            {/* Sección Plan Premium */}
            <View style={{ backgroundColor: "#841D1D" }}>
                <TouchableOpacity 
                    style={styles.section} 
                    onPress={() => { navigation.replace('PlanPremium') }}  // Función no disponible muestra alerta
                >
                    {/* Imagen a la izquierda */}
                    <View style={styles.leftContainer}>
                        <Image 
                            source={require('../../../assets/Plan_Premium.png')} 
                            style={styles.imageStyle} 
                        />
                    </View>

                    {/* Texto a la derecha */}
                    <View style={styles.rightContainer}>
                        <Text style={[styles.title, { color: "#ffffff" }]}>
                            Perfecto pa’ que no te lleve el viento, flacow
                        </Text>
                        <Text style={[styles.subtitle, { color: "#ffffff" }]}>
                            Sube de nivel y deja de ser invisible, mínimo para llenar la camiseta.
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

// Estilos del componente usando dimensiones para responsividad
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingTop: height * 0.08,  // Espacio superior proporcional
        paddingHorizontal: width * 0,  // Sin padding horizontal
        backgroundColor: "#ffffff"  // Fondo blanco
    },

    title: {
        fontSize: width * 0.055,  // Tamaño de fuente responsivo
        fontWeight: "bold",
        marginBottom: 0,
        textAlign: "center",
        color: "#E03B2E",  // Color rojo
    },

    subtitle: {
        fontSize: width * 0.033,  // Tamaño de fuente más pequeño
        fontWeight: "bold",
        marginTop: 5,
        marginBottom: height * 0.02,  // Margen inferior proporcional
        textAlign: "center",
        color: "#E03B2E",  // Color rojo
    },

    section: {
        width: '100%',
        minHeight: height * 0.3,  // Altura mínima para cada plan
        alignItems: 'center',
        flexDirection: 'row',  // Organiza elementos en fila
        justifyContent: 'space-between',  // Espacio entre imagen y texto
    },

    leftContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: width * 0.05,  // Espacio a la derecha para separar
    },

    rightContainer: {
        flex: 2,
        justifyContent: 'center',
        paddingRight: width * 0.02,  // Espacio a la derecha
    },

    imageStyle: {
        width: width * 0.4,  // Tamaño proporcional a pantalla
        height: width * 0.4,
        resizeMode: 'contain',  // Ajusta imagen manteniendo proporción
    },
});
