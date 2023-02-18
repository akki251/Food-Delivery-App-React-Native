import { View, Text, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../slices/restaurantSlice";
import { TouchableOpacity } from "react-native";
import { PhoneArrowDownLeftIcon, XMarkIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Progress from "react-native-progress";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";


const DeliveryScreen = ({ navigation }) => {
  const restaurant = useSelector(selectRestaurant);
  return (
    // <View className="bg-[#00ccbb] flex-1">
    //   <SafeAreaView className="z-50">
    //     <View className="flex-row justify-between items-center p-5">
    //       <TouchableOpacity onPress={() => navigation.navigate("Home")}>
    //         <XMarkIcon color="#fff" size={30} />
    //       </TouchableOpacity>
    //       <Text className="font-light text-white text-lg">Order Help</Text>
    //     </View>

    //     <View className="bg-white mx-5 my-2 rounded-md p-4 py-6 z-50 shadow-3xl">
    //       <View className="flex-row justify-between space-y-3">
    //         <View>
    //           <Text className="text-md text-gray-400">Estimated Arrival</Text>
    //           <Text className="text-3xl font-bold">10-15 Minutes</Text>
    //         </View>
    //         <Image source={require("./assets/order.png")} className="h-14 w-14 object-cover" />
    //       </View>
    //       <Progress.Bar size={30} color="#00ccbb" indeterminate={true} />

    //       <Text className="mt-3 text-gray-500 text-sm">
    //         Your order at {restaurant.title} is being Prepared
    //       </Text>
    //     </View>
    //   </SafeAreaView>

    //   <MapView
    //     mapType="mutedStandard"
    //     className="flex-1 -mt-10 z-0"
    //     initialRegion={{
    //       latitude: restaurant.lat,
    //       longitude: restaurant.long,
    //       latitudeDelta: 0.005,
    //       longitudeDelta: 0.005,
    //     }}
    //   >
    //     <Marker
    //       coordinate={{
    //         latitude: restaurant.lat,
    //         longitude: restaurant.long,
    //       }}
    //       title={restaurant.title}
    //       description={restaurant.short_description}
    //       identifier="origin"
    //       pinColor="#00ccbb"
    //     />
    //   </MapView>

    //   <View className="bg-white flex-row items-center px-5 space-x-4 h-28">
    //     <Image
    //       source={{
    //         uri: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    //       }}
    //       className="h-12 w-12 bg-gray-300 rounded-full "
    //     />
    //     <View className="flex-1 ">
    //       <Text className="text-lg">Akshansh</Text>
    //       <Text className="text-gray-400">Your Rider</Text>
    //     </View>

    //     <TouchableOpacity className="text-gray-400 text-lg font-bold">
    //       <PhoneArrowDownLeftIcon size={20} color="#00ccbb" />
    //     </TouchableOpacity>
    //   </View>
    // </View>
    <View>Delivery screen</View>
  );
};

export default DeliveryScreen;
