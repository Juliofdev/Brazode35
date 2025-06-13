// /src/screens/planes/PlanBasicoScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function PlanBasicoScreen() {
    const navigation = useNavigation();
    const [vista, setVista] = useState(1);
    const [historial, setHistorial] = useState([1]);
    const [aceptaTerminos, setAceptaTerminos] = useState(false);

    const cambiarVista = (nuevaVista) => {
        setHistorial((h) => {
            const indiceExistente = h.lastIndexOf(nuevaVista);
            if (indiceExistente !== -1) {
                const nuevoHistorial = h.slice(0, indiceExistente + 1);
                setVista(nuevaVista);
                return nuevoHistorial;
            } else {
                setVista(nuevaVista);
                return [...h, nuevaVista];
            }
        });
    };

    const regresarVista = () => {
        setHistorial((h) => {
            if (h.length > 1) {
                const nuevoHistorial = h.slice(0, h.length - 1);
                setVista(nuevoHistorial[nuevoHistorial.length - 1]);
                return nuevoHistorial;
            }
            return h;
        });
    };

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => {
                        if (vista === 1) {
                            navigation.replace('Planing');
                        } else {
                            regresarVista();
                        }
                    }}
                >
                    <Ionicons name="arrow-back" size={24} color="#E03B2E" />
                </TouchableOpacity>
            </View>

            {/* VISTA 1: Presentación del Plan Básico */}
            {vista === 1 && (
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.vista}>
                        <View style={styles.introContainer}>
                            <Image
                                source={require('../../../assets/Plan_Basico.png')}
                                style={styles.introImage}
                            />
                            <View style={styles.introTextContainer}>
                                <Text style={styles.headerTitle}>
                                    Dale un paso más, flacow.
                                </Text>
                                <Text style={styles.subtext}>
                                    Este es el Plan Básico. Ideal pa’ cuando ya te tomaste en serio el cuento y quieres mejorar con guía.
                                </Text>
                            </View>
                        </View>

                        <View style={styles.detailContainer}>
                            <Text style={styles.boldItem}>– Plan guiado de 60 días:</Text>
                            <Text style={styles.regularItem}>Aquí no improvisamos. Todo estructurado pa’ que avances parejo.</Text>

                            <Text style={styles.boldItem}>– Acceso a videos completos:</Text>
                            <Text style={styles.regularItem}>Explicaciones paso a paso, sin cortes ni dudas.</Text>

                            <Text style={styles.boldItem}>– Recomendaciones de alimentación:</Text>
                            <Text style={styles.regularItem}>Más completas, pa’ que combines con tu entrenamiento.</Text>

                            <Text style={styles.boldItem}>– Soporte por chat:</Text>
                            <Text style={styles.regularItem}>¿Dudas? Te respondo. No estás solo en esto.</Text>
                        </View>

                        <TouchableOpacity style={styles.boton} onPress={() => cambiarVista(2)}>
                            <Text style={styles.textoBoton}>Continuar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            )}

            {/* VISTA 2: Qué aprenderás */}
            {vista === 2 && (
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.vista}>
                        <Text style={styles.titulo}>¿Qué incluye este plan?</Text>

                        <View style={styles.detailContainer}>
                            <Text style={styles.boldItem}>– Técnicas de respiración y control:</Text>
                            <Text style={styles.regularItem}>Porque entrenar no es solo moverse, también es saber controlar.</Text>

                            <Text style={styles.boldItem}>– Mejora progresiva de fuerza:</Text>
                            <Text style={styles.regularItem}>Ejercicios que se van haciendo más pro, paso a paso.</Text>

                            <Text style={styles.boldItem}>– Más movilidad y flexibilidad:</Text>
                            <Text style={styles.regularItem}>No solo es fuerza, bro. También moverse bien es importante.</Text>

                            <Text style={styles.boldItem}>– Tips semanales de motivación:</Text>
                            <Text style={styles.regularItem}>Para que no te rindas cuando el ánimo baje.</Text>
                        </View>

                        <TouchableOpacity style={styles.boton} onPress={() => cambiarVista(3)}>
                            <Text style={styles.textoBoton}>Ver Calendario</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            )}

            {/* VISTA 3: Calendario y términos */}
            {vista === 3 && (
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.vista}>
                        <Text style={styles.titulo}>Calendario</Text>
                        <Text style={styles.monthText}>Junio - Julio 2025</Text>

                        <View style={styles.calendarContainer}>
                            <View style={styles.calendarRow}>
                                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((d, i) => (
                                    <Text key={i} style={styles.calendarHeader}>{d}</Text>
                                ))}
                            </View>
                            {[...Array(5)].map((_, i) => (
                                <View key={i} style={styles.calendarRow}>
                                    {[...Array(7)].map((_, j) => (
                                        <Text key={j} style={styles.calendarDay}>{(i * 7 + j + 1) % 31}</Text>
                                    ))}
                                </View>
                            ))}
                        </View>

                        <TouchableOpacity
                            style={styles.checkboxContainer}
                            onPress={() => setAceptaTerminos(!aceptaTerminos)}
                        >
                            <View style={[styles.checkbox, aceptaTerminos && styles.checkboxChecked]}>
                                {aceptaTerminos && <Ionicons name="checkmark" size={18} color="white" />}
                            </View>
                            <Text style={styles.checkboxLabel}>Acepto los términos y condiciones</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.boton, !aceptaTerminos && styles.botonDisabled]}
                            disabled={!aceptaTerminos}
                            onPress={() => cambiarVista(4)}
                        >
                            <Text style={styles.textoBoton}>Confirmar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            )}

            {/* VISTA 4: Confirmación */}
            {vista === 4 && (
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.vista}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                            <Image
                                source={require('../../../assets/Plan_Basico.png')}
                                style={{ width: width * 0.25, height: width * 0.25, marginRight: 12, resizeMode: 'contain' }}
                            />
                            <Ionicons name="checkmark-circle" size={60} color="#E03B2E" />
                        </View>
                        <Text style={styles.titulo}>¡Estás dentro!</Text>
                        <Text style={styles.regularItem}>Bienvenido al Plan Básico. Aquí es donde empiezas a ponerte serio.</Text>
                        <TouchableOpacity style={styles.boton} onPress={() => navigation.replace('Maintabs')}>
                            <Text style={styles.textoBoton}>Empezar ahora</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
        // Estilos organizados para toda la pantalla

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white', // Fondo blanco para limpieza visual
    },
    backButton: {
        marginBottom: 20,
        padding: 10,
        alignSelf: 'flex-start', // Alinea el botón a la izquierda
    },
    vista: {
        flex: 1, // Ocupa todo el espacio disponible
    },
    introContainer: {
        flexDirection: 'row', // Imagen y texto en fila
        alignItems: 'center', // Centrar verticalmente
        marginBottom: 25,
    },
    introImage: {
        width: width * 0.25, // 25% del ancho pantalla
        height: width * 0.25, // mismo alto que ancho para imagen cuadrada
        marginRight: 15, // espacio entre imagen y texto
        resizeMode: 'contain', // la imagen se ajusta sin deformarse
    },
    introTextContainer: {
        flex: 1, // Ocupa todo el espacio restante
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#222', // color oscuro para buen contraste
    },
    subtext: {
        fontSize: 15,
        color: '#555', // gris oscuro para texto menos intenso
        lineHeight: 22, // altura de línea para mejor lectura
    },
    detailContainer: {
        alignSelf: 'stretch', // ocupa todo el ancho
        marginBottom: 30,
    },
    boldItem: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 12,
        color: '#333',
    },
    regularItem: {
        fontSize: 14,
        marginLeft: 12,
        marginTop: 5,
        color: '#444',
        lineHeight: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 18,
        color: '#222',
    },
    weekContainer: {
        marginTop: 15,
    },
    boton: {
        marginTop: 15,
        backgroundColor: '#E03B2E', // color rojo principal
        paddingVertical: 13,
        borderRadius: 8,
        alignItems: 'center',
    },
    botonDisabled: {
        backgroundColor: '#ccc', // gris para botón deshabilitado
    },
    textoBoton: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    calendarContainer: {
        marginTop: 10,
    },
    calendarRow: {
        flexDirection: 'row',
        justifyContent: 'space-around', // distribuir espacios igual entre días
        marginVertical: 2,
    },
    calendarHeader: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#E03B2E', // rojo para encabezados
    },
    calendarDay: {
        flex: 1,
        textAlign: 'center',
        color: '#555',
        paddingVertical: 6,
    },
    monthText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#555',
        marginBottom: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25,
    },
    checkbox: {
        width: 25,
        height: 25,
        borderWidth: 2,
        borderColor: '#E03B2E',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    checkboxChecked: {
        backgroundColor: '#E03B2E',
    },
    checkboxLabel: {
        fontSize: 14,
        color: '#333',
    },
});
