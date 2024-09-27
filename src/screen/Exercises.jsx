import { View, Text, TouchableOpacity,  StatusBar, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { fetchbodyexercisesparts } from '../../Api/ExerciseDb'
import { DummyData } from '../constant'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Exerciseslist from '../Components/Exerciseslist'
import { ScrollView } from 'react-native-virtualized-view'
export default function Exercises() {
  const [exercises, setExercises] = useState(DummyData)
  const navigation = useNavigation()
  const route = useRoute()
  const item = route.params
  

  useEffect(()=>{
  //  if(item) getExercises(item.name)
  },[item])


  const getExercises = async (bodypart)=>{
    let Data = await fetchbodyexercisesparts(bodypart)
    setExercises(Data)
  }
  return (
   <ScrollView>
    <StatusBar style="light"/>
    <Image source={item.image}
    style={{width:wp(100), height:hp(45)}}
    className='rounded-b-[40px]'
    />
    <TouchableOpacity className='bg-rose-500 mx-4 flex justify-center items-center pr-1 absolute rounded-full'
    onPress={() => navigation.goBack()}
    style={{height:hp(5.5), width:hp(5.5), marginTop:hp(7) }}
    >
      <Ionicons name='caret-back-outline' size={hp(4)} color='white'/>
    </TouchableOpacity>
    {/* exercises */}

    <View className='mx-4 space-y-3 mt-4'>
    <Text style={{fontSize:hp(3)}} className='font-semibold text-neutral-700'>
      {item.name} Exercises
    </Text>
    <View className='mb-10'>
      <Exerciseslist Data={exercises}/>
    </View>
    </View>
   </ScrollView>
  )
}