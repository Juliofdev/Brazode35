    import React from "react";
    import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    FlatList,
    } from "react-native";
    import { useNavigation } from "@react-navigation/native";

    const HomeScreen = () => {
    const navigation = useNavigation();

    const progressData = [
        {
        id: "1",
        title: "Entrenamiento de pecho",
        progress: "5/12",
        },
        {
        id: "2",
        title: "Entrenamiento de piernas",
        progress: "3/10",
        },
    ];

    const categories = [
        {
        id: "1",
        name: "Calentamiento de cuerpo completo",
        description: "20 Ejercicios · 22 Min",
        },
        {
        id: "2",
        name: "Ejercicio de fuerza",
        description: "12 Ejercicios · 16 Min",
        },
        {
        id: "3",
        name: "Tablón de ambos lados",
        description: "8 Ejercicios · 10 Min",
        },
        {
        id: "4",
        name: "Entrenamiento de abdominales",
        description: "6 Ejercicios · 10 Min",
        },
        {
        id: "5",
        name: "Entrenamiento de torso y trapecio",
        description: "9 Ejercicios · 15 Min",
        },
    ];

    return (
        <ScrollView style={styles.container}>
        {/* Banner */}
        <View style={styles.banner}>
            <View>
            <Text style={styles.bannerTitle}>Empieza fuerte y establece tus objetivos</Text>
            <TouchableOpacity style={styles.bannerButton}>
                <Text style={styles.bannerButtonText}>Comenzar</Text>
            </TouchableOpacity>
            </View>
            <Image
            source={require("../../../assets/Icono.png")}
            style={styles.bannerImage}
            resizeMode="contain"
            />
        </View>

        {/* Progreso */}
        <View style={styles.section}>
            <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Progreso</Text>
            <TouchableOpacity>
                <Text style={styles.linkText}>Ver todo</Text>
            </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {progressData.map((item) => (
                <TouchableOpacity
                key={item.id}
                style={styles.progressCard}
                onPress={() => navigation.navigate("ProgressDetail", { id: item.id })}
                >
                <Text style={styles.progressText}>{item.progress}</Text>
                <Text style={styles.progressTitle}>{item.title}</Text>
                </TouchableOpacity>
            ))}
            </ScrollView>
        </View>

        {/* Categorías */}
        <View style={styles.section}>
            <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Categorías</Text>
            <TouchableOpacity>
                <Text style={styles.linkText}>Ver todo</Text>
            </TouchableOpacity>
            </View>

            {categories.map((item) => (
            <TouchableOpacity
                key={item.id}
                style={styles.categoryCard}
                onPress={() => navigation.navigate("ExerciseDetail", { id: item.id })}
            >
                <View style={styles.cardLeft}>
                <Image
                    source={require("../../../assets/Icono.png")} // usa imágenes de ejemplo hasta que tengas los assets reales
                    style={styles.exerciseImage}
                />
                </View>
                <View style={styles.cardRight}>
                <Text style={styles.categoryTitle}>{item.name}</Text>
                <Text style={styles.categoryDescription}>{item.description}</Text>
                </View>
            </TouchableOpacity>
            ))}
        </View>
        </ScrollView>
    );
    };

    const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        paddingHorizontal: 20,
    },
    banner: {
        backgroundColor: "#FF3B30",
        borderRadius: 12,
        padding: 20,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    bannerTitle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        maxWidth: 180,
    },
    bannerButton: {
        backgroundColor: "#fff",
        borderRadius: 8,
        marginTop: 10,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    bannerButtonText: {
        color: "#FF3B30",
        fontWeight: "bold",
    },
    bannerImage: {
        width: 60,
        height: 60,
    },
    section: {
        marginTop: 20,
    },
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    linkText: {
        color: "#FF3B30",
        fontWeight: "600",
    },
    progressCard: {
        backgroundColor: "#F1F1F1",
        padding: 15,
        borderRadius: 10,
        marginRight: 15,
        width: 200,
    },
    progressText: {
        fontSize: 18,
        color: "#FF3B30",
        fontWeight: "bold",
    },
    progressTitle: {
        marginTop: 10,
        fontSize: 16,
    },
    categoryCard: {
        flexDirection: "row",
        backgroundColor: "#F9F9F9",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: "center",
    },
    cardLeft: {
        marginRight: 10,
    },
    cardRight: {
        flex: 1,
    },
    exerciseImage: {
        width: 50,
        height: 50,
    },
    categoryTitle: {
        fontWeight: "bold",
        fontSize: 16,
    },
    categoryDescription: {
        color: "#888",
        fontSize: 14,
    },
    });

    export default HomeScreen;
