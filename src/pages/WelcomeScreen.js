import React from "react";
import {Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import { SafeAreaView } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  function goToMemberSign() {
    navigation.navigate("MemberSignScreen");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Fitness Salonu</Text>
      <Button text="Üye Kaydı Oluştur" onPress={goToMemberSign} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
    
  },
});

export default WelcomeScreen;
