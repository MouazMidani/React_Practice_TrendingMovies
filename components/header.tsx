import { FC } from 'react'
import {View, Text, Image, ImageSourcePropType } from "react-native"
const bg: ImageSourcePropType = require("../assets/Background.jpg")
const heroImg: ImageSourcePropType  = require("../assets/Movies.png")

const Header: FC = () => {
  return (
    <>
      <View className="w-full relative" style={{ height: 500, width: '100%', overflow: 'hidden' }}>
        <Image
          source={bg}
          style={{height: '100%', width:'100%'}}
          resizeMode="cover"
        />
        <View className="absolute inset-0 justify-center items-center px-4 mt-36">
          <Image
              className='relative'
              style={{width: '80%', height: '80%'}}
              source={heroImg}
              resizeMode='contain'
          />
          <View className="w-3/4 items-center">
            <Text className="font-bold text-white text-4xl text-center" style={{textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000"}}>
              Find <Text className="text-green-400">Movies</Text> You'll Enjoy without effort!
            </Text>
          </View>
        </View>
      </View>
    </>
  )
}
export default Header