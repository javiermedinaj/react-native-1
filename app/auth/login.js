import React from 'react';
import { View, TextInput, Text, TouchableOpacity,  } from 'react-native';

const LoginScreen = () => {
  return (
    <View className="flex justify-center items-center h-full  bg-neutral-900">
  
      <View className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <View className="items-center mb-6">
        </View>
        <View className="mb-4">
          <TextInput
            className="border border-gray-300 rounded-lg py-2 px-4 text-gray-800 focus:outline-none focus:border-blue-500"
            placeholder="Username"
            placeholderTextColor="gray-500"
          />
        </View>
        <View className="mb-6">
          <TextInput
            className="border border-gray-300 rounded-lg py-2 px-4 text-gray-800 focus:outline-none focus:border-blue-500"
            placeholder="Password"
            placeholderTextColor="gray-500"
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          <Text className="text-white text-center">Log In</Text>
        </TouchableOpacity>
        <View className="flex-row justify-between mt-4">
          <TouchableOpacity>
            <Text className="text-blue-500">Recordar usuario</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-blue-500">Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
        </View>
        <View className="items-center mt-4">
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;