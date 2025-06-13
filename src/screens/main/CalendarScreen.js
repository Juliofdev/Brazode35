import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import "moment/locale/es";

moment.locale("es");

export default function CalendarScreen() {
  const [currentDate, setCurrentDate] = useState(moment());

  const screenWidth = Dimensions.get("window").width;
  const daySize = (screenWidth - 40) / 7; // 20 padding a los lados

  const startOfMonth = currentDate.clone().startOf("month");
  const endOfMonth = currentDate.clone().endOf("month");
  const startDate = startOfMonth.clone().startOf("week");
  const endDate = endOfMonth.clone().endOf("week");

  const days = [];
  let date = startDate.clone();
  while (date.isBefore(endDate, "day")) {
    days.push(date.clone());
    date.add(1, "day");
  }

  const renderDay = (day, index) => {
    const isToday = day.isSame(moment(), "day");
    const isCurrentMonth = day.month() === currentDate.month();

    return (
      <TouchableOpacity
        key={index}
        style={[
          styles.day,
          {
            width: daySize,
            height: daySize,
            backgroundColor: isToday ? "#E03B2E" : "#F9F0F0",
            opacity: isCurrentMonth ? 1 : 0.3,
          },
        ]}
        onPress={() => console.log("Fecha seleccionada:", day.format("YYYY-MM-DD"))}
      >
        <Text style={[styles.dayText, isToday && styles.todayText]}>
          {day.date()}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => setCurrentDate(currentDate.clone().subtract(1, "month"))}
          >
            <Ionicons name="chevron-back" size={28} color="#A44949" />
          </TouchableOpacity>
          <Text style={styles.monthText}>
            {currentDate.format("MMMM YYYY")}
          </Text>
          <TouchableOpacity
            onPress={() => setCurrentDate(currentDate.clone().add(1, "month"))}
          >
            <Ionicons name="chevron-forward" size={28} color="#A44949" />
          </TouchableOpacity>
        </View>

        <View style={styles.weekDays}>
          {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((d, i) => (
            <Text key={i} style={[styles.weekDay, { width: daySize }]}>
              {d}
            </Text>
          ))}
        </View>

        <View style={styles.calendarGrid}>
          {days.map(renderDay)}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  container: {
    paddingHorizontal: 10,
    paddingTop: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  monthText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#A44949",
    textTransform: "capitalize",
  },
  weekDays: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  weekDay: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#A44949",
  },
  calendarGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 10,
  },
  day: {
    margin: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 2,
  },
  dayText: {
    fontSize: 16,
    color: "#333",
  },
  todayText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
