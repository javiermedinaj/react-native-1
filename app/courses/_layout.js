import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function AppLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f8f9fa',
        },
        headerTintColor: '#333',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => (
          <Ionicons 
            name="person-circle-outline" 
            size={24} 
            color="#333" 
            style={{ marginRight: 15 }}
          />
        ),
      }}
    >
      <Stack.Screen 
        name="courses"
        options={{
          title: 'My Courses',
        }}
      />
      <Stack.Screen 
        name="courses/[id]"
        options={{
          title: 'Course Details',
        }}
      />
    </Stack>
  );
}