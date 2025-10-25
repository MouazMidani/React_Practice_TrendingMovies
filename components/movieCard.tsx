import { FC } from 'react';
import { View, Text, Image } from 'react-native';
import { Movie } from 'types/movie';

const API_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard: FC<{movie: Movie}> = ({ movie }) => {
  // Static dimensions in pixels for a significantly larger card
  const CARD_WIDTH_PX = 300; 
  const CARD_HEIGHT_PX = 450;
  const POSTER_HEIGHT_PX = 330; 
  
  return (
    // Card Container: Standard flex-col (default) for vertical stacking.
    <View 
      className={`p-3 bg-green-900 rounded-xl items-center shadow-2xl shadow-green-950/60 border border-teal-400/30 overflow-hidden`}
      style={{ width: CARD_WIDTH_PX, height: CARD_HEIGHT_PX }}
    >
      
      {/* 1. Poster Container (Anchored at the top) */}
      <View style={{ width: '100%', height: POSTER_HEIGHT_PX }} className="rounded-lg overflow-hidden border border-green-800">
        <Image
          source={{ uri: API_BASE_URL + movie.poster_path }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </View>

      {/* 2. Title (Immediately under the image) */}
      <Text
        className="text-green-200 text-left self-start flex-wrap w-full font-bold text-lg mt-3" // Added margin-top to separate from the image
        numberOfLines={2}
        ellipsizeMode='tail'
      >
        {movie.title}
      </Text>

      {/* 3. Metadata (At the bottom) */}
      <View className="flex-row self-start items-center gap-1 flex-wrap w-full mt-1">
        {/* Rating Star */}
        <Text className="text-yellow-400 font-extrabold text-sm">★</Text>
        <Text className="text-green-200 text-sm">{( movie.vote_average ?? 0 ).toFixed(1)}</Text>
        
        {/* Separator 1 */}
        <Text className="text-green-400 text-sm mx-1">•</Text>
        
        {/* Language */}
        <Text className="text-green-300/80 text-sm">{movie.original_language.toUpperCase()}</Text>
        
        {/* Separator 2 */}
        <Text className="text-green-400 text-sm mx-1">•</Text>
        
        {/* Release Year */}
        <Text className="text-green-300/80 text-sm">
          {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
        </Text>
      </View>
    </View>
  );
};

export default MovieCard;