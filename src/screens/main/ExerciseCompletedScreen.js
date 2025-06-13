import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const ExerciseCompletedScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { total, calories } = route.params || {};

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("../../../assets/Plan_free.png")} // Puedes usar tu propio ícono si deseas
          style={styles.icon}
        />
        <Text style={styles.title}>¡Buen trabajo Máquina!</Text>
        <Text style={styles.subtitle}>Entrenamiento completado.</Text>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{total || 0}</Text>
            <Text style={styles.statLabel}>Total Ejercicios</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{calories || 0}</Text>
            <Text style={styles.statLabel}>Calorías quemadas</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace('Maintabs')}
        >
          <Text style={styles.buttonText}>Siguiente Reto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ExerciseCompletedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000000aa",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 20,
    textAlign: "center",
    color: "#666",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 30,
  },
  statBox: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
  },
  button: {
    backgroundColor: "#FF3B30",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
