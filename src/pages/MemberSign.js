import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'

import Input from "../components/Input";
import Button from "../components/Button";
const MemberSign = () => {
  return (
    <SafeAreaView>
      <Text>Member Sign</Text>
      <Input label="Member Name" placeholder="Enter the member's name"/>
      <Input label="Member Surname" placeholder="Enter the member's surname"/>
      <Input label="Member Age" placeholder="Enter the member's age"/>
      <Input label="Member E-mail" placeholder="Enter the member's e-mail"/>
      <Input label="Member Country" placeholder="Enter the member's country"/>

      <Button text="Complete Registration" onPress={null}></Button>
      
    </SafeAreaView>
  );
};

export default MemberSign;
