import { View, Text,  Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

export default function Welcomescreen() {
  return (
    <View className="flex-1 flex justify-end">
        <StatusBar style="light"/>  
        <Image source={require('../../assets/welcome.png')} className="w-full h-full absolute"/>
    </View>
  )
}