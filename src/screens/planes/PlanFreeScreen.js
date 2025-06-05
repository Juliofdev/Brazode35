//screens/PlanFreeScreen.js
import React, { useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');



export default function PlanFreeScreen(){
    const navigation = useNavigation();
    const [vista, setVista] = useState(1);
    const [historial, setHistorial] = useState([1]);
    const [aceptaTerminos, setAceptaTerminos] = useState(false);


    const cambiarVista = (nuevaVista) => {
    setHistorial((h) => {
        const indiceExistente = h.lastIndexOf(nuevaVista);
        if (indiceExistente !== -1) {
        // La vista ya está en el historial: recortamos hasta ahí
        const nuevoHistorial = h.slice(0, indiceExistente + 1);
        setVista(nuevaVista);
        return nuevoHistorial;
        } else {
        // No está en el historial, agregamos al final
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


    return(
        <View style={styles.container}>
            {/* Flecha para regresar a Welcome */}
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
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            </View>
            
            {/* Vista inicial */}
            {vista === 1 && (
            <View style={styles.vista}>
                {/* Icono + título */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                    <Image
                        source={require('../../../assets/Plan_free.png')}
                        style={{
                        width: width * 0.25,     // 25% del ancho de pantalla
                        height: width * 0.25,    // cuadrada y responsiva
                        marginRight: 12,
                        resizeMode: 'contain',
                        }}
                    />
                <View style={{ flex: 1 }}>
                    <Text style={styles.headerTitle}>
                    ¿Pa’ qué pagar si puedes empezar gratis, flacow?
                    </Text>
                    <Text style={styles.subtext}>
                    Aquí no hay excusas, ni pretextos. Son 30 días pa’ que por fin te decidas a moverte y dejes de decir “el lunes empiezo”.
                    </Text>
                </View>
                </View>

                {/* Contenido del plan */}
                <View style={{ alignSelf: 'flex-start' }}>
                <Text style={styles.boldItem}>– Rutina diaria de 30 días:</Text>
                <Text style={styles.regularItem}>No hay pierde, cada día te digo qué hacer. Si te pierdes, es porque quieres.</Text>

                <Text style={styles.boldItem}>– Ejercicios sin equipo:</Text>
                <Text style={styles.regularItem}>Ni mancuernas, ni bandas, ni nada. Solo tú, tu flojera y el piso de tu casa.</Text>

                <Text style={styles.boldItem}>– Videos cortos y claros:</Text>
                <Text style={styles.regularItem}>No te voy a dejar solo, bro. Te muestro cómo se hace cada ejercicio pa’ que no termines haciendo cualquier cosa rara.</Text>

                <Text style={styles.boldItem}>– Seguimiento de progreso:</Text>
                <Text style={styles.regularItem}>Marca tu día, presume tu avance y si no avanzas, mínimo te ríes de ti mismo.</Text>

                <Text style={styles.boldItem}>– Tips de comida:</Text>
                <Text style={styles.regularItem}>Nada de dietas imposibles. Te tiro la dieta básica pa’ que no te sabotees con pura chatarra.</Text>

                <Text style={styles.boldItem}>– Motivación diaria:</Text>
                <Text style={styles.regularItem}>Un jalón de orejas todos los días, porque sé que te gusta aflojar.</Text>
                </View>

                {/* Botón continuar */}
                <TouchableOpacity style={styles.boton} onPress={() => cambiarVista(2)}>
                <Text style={styles.textoBoton}>Continuar</Text>
                </TouchableOpacity>
            </View>
            )}


            {/* Descripcion de aprendisaje*/}
            {vista === 2 && (
            <View style={styles.vista}>
                <Text style={styles.titulo}>¿Qué vas a aprender en estos 30 días?</Text>

                <View style={{ alignSelf: 'flex-start' }}>
                <Text style={styles.boldItem}>– Hacer bien los básicos:</Text>
                <Text style={styles.regularItem}>Pa’ que lo esencial no te parezca que te va a caer y te lagartijees solo en el colapso.</Text>

                <Text style={styles.boldItem}>– Calentar y estirar:</Text>
                <Text style={styles.regularItem}>No quiero que te lesiones y digas que fue por mi culpa.</Text>

                <Text style={styles.boldItem}>– Combinar fuerza y cardio:</Text>
                <Text style={styles.regularItem}>Pa’ que no solo sudes, sino que también se note el cambio (aunque sea un poquito).</Text>

                <Text style={styles.boldItem}>– Ser constante, bro:</Text>
                <Text style={styles.regularItem}>Aquí el truco es no rendirse al tercer día. Si llegas al 30, ya eres otro nivel.</Text>

                <Text style={styles.boldItem}>– Escuchar tu cuerpo:</Text>
                <Text style={styles.regularItem}>Si te duele, descansa. Si no, ¡dale con todo!</Text>
                </View>

                <Text style={[styles.titulo, { fontSize: 18, marginTop: 20 }]}>¿Cómo se ve la semana?</Text>
                <View style={{ alignSelf: 'flex-start' }}>
                <Text style={styles.regularItem}>– Lunes: Full body y tutor</Text>
                <Text style={styles.regularItem}>– Martes: Piernas, pa’ que no te quedes con palillos</Text>
                <Text style={styles.regularItem}>– Miércoles: HIIT, pa’ que sientas el poder</Text>
                <Text style={styles.regularItem}>– Jueves: Abdomen y estiramiento, pa’ que no te acalambres</Text>
                <Text style={styles.regularItem}>– Viernes: Glúteos y cardio, pa’ que te duela sentarte</Text>
                <Text style={styles.regularItem}>– Sábado: Cardio de descanso activo, según cómo amaneces</Text>
                <Text style={styles.regularItem}>– Domingo: Descanso, pero no te la pases echado todo el día</Text>
                </View>

                <TouchableOpacity style={styles.boton} onPress={() => cambiarVista(3)}>
                <Text style={styles.textoBoton}>Ver Calendario</Text>
                </TouchableOpacity>
            </View>
            )}


            {/* Calendario*/}
            {vista === 3 && (
            <View style={styles.vista}>
                <Text style={styles.titulo}>Calendario</Text>
                <Text style={{ fontSize: 16, marginBottom: 10 }}>Junio 2025</Text>

                {/* Tabla simple simulando el calendario */}
                <View style={{ marginBottom: 20 }}>
                <Text style={styles.regularItem}>SUN  MON  TUE  WED  THU  FRI  SAT</Text>
                <Text style={styles.regularItem}>29    30     1     2     3     4     5</Text>
                <Text style={styles.regularItem}>6     7     8     9    10    11   12</Text>
                <Text style={styles.regularItem}>13   14    15    16   17    18   19</Text>
                <Text style={styles.regularItem}>20   21    22    23   24    25   26</Text>
                <Text style={styles.regularItem}>27   28    29    30</Text>
                </View>

                <Text style={styles.subtext}>
                ¿Listo o vas a seguir viendo memes?
                </Text>
                <Text style={styles.regularItem}>
                Con este plan, mínimo te vas a reír, sudar y sentir que ya no eres el mismo flacow de siempre. ¡Dale, que es gratis!
                </Text>

                {/* Checkbox */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                <TouchableOpacity
                onPress={() => setAceptaTerminos(!aceptaTerminos)}
                style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}
                >
                <Ionicons
                    name={aceptaTerminos ? "checkbox" : "square-outline"}
                    size={24}
                    color={aceptaTerminos ? "#E03B2E" : "#aaa"}
                />
                <Text style={{ marginLeft: 8, color: aceptaTerminos ? "#000" : "#666" }}>
                    Acepto términos y condiciones
                </Text>
                </TouchableOpacity>
                </View>

                <TouchableOpacity
                style={[
                    styles.boton,
                    { opacity: aceptaTerminos ? 1 : 0.5 }
                ]}
                onPress={() => {
                    if (aceptaTerminos) {
                    cambiarVista(4);
                    }
                }}
                disabled={!aceptaTerminos}
                >
                <Text style={styles.textoBoton}>Firmar</Text>
                </TouchableOpacity>

            </View>
            )}


            {/* Registro completado al plan*/}
            {vista === 4 && (
            <View style={styles.vista}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                <Image
                    source={require('../../../assets/Plan_free.png')}
                    style={{
                    width: width * 0.25,     // 25% del ancho de pantalla
                    height: width * 0.25,    // cuadrada y responsiva
                    marginRight: 12,
                    resizeMode: 'contain',
                    }}
                />
                <Ionicons name="checkmark-circle-outline" size={width * 0.2} color="#E03B2E" />
                </View>

                <Text style={styles.titulo}>Te acabas de registrar en el Plan Free.</Text>

                <Text style={styles.subtext}>
                Prepárate pa’ sudar, que aquí el único que se queda quietito es el que no hace nada.
                {'\n\n'}
                ¡Gracias por unirte! Ahora sí, a ver si aguantas los 30 días... ¡no te rajes antes!
                </Text>

                <TouchableOpacity style={styles.boton} onPress={() => cambiarVista(1)}>
                <Text style={styles.textoBoton}>Continuar</Text>
                </TouchableOpacity>
            </View>
            )}

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
    vista: {
        alignItems: 'center'
    },
    titulo: {
        fontSize: 24,
        marginBottom: 20
    },
    boton: {
        backgroundColor: '#E03B2E',
        padding: 12,
        marginVertical: 8,
        borderRadius: 16,
        width: 180,
        alignItems: 'center'
    },
    textoBoton: {
        color: 'white',
        fontSize: 16
    },

    headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    },

    subtext: {
    fontSize: 14,
    color: '#333',
    },

    boldItem: {
    fontWeight: 'bold',
    marginTop: 10,
    },

    regularItem: {
    fontSize: 14,
    marginBottom: 6,
    color: '#444',
    },

})