// /src/screens/planes/PlaningScreen.js
import React from "react";
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";


const { width, height } = Dimensions.get('window');
const mostrarAlerta = () => {
    Alert.alert("🚧 Función en desarrollo", "Esta función aún no está disponible.");
};

export default function PlaningScreen({ navigation }){
    return(
        <View style={styles.container}>
            {/* Título */}
            <View>
                <Text style={styles.title}>Escoge tu plan y ponte serio…</Text>
                <Text style={styles.subtitle}>o sigue igual.</Text>
            </View>

            {/* Plan Free*/}
            <View style={{backgroundColor: "#ffffff"}}>
                <TouchableOpacity style={styles.section} onPress={() => {navigation.replace('PlanFree')}}>
                    
                    <View style={styles.leftContainer}>
                        <Image source={require('../../../assets/Plan_free.png')} style={styles.imageStyle} />
                    </View>

                    <View style={styles.rightContainer}>
                        <Text style={[styles.title, {color: "#1E1E22"}]}>¿Pa’ qué gym? Si igual nadie te ve</Text>
                        <Text style={[styles.subtitle, {color: "#1E1E22"}]}>Empieza gratis y sin excusas, pero no prometemos milagros.</Text>
                    </View>
                    
                </TouchableOpacity>
            </View>

            {/* Plan Basico*/}
            <View style={{backgroundColor: "#CE6363"}}>
                <TouchableOpacity style={styles.section} onPress={mostrarAlerta}>
                    <View style={styles.rightContainer}>
                        <Text style={[styles.title, {color: "#1E1E22"}]}>Perfecto pa’ que no te lleve el viento, flacow</Text>
                        <Text style={[styles.subtitle, {color: "#1E1E22"}]}>Sube de nivel y deja de ser invisible, mínimo para llenar la camiseta.</Text>
                    </View>
                    
                    <View style={styles.leftContainer}>
                        <Image source={require('../../../assets/Plan_Basico.png')} style={styles.imageStyle} />
                    </View>
                </TouchableOpacity>
            </View>

            {/* Plan Premium*/}
            <View style={{backgroundColor: "#841D1D"}}>
                <TouchableOpacity style={styles.section} onPress={mostrarAlerta}>
                    <View style={styles.leftContainer}>
                        <Image source={require('../../../assets/Plan_Premium.png')} style={styles.imageStyle} />
                    </View>
                    
                    <View style={styles.rightContainer}>
                        <Text style={[styles.title, {color: "#ffffff"}]}>Perfecto pa’ que no te lleve el viento, flacow</Text>
                        <Text style={[styles.subtitle, {color: "#ffffff"}]}>Sube de nivel y deja de ser invisible, mínimo para llenar la camiseta.</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );

}const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingTop: height * 0.08,
        paddingHorizontal: width * 0,
        backgroundColor: "#ffffff"
    },

    title: {
        fontSize: width * 0.055,
        fontWeight: "bold",
        marginBottom: 0,
        textAlign: "center",
        color: "#E03B2E",
    },

    subtitle:{
        fontSize: width * 0.033,
        fontWeight: "bold",
        marginTop:5,
        marginBottom: height * 0.02,
        textAlign: "center",
        color: "#E03B2E",
    },

    section:{
        width: '100%',
        minHeight: height * 0.3,
        alignItems: 'center',
        flexDirection: 'row',   
        justifyContent: 'space-between',
    },

    leftContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: width * 0.05,
    },

    rightContainer: {
        flex: 2,
        justifyContent: 'center',
        paddingRight: width * 0.02,
    },

    imageStyle: {
        width: width * 0.4,
        height: width * 0.4,
        resizeMode: 'contain',
    },

});