import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Navbar() {
  return (
    <View className="flex-row justify-between items-center bg-red-700 p-4">
      <Link href="/" asChild>
        <TouchableOpacity>
          <Text className="text-white font-bold">Home</Text>
        </TouchableOpacity>
      </Link>
      
      <View className="flex-row gap-4">
        <Link href="/auth/login" asChild>
          <TouchableOpacity>
            <Text className="text-white">Login</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/courses" asChild>
          <TouchableOpacity>
            <Text className="text-white">Courses</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}