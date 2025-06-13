import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const ProgressDetailScreen = () => {
const navigation = useNavigation();
const route = useRoute();
const { id } = route.params;

// Ejemplo estático, puedes reemplazar con datos reales
const programName = "Entrenamiento de pecho";
const totalExercises = 12;
const completed = 5;

const exercises = [
    { id: "1", name: "Flexiones", done: true },
    { id: "2", name: "Press con mancuernas", done: true },
    { id: "3", name: "Fondos en paralelas", done: true },
    { id: "4", name: "Aperturas", done: false },
    { id: "5", name: "Push-up declinado", done: false },
    // ...agrega más según el programa
];

    return (
        <ScrollView style={styles.container}>
        <Text style={styles.title}>{programName}</Text>
        <Text style={styles.subtitle}>
            {completed} / {totalExercises} ejercicios completados
        </Text>

        <View style={styles.exerciseList}>
            {exercises.map((exercise) => (
            <View
                key={exercise.id}
                style={[
                styles.exerciseItem,
                exercise.done && styles.exerciseDone,
                ]}
            >
                <Text
                style={[
                    styles.exerciseText,
                    exercise.done && styles.exerciseTextDone,
                ]}
                >
                {exercise.name}
                </Text>
                {exercise.done && <Text style={styles.checkmark}>✔</Text>}
            </View>
            ))}
        </View>

        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("ExerciseTimerScreen", { programId: id })}
        >
            <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
        </ScrollView>
    );
    };

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: "#666",
        marginBottom: 20,
    },
    exerciseList: {
        marginBottom: 30,
    },
    exerciseItem: {
        backgroundColor: "#F2F2F2",
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    exerciseDone: {
        backgroundColor: "#D1FAE5",
    },
    exerciseText: {
        fontSize: 16,
    },
    exerciseTextDone: {
        color: "#10B981",
        fontWeight: "600",
    },
    checkmark: {
        fontSize: 18,
        color: "#10B981",
    },
    button: {
        backgroundColor: "#FF3B30",
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 40,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    });

export default ProgressDetailScreen;
