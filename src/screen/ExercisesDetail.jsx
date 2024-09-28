import { ScrollView, View, Text } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Image } from 'expo-image'
import { TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Animated, { FadeInDown } from 'react-native-reanimated'
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
            className='mx-2 absolute rounded-full mt-10 right-0 bg-[#f43f5e]' 
            >
            <Ionicons name='close' size={hp(5)} color='white'/>
        </TouchableOpacity>

        {/* Detail */}

        <ScrollView className='mx-4 space-y-2 mt-3' showsVerticalScrollIndicator={false} 
        contentContainerStyle={{paddingBottom: 60}}
        >
          <Animated.Text entering={FadeInDown.duration(100).springify()} style={{fontSize: hp(3.5)}}
          className='font-semibold text-neutral-800 tracking-wide'
          >{item.name}
          </Animated.Text>
          <Animated.Text entering={FadeInDown.delay(300).duration(200).springify()} style={{fontSize: hp(2)}}
          className='text-neutral-800 tracking-wide'
          >
            Equipment <Text className='font-bold text-neutral-800'>
              {item.equipment}
            </Text>
          </Animated.Text>
          <Animated.Text entering={FadeInDown.delay(300).duration(200).springify()} style={{fontSize: hp(2)}}
          className='text-neutral-800 tracking-wide'
          >
            Secondary Muscles: <Text className='font-bold text-neutral-800'>
              {item.secondaryMuscles.join(', ')}
            </Text>
          </Animated.Text>
          <Animated.Text entering={FadeInDown.delay(300).duration(200).springify()} style={{fontSize: hp(2)}}
          className='text-neutral-800 tracking-wide'
          >
            Target <Text className='font-bold text-neutral-800'>
              {item.target}
            </Text>
          </Animated.Text>
          <Animated.Text entering={FadeInDown.delay(400).duration(200).springify()} style={{fontSize: hp(3)}}
          className='font-semibold text-neutral-800 tracking-wide'
          >
          Instruction:
          </Animated.Text>
          {
            item.instructions.map((instruction, index)=>{
              return(
              <Animated.Text entering={FadeInDown.delay(500).duration(200).springify()} key={index} style={{fontSize: hp(1.7)}} className='text-neutral-800'>
                {instruction}
              </Animated.Text>
              )
            }
            
          )
          }
        </ScrollView>
    </View>
  )
}