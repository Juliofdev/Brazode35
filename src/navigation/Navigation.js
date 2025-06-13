import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

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
import ProgressDetailScreen from "../screens/main/ProgressDetailScreen";
import ExerciseDetailScreen from "../screens/main/ExerciseDetailScreen";
import ExerciseTimerScreen from "../screens/main/ExerciseTimerScreen";
import ExerciseCompletedScreen from "../screens/main/ExerciseCompletedScreen";
import PlanBasicoScreen from "../screens/planes/PlanBasicoScreen";
import PlanPremiumScreen from "../screens/planes/PlanPremiumScreen";

// Crear navegadores: tabs inferiores y stack principal
const tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Navegador de pestañas principales de la app (después del login/register)
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#A44949",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#e0e0e0",
          height: 60,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "Inicio":
              iconName = focused ? "home" : "home-outline";
              break;
            case "Actividad":
              iconName = focused ? "barbell" : "barbell-outline";
              break;
            case "Calendario":
              iconName = focused ? "calendar" : "calendar-outline";
              break;
            case "Perfil":
              iconName = focused ? "person" : "person-outline";
              break;
            default:
              iconName = "help";
          }

          return <Ionicons name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Actividad" component={ActividadScreen} />
      <Tab.Screen name="Calendario" component={CalendarScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
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
                <Stack.Screen name="PlanBasico" component={PlanBasicoScreen} />
                <Stack.Screen name="PlanPremium" component={PlanPremiumScreen} />

                {/* Pestañas principales una vez autenticado */}
                <Stack.Screen name="Maintabs" component={MyTabs} />

                <Stack.Screen name="ProgressDetail" component={ProgressDetailScreen} />

                
                <Stack.Screen name="ExerciseDetail" component={ExerciseDetailScreen} />

                
                <Stack.Screen name="ExerciseTimerScreen" component={ExerciseTimerScreen} />

                
                <Stack.Screen name="ExerciseCompletedScreen" component={ExerciseCompletedScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
