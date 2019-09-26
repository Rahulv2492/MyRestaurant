import React from 'react';
import {
  SafeAreaView,
  FlatList,
  ImageBackground
} from 'react-native';

import { styles } from "./style";
import RestaurantCard from './../../restaurantCard'
const data = [
  {
    id: 1,
    restaurant_name: "Pizza Hutt",
    country: 'French',
    star_rating: 4,
    review_count: 120,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSj5_rdC0SigK1ChvDxA-Y_VHQ95QZXvO8Ex4NCwG6VOupZFDcQ'
  },
  {
    id: 2,
    restaurant_name: "Pizza Hutt",
    country: 'French',
    star_rating: 3,
    review_count: 120,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSj5_rdC0SigK1ChvDxA-Y_VHQ95QZXvO8Ex4NCwG6VOupZFDcQ'
  },
  {
    id: 3,
    restaurant_name: "Pizza Hutt",
    country: 'French',
    star_rating: 5,
    review_count: 120,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSj5_rdC0SigK1ChvDxA-Y_VHQ95QZXvO8Ex4NCwG6VOupZFDcQ'
  },
  {
    id: 4,
    restaurant_name: "Pizza Hutt",
    country: 'French',
    star_rating: 1,
    review_count: 120,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSj5_rdC0SigK1ChvDxA-Y_VHQ95QZXvO8Ex4NCwG6VOupZFDcQ'
  },
  {
    id: 5,
    restaurant_name: "Pizza Hutt",
    country: 'French',
    star_rating: 0,
    review_count: 120,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSj5_rdC0SigK1ChvDxA-Y_VHQ95QZXvO8Ex4NCwG6VOupZFDcQ'
  },
  {
    id: 6,
    restaurant_name: "Pizza Hutt",
    country: 'French',
    star_rating: 5,
    review_count: 120,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSj5_rdC0SigK1ChvDxA-Y_VHQ95QZXvO8Ex4NCwG6VOupZFDcQ'
  }

]

const RestaurantList = () => {
  return (
    <ImageBackground source={require('./../../../assets/images/map.jpeg')} style={styles.restaurantContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => <RestaurantCard {...item} />}
          keyExtractor={item => item.id}
        />
    </ImageBackground>
  );
};
export default RestaurantList;
