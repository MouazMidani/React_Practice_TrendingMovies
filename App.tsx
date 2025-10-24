import { View, Text, FlatList, ScrollView } from 'react-native';
import "nativewind"
import './global.css'
import Header from "./components/header"
import { useState, useEffect } from 'react'
import Search from './components/search'
import Spinner from './components/spinner'
import MovieCard from './components/movieCard'
import TrendingMovies from './components/trendingMovies'
import { getTrendingMovies, updateSearchCount } from './appwrite'
import {Movie, TrendingMovie } from "./types/movie"

import Constants from 'expo-constants';

const API_BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY =
  process.env.EXPO_PUBLIC_TMDB_API_READ_KEY ||
  Constants.expoConfig?.extra?.EXPO_PUBLIC_TMDB_API_READ_KEY;
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

export default function App() {
  const [searchTerm, setSearchTerm] = useState<string>("")

  const [movieList, setMovieList] = useState<Movie[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  
  const [trendingMovies, setTrendingmovies] = useState<TrendingMovie[]>([])

  const fetchMovies = async (searchTerm: string = ''): Promise<void> => {
    try{
      setIsLoading(true)
      const endpoint = searchTerm 
                    ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(searchTerm)}`
                    : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
      
      const res = await fetch(endpoint, API_OPTIONS)
      if(!res) setMovieList([])
      
      const data = await res.json()
    
      setMovieList((data.results as Movie[]) || [])
      
      if(searchTerm && data.results.length > 0)
        await updateSearchCount(searchTerm, data.results[0])
    } catch (err) {
      console.log("-> failed to fetch movies ", err)
    } finally {
      setIsLoading(false)
    }
  }
  
  const loadTrendingMovies = async (): Promise<void> => {
    try {
      const movies = await getTrendingMovies() as unknown as TrendingMovie[]
      setTrendingmovies(movies);
    } catch (error) {
      console.log("-> error fetching trending movies")
    }
  }

  useEffect(() => {
      const delayDebounce = setTimeout(() => {
        fetchMovies(searchTerm)
      }, 500)
      return () => clearTimeout(delayDebounce)
  }, [searchTerm])

  useEffect(() => {
    loadTrendingMovies()
  }, [])

  return (
    <>
    <ScrollView className='w-full'>
        <Header/>
        <View>
          { trendingMovies.length > 0 && (<TrendingMovies trendingMovies={trendingMovies}/> )}
        </View>
        <View className="mt-5 p-4">
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          <Text className='font-bold text-2xl pl-14'>Popular</Text>
          {isLoading ? (
            <Spinner />
          ) : (
            <View>
              <FlatList
                data={movieList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <MovieCard 
                    movie={item}
                  />
                )}
                contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap", gap: 10, padding: 10, justifyContent:'center' }}
              />
            </View>
          )}
        </View>
    </ScrollView>
    </>
  )
}
