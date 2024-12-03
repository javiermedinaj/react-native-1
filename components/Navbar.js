import { View, Text, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from '@expo/vector-icons'; 

export default function Navbar() {
  return (
    <View className="flex-row justify-around items-center bg-neutral-700 p-4">
      
      <Link href="/" asChild>
        <TouchableOpacity className="flex-col items-center">
          <Ionicons name="home-outline" size={24} color="white" />
          <Text className="text-white mt-1">Home</Text>
        </TouchableOpacity>
      </Link>
      
      <Link href="/auth/login" asChild>
        <TouchableOpacity className="flex-col items-center">
          <Ionicons name="log-in-outline" size={24} color="white" />
          <Text className="text-white mt-1">Login</Text>
        </TouchableOpacity>
      </Link>
      
      <Link href="/courses" asChild>
        <TouchableOpacity className="flex-col items-center">
          <Ionicons name="book-outline" size={24} color="white" />
          <Text className="text-white mt-1">Learn</Text>
        </TouchableOpacity>
      </Link>
      
      <Link href="/profile" asChild>
        <TouchableOpacity className="flex-col items-center">
          <Ionicons name="person-outline" size={24} color="white" />
          <Text className="text-white mt-1">Profile</Text>
        </TouchableOpacity>
      </Link>
      
    </View>
  );
}