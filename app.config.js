import 'dotenv/config';

export default ({ config }) => {
  return {
    ...config,
    extra: {
      EXPO_PUBLIC_APPWRITE_PROJECT_ID: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
      EXPO_PUBLIC_APPWRITE_ENDPOINT: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
      EXPO_PUBLIC_MOVIE_DATABASE_ID: process.env.EXPO_PUBLIC_MOVIE_DATABASE_ID,
      EXPO_PUBLIC_MOVIE_METRICS_ID: process.env.EXPO_PUBLIC_MOVIE_METRICS_ID,
    },
  };
};