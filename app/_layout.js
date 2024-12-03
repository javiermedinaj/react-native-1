import { Stack } from 'expo-router';
import Navbar from '../components/Navbar'; 
import '../global.css';

export default function RootLayout() {
  return (
    <>
      
      <Stack screenOptions={{ headerShown: false }} />
      <Navbar />
    </>
  );
}