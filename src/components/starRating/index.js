import React from 'react';
import {
    View,
    Image
} from 'react-native';

import { styles } from "./style";

const Stars = ({ totalStars, ratings }) => {
    let starUI = [];
    //Genrate filled stars
    for (let i = 0; i < ratings; i++) {
        starUI.push(<Image style={styles.starIcon} key={`${i}`} source={require('./../../assets/images/filled.png')} />)
    }
    //Genrate unfilled stars
    for (let i = 0; i < totalStars-ratings; i++) {
        starUI.push(
            <Image style={styles.starIcon} key={`${i}`} source={require('./../../assets/images/unfilled.png')} />
        )
    }
    return starUI;
}

const StarRating = ({ ratings }) => {
    let totalStars = 5;
    return (
        <View style={styles.starRatingContainer}>
            {<Stars totalStars={totalStars} ratings={ratings} />}
        </View>
    );
}

export default StarRating