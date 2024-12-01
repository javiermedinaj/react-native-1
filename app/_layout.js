import { Stack } from 'expo-router';
import '../global.css'

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{
          title: 'Welcome'
        }}
      />
      <Stack.Screen 
        name="(auth)/login" 
        options={{
          title: 'Login'
        }}
      />
      <Stack.Screen 
        name="(app)/courses" 
        options={{
          title: 'Courses'
        }}
      />
    </Stack>
  );
}

