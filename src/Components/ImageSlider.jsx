import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel';
import { sliderImages } from '../constant';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function ImageSlider() {
  const width = Dimensions.get('window').width;
  return (
      <Carousel
      data={sliderImages}
      loop={true}
      autoPlay={true}
      width={width}
      height={width / 1.8}
      borderRadius={10}
      scrollAnimationDuration={1000}
      autoPlayInterval={1000}
      pagingEnabled={true}
      mode={'parallax'}
      renderItem={({ item, index }) => <ItemCard item={item} index={index} />}
      />
  )
}

const ItemCard = ({item, index}) => {
  return(
    <View style={{flex: 1, justifyContent:'center', overflow:'hidden', borderRadius:30,
      marginHorizontal:wp(3) 
    }}> 
      <Image  source={item}
      style={{display:'flex', justifyContent:'center', resizeMode:'contain',
      width:wp(100), height:hp(100)
      }}
      />
    </View>
  )
}