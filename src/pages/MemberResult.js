import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

const MemberResult = ({route}) => {
const {user} = route.params;
  return (
    <SafeAreaView>
      <Text>Member Name: {user.userName}</Text>
      <Text>Member Surname: {user.userSurname}</Text>
      <Text>Member Age: {user.userAge}</Text>
      <Text>Member E-mail: {user.userMail}</Text>
      <Text>Member Country: {user.userHomeTown}</Text>
    </SafeAreaView>
  )
}

export default MemberResult
