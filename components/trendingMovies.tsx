import { FC } from 'react'
import { View, FlatList, Text, Image } from "react-native"

const POSTER_WIDTH_FIXED = 130; 
const POSTER_HEIGHT_FIXED = POSTER_WIDTH_FIXED * 1.5;
const ITEM_HEIGHT_FIXED = POSTER_HEIGHT_FIXED; 
const ITEM_TOTAL_WIDTH = POSTER_WIDTH_FIXED + 60;

const TrendingMovies: FC = ({trendingMovies}: any) => {
  return (
    <View className="py-2 mb-5">
        <Text className="text-2xl font-bold text-black ml-16 mb-4">
          Top Trending Movies 🔥
        </Text>
        <FlatList
          data={trendingMovies}
          keyExtractor={(item) => item.$id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16, gap: 16, alignItems: 'center', height: ITEM_HEIGHT_FIXED, flexGrow: 1, justifyContent: 'center' }}
          renderItem={({ item, index }) => (
            <View 
              style={{ height: ITEM_HEIGHT_FIXED, width: ITEM_TOTAL_WIDTH }} 
              className="flex-row items-center justify-center"
            >
              <View 
                  style={{ height: ITEM_HEIGHT_FIXED }} 
                  className="absolute left-0 justify-center"
              >
                 <Text 
                    className="font-extrabold text-white"
                    style={{ fontSize: ITEM_HEIGHT_FIXED * 0.8 }} 
                 >
                   {index + 1}
                 </Text>
              </View>
              <View 
                style={{  width: POSTER_WIDTH_FIXED, height: POSTER_HEIGHT_FIXED, marginLeft: 60 }}
                className="rounded-xl overflow-hidden shadow-2xl bg-gray-800 z-10" 
              >
                  <Image
                    source={{ uri: item.poster_url }} 
                    className="w-full h-full"
                    resizeMode="cover" 
                  />
              </View>

            </View>
          )}
        />
    </View>
  )
}

export default TrendingMovies