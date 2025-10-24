import { FC } from "react"
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native"
import "nativewind"

const Spinner: FC = () => {
  return (
    <View className="flex-row gap-3">
      <TouchableOpacity className="flex-row items-center bg-green-500 px-4 py-2 rounded-md">
        <ActivityIndicator size="small" color="#fff" />
        <Text className="pl-3 text-white font-bold">Loading...</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Spinner