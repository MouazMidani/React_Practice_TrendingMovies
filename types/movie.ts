export type Movie = {
    id: number
    title: string
    poster_path?: string
    release_date?: string
    vote_average?: number
    original_language?: string
  }
  
  export type TrendingMovie = {
    id: number
    searchTerm: string
    count: number
    poster_url?: string
    movie_id: number
  }
  