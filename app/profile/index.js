import { View, Text, Image } from "react-native";

export default function Profile() {
  return (
    <View className="flex-1 p-4 bg-neutral-900 justify-start items-center">
      <Text className="text-2xl text-white"> Profile</Text>
      <View className="flex-row items-center mt-8">
        <Image
          source={require("../../assets/profile-pic.jpg")}
          className="w-20 h-20 rounded-full mr-4"
          resizeMode="cover"
        />

        <View className="flex-col">
          <Text className="text-xl text-white">Username: John Doe</Text>
          <Text className="text-white mt-1">Email: john.doe@example.com</Text>
        </View>
      </View>
    </View>
  );
}
