import { View, Text,  Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native'


export default function Welcomescreen() {
  const navigate = useNavigation()
  return (
    <View className="flex-1 flex justify-end">
        <StatusBar style="light"/>  
        <Image source={require('../../assets/welcome.png')} className="w-full h-full absolute"/>
        <LinearGradient 
        colors={["transparent", '#18181b']}
        style={{width: wp(100), height: hp(70)}}
        start={{x:0.5, y:0}}
        end={{x:0.5, y:0.8}}
        className='flex justify-end pb-12 space-y-8'
        >
        <Animated.View entering={FadeInDown.delay(100).springify()} className='flex items-center'>
          <Text style={{fontSize: hp(5)}} className='text-white font-bold tracking-wide'>Best
            <Text className='text-rose-500'> Workout</Text>
          </Text>
          <Text style={{fontSize: hp(5)}} className='text-white font-bold tracking-wide'>
            For You
          </Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <TouchableOpacity
          onPress={() => navigate.navigate('Home')}
          style={{width: wp(80), height: hp(7)}}
          className='flex justify-center items-center bg-rose-500 rounded-full mx-auto
          border-[2px] border-neutral-200'>
            <Text style={{fontSize: hp(3)}} className='text-white font-bold tracking-widest'>
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
</LinearGradient>
<StatusBar style="light"/>
</View>
  )
}