import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { StatusBar } from 'expo-status-bar'
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../Components/ImageSlider';


export default function Home() {
  return (
    <SafeAreaView className='flex-1 bg-white flex space-y-14' edges={['top']}> 
        <StatusBar style="dark" />

        {/* punchline And Avatar */}

        <View className='flex-row justify-between items-center mx-5'>
            <View className='space-y-2'>
                <Text style={{fontSize:hp(4.5)}}
                className='font-bold tracking-wider text-neutral-700'
                >
                    Ready To</Text>
                    <Text style={{fontSize:hp(4.5)}}
                className='font-bold tracking-wider text-rose-500'
                >
                     WorkOut</Text>
            </View>
            <View className='flex justify-center items-center space-y-2'>
             <Image source={require('../../assets/avatar.png')}
             style={{height: hp(6), width: wp(12)}}
             className='rounded-full'
             />
             <View className='bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300' 
             style={{height: hp(5.5), width: wp(12)}}>
             <Ionicons name="notifications" size={hp(3)} color="gray" />
             </View>
            </View>
        </View>
        {/* Image slider */}
        <ImageSlider/>
    </SafeAreaView>
  )
}