// app/(app)/courses.js
import { View, Text, FlatList } from 'react-native';

export default function Courses() {
  const courses = [
    { id: 1, title: 'React Native Basics' },
    { id: 2, title: 'Advanced React Native' },
  ];

  return (
    <View className="flex-1 p-4">
      <Text className="text-2xl mb-4">Available Courses</Text>
      <FlatList 
        data={courses}
        renderItem={({item}) => (
          <View className="p-4 bg-gray-100 mb-2 rounded">
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}