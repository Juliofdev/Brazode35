import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Dimensions, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const PlanPremiumScreen = () => {
    const navigation = useNavigation();
    const [vista, setVista] = useState(1);
    const [aceptaTerminos, setAceptaTerminos] = useState(false);

    const handleNext = () => {
        if (vista < 4) setVista(vista + 1);
    };

    const handleBack = () => {
        if (vista > 1) setVista(vista - 1);
        else navigation.goBack();
    };

    const toggleAceptaTerminos = () => {
        setAceptaTerminos(!aceptaTerminos);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Planing')} style={styles.backButton}>
                <Ionicons name="arrow-back" size={28} color="#E03B2E" />
            </TouchableOpacity>

            <View style={styles.vista}>
                {vista === 1 && (
                    <><ScrollView>
                        <View style={styles.introContainer}>
                            <Image
                                source={require('../../../assets/Plan_Premium.png')}
                                style={styles.introImage}
                            />
                            <View style={styles.introTextContainer}>
                                <Text style={styles.headerTitle}>¿Quieres que te digan “¡Ese brazo no es natural, bro!”?</Text>
                                <Text style={styles.subtext}>
                                    Este plan es solo para los que vienen a romperla y quieren que  hasta la camiseta tiemble cuando se la ponen. Aquí no hay espacio para  flojos: son 30 días de pura intensidad, enfoque y resultados que se  notan.
                                </Text>
                            </View>
                        </View>
                        <Text style={styles.titulo}>¿Qué trae este plan?</Text>
                        <View style={styles.detailContainer}>
                            <Text style={styles.boldItem}>Rutinas avanzadas de alta intensidad:</Text>
                            <Text style={styles.regularItem}>Ejercicios diseñados para máxima hipertrofia y fuerza en bíceps,  tríceps, antebrazo y hombro, con técnicas avanzadas como superseries,  dropsets y repeticiones negativas.</Text>
                            <Text style={styles.boldItem}>Combinación de ejercicios con peso corporal y mancuernas:</Text>
                            <Text style={styles.regularItem}>Puedes hacer la rutina en casa o en el gym, pero si tienes mancuernas, bandas o barra, aquí las vas a exprimir al máximo.</Text>
                            <Text style={styles.boldItem}>Consejos de nutrición para volumen:</Text>
                            <Text style={styles.regularItem}>Guía detallada para comer como se debe: proteína, carbohidratos, grasas  buenas y suplementación básica, todo explicado sin enredos.</Text>
                            <Text style={styles.boldItem}>Seguimiento avanzado del progreso:</Text>
                            <Text style={styles.regularItem}>Gráficas, estadísticas y retos semanales para que veas cómo tu brazo crece y tu fuerza se dispara.</Text>
                            <Text style={styles.boldItem}>Recuperación y prevención de lesiones:</Text>
                            <Text style={styles.regularItem}>Rutinas de estiramiento, movilidad y descanso activo para que el músculo crezca sin riesgos.</Text>
                            <Text style={styles.boldItem}>Motivación premium:</Text>
                            <Text style={styles.regularItem}>Mensajes diarios, retos exclusivos y frases que te van a picar el orgullo si te quieres rajar.</Text>
                        </View>
                        </ScrollView>
                    </>
                )}

                {vista === 2 && (
                    <>
                        <Text style={styles.titulo}>¿Qué vas a aprender en estos 30 días?</Text>
                        <View style={styles.detailContainer}>
                            <Text style={styles.boldItem}>📅 Técnicas avanzadas de entrenamiento para brazos:</Text>
                            <Text style={styles.regularItem}>superseries, repeticiones forzadas, tempos y más.</Text>
                            <Text style={styles.boldItem}>📅 Alimentarte con la mas alta calidad:</Text>
                            <Text style={styles.regularItem}>La importancia de la alimentación y el descanso en el crecimiento muscular.</Text>
                            <Text style={styles.boldItem}>📅 Combinar fuerza y cardio:</Text>
                            <Text style={styles.regularItem}>Cómo combinar fuerza, volumen y definición para que el brazo se vea grande y marcado.</Text>
                            <Text style={styles.boldItem}>📅 Ser un 10 de 10:</Text>
                            <Text style={styles.regularItem}>Cómo medir tu progreso real y ajustar la rutina para seguir subiendo de nivel.</Text>
                            <Text style={styles.boldItem}>📅 Mentalidad de disciplina:</Text>
                            <Text style={styles.regularItem}>aquí no hay espacio para excusas.</Text>
                        </View>
                    </>
                )}

                {vista === 3 && (
                    <>
                        <Text style={styles.titulo}>Beneficios de ser Premium</Text>
                        <View style={styles.detailContainer}>
                            <Text style={styles.boldItem}>✅ Acceso a contenido exclusivo</Text>
                            <Text style={styles.regularItem}>Videos explicativos, rutinas secretas y consejos de recuperación.</Text>
                            <Text style={styles.boldItem}>✅ Soporte personalizado</Text>
                            <Text style={styles.regularItem}>Resuelve tus dudas con nuestro equipo de expertos.</Text>
                            <Text style={styles.boldItem}>✅ Sin anuncios ni interrupciones</Text>
                            <Text style={styles.regularItem}>Enfócate solo en entrenar. Nosotros nos encargamos del resto.</Text>
                        </View>
                    </>
                )}

                {vista === 4 && (
                    <>
                        <Text style={styles.titulo}>Activar Plan Premium</Text>
                        <View style={styles.detailContainer}>
                            <Text style={styles.subtext}>
                                Para continuar, debes aceptar los términos y condiciones de uso del servicio. Esto incluye información sobre tu compromiso de entrenamiento y el uso responsable del contenido premium.
                            </Text>
                            <TouchableOpacity style={styles.checkboxContainer} onPress={toggleAceptaTerminos}>
                                <View style={[styles.checkbox, aceptaTerminos && styles.checkboxChecked]}>
                                    {aceptaTerminos && <Ionicons name="checkmark" size={18} color="white" />}
                                </View>
                                <Text style={styles.checkboxLabel}>Acepto los términos y condiciones</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.boton, !aceptaTerminos && styles.botonDisabled]}
                                disabled={!aceptaTerminos}
                                onPress={() => navigation.replace('Maintabs')}
                            >
                                <Text style={styles.textoBoton}>Activar Ahora</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}

                {vista < 4 && (
                    <TouchableOpacity style={styles.boton} onPress={handleNext}>
                        <Text style={styles.textoBoton}>Siguiente</Text>
                    </TouchableOpacity>
                )}
            </View>
        </ScrollView>
    );
};

export default PlanPremiumScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    backButton: {
        marginBottom: 20,
        padding: 10,
        alignSelf: 'flex-start',
    },
    vista: {
        flex: 1,
    },
    introContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25,
    },
    introImage: {
        width: width * 0.25,
        height: width * 0.25,
        marginRight: 15,
        resizeMode: 'contain',
    },
    introTextContainer: {
        flex: 1,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#222',
    },
    subtext: {
        fontSize: 15,
        color: '#555',
        lineHeight: 22,
    },
    detailContainer: {
        alignSelf: 'stretch',
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
    boton: {
        marginTop: 15,
        backgroundColor: '#E03B2E',
        paddingVertical: 13,
        borderRadius: 8,
        alignItems: 'center',
    },
    botonDisabled: {
        backgroundColor: '#ccc',
    },
    textoBoton: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
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
