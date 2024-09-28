import { View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Image } from 'expo-image'
import { TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function ExercisesDetail() {
    const route = useRoute()
    const item = route.params
    const navigation = useNavigation()
  return (
    <View className='flex flex-1'>
        <View className='shadow-md bg-neutral-200 rounded-b-[40px]'>
          <Image source={{uri: item?.gifUrl}}
          contentFit='cover'
          style={{width: wp(100) , height: wp(100)}}
          className='rounded-b-[40px]'
          />
        </View>
        <TouchableOpacity onPress={()=> navigation.goBack()}
            className='mx-2 absolute rounded-full mt-2 right-0'
            >
            <Ionicons name='Closecircle' size={hp(3)} color='gray'/>
        </TouchableOpacity>
    </View>
  )
}