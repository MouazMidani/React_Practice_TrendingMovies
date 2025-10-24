import { FC } from 'react'
import { TextInput, View } from 'react-native'

type SearchProps = {
  searchTerm: string
  setSearchTerm: (value: string) => void
}

const Search: FC<SearchProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <View className='bg-green-700 p-0 w-4/5 h-12 self-center flex-row items-center rounded-md px-4'>
      <TextInput
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Search for a movie!"
        className='flex-1 text-lg text-white'
      />
    </View>
  )
}
export default Search