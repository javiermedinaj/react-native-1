import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { courses } from '../../data/coursesData';

export default function Courses() {
  return (
    <View className="flex-1 p-4 bg-neutral-900">
      <Text className="text-2xl mb-4 text-white">Available Courses</Text>
      <FlatList 
        data={courses}
        renderItem={({item}) => (
          <Link href={`/courses/${item.id}`} asChild>
            <TouchableOpacity className="bg-gray-800 p-4 mb-2 rounded-lg">
              <Text className="text-white text-lg">{item.title}</Text>
            </TouchableOpacity>
          </Link>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}