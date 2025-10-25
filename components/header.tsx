import { FC } from 'react';
import { View, Text, Image, ImageSourcePropType } from "react-native";
const bg: ImageSourcePropType = require("../assets/Background.jpg");
const heroImg: ImageSourcePropType  = require("../assets/Movies.png");

const Header: FC = () => {
  return (
    <>
      {/* Reduced height to 400 for a more modern, compact look */}
      <View className="w-full relative" style={{ height: 400, width: '100%', overflow: 'hidden' }}>
        
        {/* Background Image */}
        <Image
          source={bg}
          style={{height: '100%', width:'100%'}}
          resizeMode="cover"
        />
        
        {/* Dark Green Overlay for Forest Theme and Dark Mode consistency */}
        <View className="absolute inset-0 bg-green-950/70"/> 

        {/* Content Container */}
        <View className="absolute inset-0 justify-end items-center px-4 pb-12">
          
          {/* Hero Image (positioned above the text) */}
          <Image
              // The hero image should be visually smaller and more centered
              className='relative mb-4' 
              style={{width: '60%', height: '50%'}} 
              source={heroImg}
              resizeMode='contain'
          />
          
          {/* Hero Text */}
          <View className="w-full items-center">
            {/* Text: Use lime-200 for a natural stand-out look. Removed text shadow as the dark overlay provides enough contrast. */}
            <Text className="font-extrabold text-lime-200 text-3xl text-center">
              Find <Text className="text-lime-300">Natural</Text> Entertainment.
            </Text>
            {/* Added a secondary, less prominent tag line */}
            <Text className="text-lime-300/80 text-lg mt-1 text-center font-medium">
              Movies that match your mood.
            </Text>
          </View>
          
        </View>
        
      </View>
    </>
  );
};
export default Header;