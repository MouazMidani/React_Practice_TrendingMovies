import { Client, Query, Databases , ID, Models } from "react-native-appwrite";
import { TrendingMovie } from "types/movie";
import Constants from 'expo-constants';
const PROJECT_ID =
  process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID ||
  Constants.expoConfig?.extra?.EXPO_PUBLIC_APPWRITE_PROJECT_ID;

const DATABASE_ID =
  process.env.EXPO_PUBLIC_MOVIE_DATABASE_ID ||
  Constants.expoConfig?.extra?.EXPO_PUBLIC_MOVIE_DATABASE_ID;

const METRICS_ID =
  process.env.EXPO_PUBLIC_MOVIE_METRICS_ID ||
  Constants.expoConfig?.extra?.EXPO_PUBLIC_MOVIE_METRICS_ID;

const ENDPOINT =
  process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT ||
  Constants.expoConfig?.extra?.EXPO_PUBLIC_APPWRITE_ENDPOINT;

const client = new Client()
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID)

const database = new Databases(client)
type AppwriteTrendingMovie = Models.Document & TrendingMovie
export const updateSearchCount = async (searchTerm: string, movie: Partial<TrendingMovie>) => {
    try{
        const res = await database.listDocuments<AppwriteTrendingMovie>(
            DATABASE_ID, 
            METRICS_ID, 
            [Query.equal('searchTerm', searchTerm)]
        )

        if(res.documents.length > 0){
            const doc = res.documents[0]

            await database.updateDocument(DATABASE_ID, METRICS_ID, doc.$id, { count: (doc.count ?? 0) + 1})
        } else {
            await database.createDocument(DATABASE_ID, METRICS_ID, ID.unique(), {
                count: 1,
                searchTerm, 
                movie_id: movie.id,
                poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            })
        }
    } catch (err) {
        console.log("-> UpdatSearchCount, Error:", err)
    }
}

export const getTrendingMovies = async (): Promise<AppwriteTrendingMovie[]> => {
    try {
        const res = await database.listDocuments<AppwriteTrendingMovie>(DATABASE_ID, METRICS_ID, [
            Query.limit(5),
            Query.orderDesc("count")
        ])
        return res.documents
    } catch (error) {
        console.log(error)
        return []
    }
}