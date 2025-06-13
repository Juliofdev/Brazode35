import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const ExerciseDetailScreen = () => {
const navigation = useNavigation();
const route = useRoute();
const { exerciseId } = route.params;

  // Ejemplo de datos de ejercicio
const exerciseData = {
        name: "Calentamiento de cuerpo completo",
        duration: "22 min",
        exercises: [
        "Saltos de tijera",
        "Círculos con los brazos",
        "Balanceo de piernas",
        "Sentadillas con peso corporal",
        "Círculos con la cadera",
        ],
};

    return (
        <ScrollView style={styles.container}>
        <Text style={styles.title}>{exerciseData.name}</Text>
        <Text style={styles.subtitle}>
            {exerciseData.exercises.length} Ejercicios • {exerciseData.duration}
        </Text>

        <View style={styles.exerciseList}>
            {exerciseData.exercises.map((item, index) => (
            <View key={index} style={styles.exerciseItem}>
                <Text style={styles.exerciseText}>• {item}</Text>
            </View>
            ))}
        </View>

        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("ExerciseTimerScreen", {
            exerciseId: exerciseId,
            })}
        >
            <Text style={styles.buttonText}>Comenzar Ejercicio</Text>
        </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 20,
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
        paddingVertical: 10,
    },
    exerciseText: {
        fontSize: 16,
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

export default ExerciseDetailScreen;
