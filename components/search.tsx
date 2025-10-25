import { FC } from 'react';
import { TextInput, View } from 'react-native';

type SearchProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

const Search: FC<SearchProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    // Container: Darker, natural green (bg-green-800) for contrast against the main app background.
    // Increased height (h-14) and rounded-full for a modern, bold look.
    // Added a subtle border (border-2 border-lime-300/40) to make it stand out.
    <View className='bg-green-800 p-0 w-11/12 h-14 mb-8 self-center flex-row items-center rounded-full px-6 border-2 border-lime-300/40 shadow-xl shadow-green-950/50'>
      <TextInput
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Search for a movie!"
        // Text Color: Light, natural lime color (text-lime-50) for high contrast.
        // Placeholder Color: Use a slightly transparent version of the text color.
        placeholderTextColor="#D9F99D80" // Hex for lime-300 at 50% opacity
        className='flex-1 text-xl text-lime-50 font-medium'
      />
    </View>
  );
};

export default Search;