import React, { useState } from "react";
import { Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Input from "../components/Input";
import Button from "../components/Button";

const MemberSign = ({ navigation }) => {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurame] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);
  const [userHomeTown, setUserHomeTown] = useState(null);

  function handleSubmit() {
    if (!userName || !userSurname || !userAge || !userMail || !userHomeTown) {
      Alert.alert("Fitness", "information cannot be left blank");
      return;
    }
    const user = {
      userName: userName,
      userSurname: userSurname,
      userAge: userAge,
      userMail: userMail,
      userHomeTown: userHomeTown,
    };

    navigation.navigate("MemberResultScreen", { user });
  }
  return (
    <SafeAreaView>
      <Text>Member Sign</Text>
      <Input
        label="Member Name"
        placeholder="Enter the member's name"
        onChangeText={setUserName}
      />
      <Input
        label="Member Surname"
        placeholder="Enter the member's surname"
        onChangeText={setUserSurame}
      />
      <Input
        label="Member Age"
        placeholder="Enter the member's age"
        onChangeText={setUserAge}
      />
      <Input
        label="Member E-mail"
        placeholder="Enter the member's e-mail"
        onChangeText={setUserMail}
      />
      <Input
        label="Member Country"
        placeholder="Enter the member's country"
        onChangeText={setUserHomeTown}
      />

      <Button text="Complete Registration" onPress={handleSubmit}></Button>
    </SafeAreaView>
  );
};

export default MemberSign;
