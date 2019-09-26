import React from 'react';
import {
    View,
    ImageBackground,
    Text
} from 'react-native';

import { styles } from "./style";
import StarRating from './../starRating'

const RestaurantCard = ({ restaurant_name, country, star_rating, review_count, img }) => {
    return (
        <View style={styles.restaurantCardContainer}>
            <View style={styles.content}>
                <Text style={styles.restaurantName}>{restaurant_name}</Text>
                <Text style={styles.country}>{country}</Text>
                <View style={styles.reviewAndRating}>
                    <StarRating ratings={star_rating} />
                    <Text style={styles.review}>{review_count} reviews</Text>
                </View>
            </View>
            <View style={styles.image}>
                <ImageBackground
                    style={styles.restaurantImg}
                    source={{ uri: img }}
                />
            </View>
        </View>
    );
}

export default RestaurantCard