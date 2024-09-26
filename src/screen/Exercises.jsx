import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { fetchbodyexercisesparts } from '../../Api/ExerciseDb'
import { DummyData } from '../constant'

export default function Exercises() {
  const [exercises, setExercises] = useState(DummyData)
  const navigation = useNavigation()
  const route = useRoute()
  const item = route.params
  

  useEffect(()=>{
   if(item) getExercises(item.name)
  },[item])


  const getExercises = async (bodypart)=>{
    let Data = await fetchbodyexercisesparts(bodypart)
    setExercises(Data)
  }
  return (
    <View className='mt-20'>
      <Text>Exercises</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}