import { FC } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import "nativewind";

const Spinner: FC = () => {
  return (
    // Centered the container and gave it generous vertical padding (py-10)
    <View className="w-full justify-center items-center py-10">
      {/* Container: Used a slightly transparent dark green (bg-green-800/80)
        and made it wider for a modern loading bar feel.
      */}
      <View className="flex-row items-center bg-green-800/80 px-8 py-3 rounded-xl border border-lime-300/50 shadow-lg shadow-green-950/50">
        {/* ActivityIndicator: Used the natural lime color for a standout effect */}
        <ActivityIndicator size="small" color="#D9F99D" /> {/* lime-300 hex */}
        
        {/* Text: Used the high-contrast lime color */}
        <Text className="pl-3 text-lime-300 font-bold text-lg">
          Loading Movies...
        </Text>
      </View>
    </View>
  );
};
export default Spinner;