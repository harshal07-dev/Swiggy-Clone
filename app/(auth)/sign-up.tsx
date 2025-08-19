import { router } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

export default function signUp() {
  return (
    <View>
      <Text>sign-up</Text>
      <Button title="Sign Up" onPress={() => router.push("/sign-in")}/>
    </View>
  )
}