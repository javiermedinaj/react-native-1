import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function CourseDetails() {
  const { id } = useLocalSearchParams();
  return (
    <View className="flex-1 p-4">
      <Text className="text-2xl">Course Details {id}</Text>
    </View>
  );
}