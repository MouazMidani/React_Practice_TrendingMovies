import { FC } from 'react'
import { View, Text, Image } from 'react-native'
import { Movie } from 'types/movie'

const API_BASE_URL = 'https://image.tmdb.org/t/p/w500'


const MovieCard: FC<{movie: Movie}> = ({ movie }) => {
  return (
    <View className="p-4 bg-green-600 rounded-2xl items-center justify-between w-72 h-[360] overflow-hidden">
      <View style={{ width: 270, height: 260 }} className="rounded-xl overflow-hidden">
        <Image
          source={{ uri: API_BASE_URL + movie.poster_path }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </View>

      <Text
        className="text-white text-left mt-3 self-start flex-wrap w-full font-semibold"
        numberOfLines={2}
        ellipsizeMode='tail'
      >
        {movie.title}
      </Text>

      <View className="flex-row self-start mt-1 items-center gap-1">
        <Text className="text-yellow-400 font-extrabold">★</Text>
        <Text className="text-white">{( movie.vote_average ?? 0 ).toFixed(1)}</Text>
        <Text className="text-white mx-1">•</Text>
        <Text className="text-white">{movie.original_language}</Text>
        <Text className="text-white mx-1">•</Text>
        <Text className="text-white">{movie.release_date}</Text>
      </View>
    </View>
  )
}

export default MovieCard
