import { View, Text, FlatList, ScrollView } from 'react-native';
import "nativewind";
import './global.css';
import Header from "./components/header";
import { useState, useEffect } from 'react';
import Search from './components/search';
import Spinner from './components/spinner';
import MovieCard from './components/movieCard';
import TrendingMovies from './components/trendingMovies';
import { getTrendingMovies, updateSearchCount } from './appwrite';
import {Movie, TrendingMovie } from "./types/movie";

import Constants from 'expo-constants';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY =
  process.env.EXPO_PUBLIC_TMDB_API_READ_KEY ||
  Constants.expoConfig?.extra?.EXPO_PUBLIC_TMDB_API_READ_KEY;
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};

export default function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const [trendingMovies, setTrendingmovies] = useState<TrendingMovie[]>([]);

  const fetchMovies = async (searchTerm: string = ''): Promise<void> => {
    try{
      setIsLoading(true);
      const endpoint = searchTerm 
                        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(searchTerm)}`
                        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      
      const res = await fetch(endpoint, API_OPTIONS);
      if(!res) setMovieList([]);
      
      const data = await res.json();
    
      setMovieList((data.results as Movie[]) || []);
      
      if(searchTerm && data.results.length > 0)
        await updateSearchCount(searchTerm, data.results[0]);
    } catch (err) {
      console.log("-> failed to fetch movies ", err);
    } finally {
      setIsLoading(false);
    }
  };
  
  const loadTrendingMovies = async (): Promise<void> => {
    try {
      const movies = await getTrendingMovies() as unknown as TrendingMovie[];
      setTrendingmovies(movies);
    } catch (error) {
      console.log("-> error fetching trending movies");
    }
  };

  useEffect(() => {
      const delayDebounce = setTimeout(() => {
        fetchMovies(searchTerm);
      }, 500);
      return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  return (
    // Updated: Using bg-green-950 for the main dark background
    <ScrollView className='w-full min-h-screen bg-green-950'> 
      <Header/>
      
      <View className="p-4 pt-0">
        {/* Trending Section: Separated for visual clarity */}
        { trendingMovies.length > 0 && (
          <View className="mb-8"> 
            <TrendingMovies trendingMovies={trendingMovies}/> 
          </View>
        )}

        {/* Search Bar: Placed below trending for modern flow */}
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </View>
      
      {/* Popular Movies Section */}
      <View className="mt-4 px-4 pb-20"> {/* Increased bottom padding */}
        {/* Updated: Using text-teal-400 for a rich, modern, and stand-out title color */}
        <Text className='font-extrabold text-3xl mb-4 text-teal-400'>
          {searchTerm ? `Results for "${searchTerm}"` : 'Popular Picks'}
        </Text>
        
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
              // Adjusted to create a 2-column grid appearance for a modern look
              contentContainerStyle={{ 
                flexDirection: "row", 
                flexWrap: "wrap", 
                gap: 16, // Increased gap for more breathing room
                paddingHorizontal: 0, // Removed unnecessary inner padding
                justifyContent:'space-evenly' // Use space-evenly for consistent spacing in the grid
              }}
            />
          </View>
        )}
        {/* Display a message if no movies are found */}
        {movieList.length === 0 && !isLoading && searchTerm.length > 0 && (
          <View className='w-full items-center mt-8'>
            {/* Updated: Using text-green-200 for a soft, calming white text */}
            <Text className='text-green-200 text-xl font-medium'>No movies found for that search term.</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}