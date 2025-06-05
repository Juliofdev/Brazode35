import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Importar todas las Screens creadas
import WelcomeScreen from "../WelcomeScreen";
import HomeScreen from "../screens/main/HomeScreen";
import SettingsScreen from "../screens/main/SettingsScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import PlaningScreen from "../screens/planes/PlaningScreen";
import PlanFreeScreen from "../screens/planes/PlanFreeScreen";
import ActividadScreen from "../screens/main/ActividadScreen";
import CalendarScreen from "../screens/main/CalendarScreen";
import PerfilScreen from "../screens/main/PerfilScreen";

// Crear navegadores: tabs inferiores y stack principal
const tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Navegador de pestañas principales de la app (después del login/register)
function MyTabs(){
    return(
        <tab.Navigator>
            <tab.Screen name="Inicio" component={HomeScreen} />
            <tab.Screen name="Actividad" component={ActividadScreen} />
            <tab.Screen name="Calendario" component={CalendarScreen} />
            <tab.Screen name="Perfil" component={PerfilScreen}/>
        </tab.Navigator>
    );
}

// Navegador principal de la aplicación
export default function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
                
                {/* Pantalla de bienvenida al iniciar la app */}
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                
                {/* Autenticación */}
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                
                {/* Planes y configuración inicial */}
                <Stack.Screen name="Planing" component={PlaningScreen} />
                <Stack.Screen name="PlanFree" component={PlanFreeScreen} />
                
                {/* Pestañas principales una vez autenticado */}
                <Stack.Screen name="Maintabs" component={MyTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
