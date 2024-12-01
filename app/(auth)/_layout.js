import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
      contentStyle: { backgroundColor: 'white' }
    }}>
      <Stack.Screen 
        name="login"
        options={{
          animation: 'fade'
        }}
      />
    </Stack>
  );
}