import { Stack } from 'expo-router';
import Navbar from '../components/Navbar';
import '../global.css';

export default function RootLayout() {
  return (
    <>
      <Navbar/>
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="index"/>
        <Stack.Screen name="(auth)/login"/>
        <Stack.Screen name="courses/index"/>
        <Stack.Screen name="courses/[id]"/>
      </Stack>
    </>
  );
}