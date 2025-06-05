// /src/screens/planes/PlanFreeScreen.js
import React, { useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// Obtener ancho de pantalla para dimensionar imágenes proporcionalmente
const { width } = Dimensions.get('window');

export default function PlanFreeScreen() {
    // Hook para navegación entre pantallas
    const navigation = useNavigation();

    // Estado para controlar la vista actual (1 a 4)
    const [vista, setVista] = useState(1);

    // Estado para almacenar el historial de vistas para navegación atrás
    const [historial, setHistorial] = useState([1]);

    // Estado para controlar si el usuario acepta términos
    const [aceptaTerminos, setAceptaTerminos] = useState(false);

    // Función para cambiar a una vista específica
    // Actualiza el historial para permitir volver atrás correctamente
    const cambiarVista = (nuevaVista) => {
        setHistorial((h) => {
        // Verificar si la vista ya está en el historial
        const indiceExistente = h.lastIndexOf(nuevaVista);
        if (indiceExistente !== -1) {
            // Si existe, recortar historial para eliminar vistas posteriores
            const nuevoHistorial = h.slice(0, indiceExistente + 1);
            setVista(nuevaVista);
            return nuevoHistorial;
        } else {
            // Si no existe, agregar al historial y cambiar vista
            setVista(nuevaVista);
            return [...h, nuevaVista];
        }
        });
    };

    // Función para regresar a la vista anterior según historial
    const regresarVista = () => {
        setHistorial((h) => {
        if (h.length > 1) {
            // Quitar última vista del historial
            const nuevoHistorial = h.slice(0, h.length - 1);
            // Cambiar a la vista anterior
            setVista(nuevoHistorial[nuevoHistorial.length - 1]);
            return nuevoHistorial;
        }
        return h; // Si no hay historial, no hacer nada
        });
    };

    return (
        <View style={styles.container}>

        {/* Botón para regresar a la pantalla anterior o salir */}
        <View>
            <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
                if (vista === 1) {
                // Si estamos en la primera vista, salir a pantalla Planing
                navigation.replace('Planing');
                } else {
                // Si no, regresar a la vista anterior
                regresarVista();
                }
            }}
            >
            {/* Icono flecha atrás */}
            <Ionicons name="arrow-back" size={24} color="#E03B2E" />
            </TouchableOpacity>
        </View>

        {/* VISTA 1: Introducción al plan gratuito */}
        {vista === 1 && (
            <View style={styles.vista}>
            {/* Contenedor principal con imagen y texto lado a lado */}
            <View style={styles.introContainer}>
                <Image
                source={require('../../../assets/Plan_free.png')} // Ruta imagen plan gratis
                style={styles.introImage}
                />
                <View style={styles.introTextContainer}>
                {/* Título destacado */}
                <Text style={styles.headerTitle}>
                    ¿Pa’ qué pagar si puedes empezar gratis, flacow?
                </Text>

                {/* Texto descriptivo explicativo */}
                <Text style={styles.subtext}>
                    Aquí no hay excusas, ni pretextos. Son 30 días pa’ que por fin te decidas a moverte y dejes de decir “el lunes empiezo”.
                </Text>
                </View>
            </View>

            {/* Detalles del plan con formato negrita para título y normal para descripción */}
            <View style={styles.detailContainer}>
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

            {/* Botón para continuar a la siguiente vista */}
            <TouchableOpacity style={styles.boton} onPress={() => cambiarVista(2)}>
                <Text style={styles.textoBoton}>Continuar</Text>
            </TouchableOpacity>
            </View>
        )}

        {/* VISTA 2: Qué aprenderás en el plan */}
        {vista === 2 && (
            <View style={styles.vista}>
            {/* Título grande */}
            <Text style={styles.titulo}>¿Qué vas a aprender en estos 30 días?</Text>

            {/* Lista con títulos en negrita y texto descriptivo */}
            <View style={styles.detailContainer}>
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

            {/* Título para semana */}
            <Text style={[styles.titulo, { fontSize: 18, marginTop: 30 }]}>¿Cómo se ve la semana?</Text>

            {/* Desglose semanal de actividades */}
            <View style={styles.weekContainer}>
                <Text style={styles.regularItem}>– Lunes: Full body y tutor</Text>
                <Text style={styles.regularItem}>– Martes: Piernas, pa’ que no te quedes con palillos</Text>
                <Text style={styles.regularItem}>– Miércoles: HIIT, pa’ que sientas el poder</Text>
                <Text style={styles.regularItem}>– Jueves: Abdomen y estiramiento, pa’ que no te acalambres</Text>
                <Text style={styles.regularItem}>– Viernes: Glúteos y cardio, pa’ que te duela sentarte</Text>
                <Text style={styles.regularItem}>– Sábado: Cardio de descanso activo, según cómo amaneces</Text>
                <Text style={styles.regularItem}>– Domingo: Descanso, pero no te la pases echado todo el día</Text>
            </View>

            {/* Botón para ver calendario */}
            <TouchableOpacity style={styles.boton} onPress={() => cambiarVista(3)}>
                <Text style={styles.textoBoton}>Ver Calendario</Text>
            </TouchableOpacity>
            </View>
        )}

        {/* VISTA 3: Calendario y aceptación de términos */}
        {vista === 3 && (
            <View style={styles.vista}>
            {/* Título */}
            <Text style={styles.titulo}>Calendario</Text>

            {/* Mes visible */}
            <Text style={styles.monthText}>Junio 2025</Text>

            {/* Calendario en forma de tabla con días de la semana */}
            <View style={styles.calendarContainer}>
                <View style={styles.calendarRow}>
                <Text style={styles.calendarHeader}>SUN</Text>
                <Text style={styles.calendarHeader}>MON</Text>
                <Text style={styles.calendarHeader}>TUE</Text>
                <Text style={styles.calendarHeader}>WED</Text>
                <Text style={styles.calendarHeader}>THU</Text>
                <Text style={styles.calendarHeader}>FRI</Text>
                <Text style={styles.calendarHeader}>SAT</Text>
                </View>

                {/* Filas del calendario con números */}
                {[
                [29, 30, 1, 2, 3, 4, 5],
                [6, 7, 8, 9, 10, 11, 12],
                [13, 14, 15, 16, 17, 18, 19],
                [20, 21, 22, 23, 24, 25, 26],
                [27, 28, 29, 30, 1, 2, 3],
                ].map((week, i) => (
                <View key={i} style={styles.calendarRow}>
                    {week.map((day, j) => (
                    <Text key={j} style={styles.calendarDay}>{day}</Text>
                    ))}
                </View>
                ))}
            </View>

            {/* Checkbox para aceptar términos */}
            <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => setAceptaTerminos(!aceptaTerminos)}
            >
                {/* Cuadro del checkbox */}
                <View style={[styles.checkbox, aceptaTerminos && styles.checkboxChecked]}>
                {/* Mostrar check si está marcado */}
                {aceptaTerminos && <Ionicons name="checkmark" size={18} color="white" />}
                </View>

                {/* Texto al lado del checkbox */}
                <Text style={styles.checkboxLabel}>Acepto los términos y condiciones</Text>
            </TouchableOpacity>

            {/* Botón para confirmar solo habilitado si acepta términos */}
            <TouchableOpacity
                style={[styles.boton, !aceptaTerminos && styles.botonDisabled]}
                disabled={!aceptaTerminos}
                onPress={() => cambiarVista(4)}
            >
                <Text style={styles.textoBoton}>Confirmar</Text>
            </TouchableOpacity>
            </View>
        )}

        {/* VISTA 4: Confirmación final */}
        {vista === 4 && (
            <View style={styles.vista}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                {/* Logo free */}
                <Image
                    source={require('../../../assets/Plan_free.png')}
                    style={{
                    width: width * 0.25,     // 25% del ancho de pantalla
                    height: width * 0.25,    // cuadrada y responsiva
                    marginRight: 12,
                    resizeMode: 'contain',
                    }}
                />
                {/* Icono de éxito */}
                <Ionicons name="checkmark-circle" size={60} color="#E03B2E" style={{ marginBottom: 20 }} />
                </View>
            
            

            {/* Título */}
            <Text style={styles.titulo}>¡Listo!</Text>

            {/* Mensaje */}
            <Text style={styles.regularItem}>Ya estás registrado en el plan gratuito. Ahora solo falta que empieces y lo des todo.</Text>

            {/* Botón para ir al inicio */}
            <TouchableOpacity style={styles.boton} onPress={() => navigation.replace('Maintabs')}>
                <Text style={styles.textoBoton}>Empecemos</Text>
            </TouchableOpacity>
            </View>
        )}

        </View>
    );
    }

    // Estilos organizados para toda la pantalla
    const styles = StyleSheet.create({
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
