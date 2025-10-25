import { FC } from 'react';
import { View, FlatList, Text, Image } from "react-native";

// Constants are kept the same to maintain the unique layout structure
const POSTER_WIDTH_FIXED = 130; 
const POSTER_HEIGHT_FIXED = POSTER_WIDTH_FIXED * 1.5;
const ITEM_HEIGHT_FIXED = POSTER_HEIGHT_FIXED; 
const ITEM_TOTAL_WIDTH = POSTER_WIDTH_FIXED + 60;

// Type definition for better TypeScript adherence (assuming TrendingMovie is in types/movie)
interface TrendingMovieProps {
  trendingMovies: {
    $id: string;
    poster_url: string;
    // Add other properties if necessary
  }[];
}

// Update the component signature to use the correct type
const TrendingMovies: FC<TrendingMovieProps> = ({trendingMovies}) => {
  return (
    // Updated padding and margin for a modern, spacious feel
    <View className="py-4 mb-8"> 
        {/* Title: Changed to a bright, natural green (lime-200) to stand out */}
        <Text className="text-3xl font-extrabold text-lime-200 pl-4 mb-6"> 
          Top Trending Movies 🔥
        </Text>
        
        <FlatList
          data={trendingMovies}
          keyExtractor={(item) => item.$id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          // The key change is using 'center' for justifyContent
          contentContainerStyle={{ 
            paddingHorizontal: 20, 
            gap: 20, 
            alignItems: 'center', 
            height: ITEM_HEIGHT_FIXED + 10,
            flexGrow: 1, 
            justifyContent: 'center' // Ensures the items are horizontally centered when they don't fill the list width
          }}
          renderItem={({ item, index }) => (
            <View 
              style={{ height: ITEM_HEIGHT_FIXED, width: ITEM_TOTAL_WIDTH }} 
              className="flex-row items-center justify-center"
            >
              {/* Oversized Rank Number */}
              <View 
                style={{ height: ITEM_HEIGHT_FIXED }} 
                className="absolute left-0 justify-center"
              >
                 <Text 
                    // Changed to a deep, natural green with high opacity for a subtle backdrop effect
                    className="font-extrabold text-green-800 opacity-70" 
                    style={{ fontSize: ITEM_HEIGHT_FIXED * 0.8 }} 
                  >
                    {index + 1}
                  </Text>
              </View>
              
              {/* Movie Poster Card */}
              <View 
                style={{  width: POSTER_WIDTH_FIXED, height: POSTER_HEIGHT_FIXED, marginLeft: 60 }}
                // Added border-2, border-lime-500, and a stronger shadow for a stand-out, premium feel
                className="rounded-xl overflow-hidden shadow-2xl bg-gray-800 z-10 border-2 border-lime-300/50 shadow-black-500/50" 
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
  );
}

export default TrendingMovies;