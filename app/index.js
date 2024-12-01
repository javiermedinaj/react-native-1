// app/index.js
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View className="flex-1 p-4">
      <Text className="text-2xl mb-4 text-red-700">Welcome to Our App. I'm excited to teach</Text>
      <Text className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Link href="/login" className="text-blue-500">Login</Link>
    </View>
  );
}