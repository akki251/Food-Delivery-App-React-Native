import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import SanityClient, { urlFor } from "../sanity";
const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    SanityClient.fetch(
      `

    *[_type == "category"]
    `,
    ).then((data) => setCategories(data));
  }, []);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* categories Card */}
      {categories.map((category) => (
        <CategoryCard
          imgUrl={urlFor(category.image).width(500).url()}
          key={category._id}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
