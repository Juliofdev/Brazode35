import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ActividadScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Actividad Reciente</Text>

      {/* Tarjeta de resumen semanal */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Resumen semanal</Text>
        <Text style={styles.cardText}>✅ Ejercicios completados: 3</Text>
        <Text style={styles.cardText}>⏱️ Tiempo total: 1h 45min</Text>
      </View>

      {/* Tarjeta de última sesión */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Última sesión</Text>
        <Text style={styles.cardText}>🏋️ Piernas - 30 minutos</Text>
        <Text style={styles.cardText}>📅 Completado: 11 de junio</Text>
      </View>

      {/* Tarjeta de progreso general */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Progreso mensual</Text>
        <Text style={styles.cardText}>🔥 Total de sesiones: 12</Text>
        <Text style={styles.cardText}>📈 Ritmo: 3 veces por semana</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff', // fondo general
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222222', // texto fuerte
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#F5F5F5', // fondo suave
    borderRadius: 16,
    padding: 18,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#9747FF', // color principal
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#666666', // texto suave
    marginBottom: 6,
  },
});
