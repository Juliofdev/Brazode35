import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

export default function PerfilScreen() {
  const [usuario, setUsuario] = useState(null);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    nivel_fisico: "",
    altura: "",
    peso: "",
    sexo: "",
  });

  useEffect(() => {
    AsyncStorage.getItem("usuario").then(console.log); // Mostrar contenido

    const cargarUsuario = async () => {
      const jsonValue = await AsyncStorage.getItem("usuario");
      if (jsonValue) {
        const user = JSON.parse(jsonValue);

        try {
          const response = await fetch("https://emcservices.tech/perfil.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id_usuario: user.id_usuario }),
          });

          const data = await response.json();
          console.log("Datos recibidos:", data);

          if (data.success) {
            setUsuario(user);
            setForm(data.usuario); // ✅ Copiar directamente
          } else {
            alert("Error al cargar perfil: " + data.message);
          }
        } catch (error) {
          console.error("Error de red:", error);
          alert("No se pudo conectar con el servidor.");
        }
      }
    };

    cargarUsuario();
  }, []);

  const actualizarPerfil = async () => {
    if (!usuario) return;

    console.log("Intentando actualizar perfil:", form);

    try {
      const response = await fetch("https://emcservices.tech/perfil.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          id_usuario: usuario.id_usuario,
          accion: "actualizar",
        }),
      });

      const data = await response.json();
      console.log("Respuesta del servidor:", data);

      if (data.success) {
        alert("Perfil actualizado correctamente.");
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
      alert("Error al conectar con el servidor.");
    }
  };

  const renderCampo = (label, key, editable = true) => (
    <View style={styles.campoContainer}>
      <View style={styles.campoLabel}>
        <Ionicons name="person" size={20} color="#A44949" style={styles.icon} />
        <Text style={styles.label}>{label}</Text>
      </View>
      <TextInput
        style={styles.input}
        value={form[key]?.toString() || ""}
        onChangeText={(text) => setForm({ ...form, [key]: text })}
        editable={editable}
        keyboardType={
          key === "altura" || key === "peso" ? "decimal-pad" : "default"
        }
      />
    </View>
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <Text style={styles.title}>Mi Perfil</Text>

      {renderCampo("Nombre", "nombre")}
      {renderCampo("Email", "email")} {/* 👈 añadido */}
      {renderCampo("Nivel físico", "nivel_fisico")}
      {renderCampo("Altura (cm)", "altura")}
      {renderCampo("Peso (kg)", "peso")}
      {renderCampo("Sexo", "sexo")}

      <TouchableOpacity style={styles.button} onPress={actualizarPerfil}>
        <Text style={styles.buttonText}>Guardar Cambios</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  campoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  campoLabel: {
    flexDirection: "row",
    alignItems: "center",
    width: "40%",
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginLeft: 8,
  },
  input: {
    width: "55%",
    borderBottomWidth: 1,
    borderColor: "#E03B2E",
    paddingVertical: 5,
    textAlign: "right",
  },
  icon: {
    marginRight: 4,
  },
  button: {
    backgroundColor: "#E03B2E",
    padding: 15,
    borderRadius: 12,
    marginTop: 30,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
