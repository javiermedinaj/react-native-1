import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View className="flex-1 sm:p-6 p-4 bg-neutral-900">
      <Text className="sm:text-2xl text-xl mb-4 text-red-700">
        Welcome to Our App. I'm excited to teach
      </Text>
      <Text className="sm:mb-6 mb-4 text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      <Link href="/auth/login" className="text-blue-500">
        Login
      </Link>
      <Link href="/courses" className="text-blue-500">
        View Courses
      </Link>
    </View>
  );
}