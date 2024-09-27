import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Exerciseslist({Data}) {
    const navigation = useNavigation()
  return (
    <View>
      <FlatList
      data={Data}
      numColumns={2}
      keyExtractor={item=>item.name}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:60, paddingTop:20}}
      columnWrapperStyle={{justifyContent:'space-between'}}
      renderItem={({item,index})=> <ExerciseCard navigation={navigation}  item={item} index={index}/>}
      />
    </View>
  )
}

const ExerciseCard = ({item, index, navigation}) => {
    return(
        <Text>Exercise Card</Text>
    )
}