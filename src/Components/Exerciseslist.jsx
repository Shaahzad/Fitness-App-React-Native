import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

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
      <View>
        <TouchableOpacity className='flex py-3 space-y-2'>
          <View className='bg-neutral-200 shadow rounded-[25px] overflow-hidden'>
            <Image 
            source={{uri: item.gifUrl}}
            contentFit='cover'
            style={{width:wp(44), height:wp(52)}}
            />
          </View>
          <Text style={{fontSize: hp(1.7)}} className='text-neutral-700 font-semibold tracking-wide ml-1'>
            {
              item.name?.length>20? item.name.slice(0,20)+'...': item.name
            }
          </Text>
        </TouchableOpacity>
      </View>
    )
}