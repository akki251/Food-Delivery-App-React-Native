import React from "react";
import { Image, Text, Touchable, TouchableOpacity } from "react-native";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="mr-2 relative">
      <Image
        source={{ uri: imgUrl }}
        className="h-20 w-20 rounded-md"
      />
      <Text className="absolute bottom-1 left-1 text-white text-xs font-bold">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
