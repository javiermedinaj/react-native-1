import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CourseScreen from '../screens/CourseScreen';
import LoginScreen from '../screens/LoginScreen';
import { AuthContext } from './StackNavigator';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation }) => {
  const { user, setUser } = useContext(AuthContext);

  return (
    <View style={styles.drawerContent}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Courses"
        onPress={() => navigation.navigate('Course')}
      />
      {user ? (
        <Text style={styles.userText}>Welcome, {user.name}</Text>
      ) : (
        <Button
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
      )}
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Course" component={CourseScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    padding: 20,
  },
  logo: {
    width: 120,
    height: 40,
    marginBottom: 20,
  },
  userText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DrawerNavigator;