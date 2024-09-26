import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { BodyParts } from '../constant'
import { TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

export default function Bodyparts() {
    const navigation = useNavigation()
  return (
    <View className='mx-4 mt-36'>
      <Text style={{fontSize:hp(3)}} className='font-semibold text-neutral-700'>
      Exercise
      </Text>
      <FlatList
      data={BodyParts}
      numColumns={2}
      keyExtractor={item=>item.name}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:50, paddingTop:20}}
      columnWrapperStyle={{justifyContent:'space-between'}}
      renderItem={({item,index})=> <BodyPartCard navigation={navigation}  item={item} index={index}/>}
      />
    </View>
  )
}


const BodyPartCard = ({item, index, navigation}) => {
   return(
    <View>
        <TouchableOpacity
        onPress={()=> navigation.navigate('Exercises', {params: item})}
        style={{width: wp(44), height: wp(52)}}
        className='flex justify-end p-4 mb-4'
        >
            <Image
            source={item.image}
            resizeMode='cover'
            style={{width:wp(44), height:wp(52)}}
            className='rounded-[35px] absolute'
            />
            <LinearGradient
            colors={['transparent', 'rgba(0,0,0,9)']}
            style={{width:wp(44), height:hp(15)}}
            start={{x:0.5, y:0}}
            end={{x:0.5, y:1}}
            className='rounded-b-[35px] absolute bottom-0'
            />
            <Text className='text-white font-semibold text-center tracking-wide'
            style={{fontSize:hp(2.3)}}
            >{item.name}</Text>
        </TouchableOpacity>
    </View>
   )
}