import { View, Text, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, Link } from 'expo-router';
import { getCourseById } from '../../../data/coursesData'; 

export default function CourseDetails() {
  const { id } = useLocalSearchParams();
  const course = getCourseById(id);

  if (!course) {
    return (
      <View className="flex-1 p-4 bg-neutral-900 justify-center items-center">
        <Text className="text-2xl text-white">Course not found.</Text>
        <Link href="/courses" asChild>
          <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-lg mt-4">
            <Text className="text-white text-center">Back to Courses</Text>
          </TouchableOpacity>
        </Link>
      </View>
    );
  }

  return (
    <View className="flex-1 p-4 bg-neutral-900">
      <Text className="text-2xl text-white mb-4">{course.title}</Text>
      <Text className="text-white mb-8">{course.description}</Text>
      <Link href="/courses" asChild>
        <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-lg">
          <Text className="text-white text-center">Back to Courses</Text>
        </TouchableOpacity>
      </Link>  
    </View>
  );
}