
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  restaurantCardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    borderRadius: 10,
    padding: 20,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 15
  },
  content: {
    flex: 2,
    justifyContent: 'space-between',
    alignItems:'flex-start'
  },
  restaurantName: {
    fontSize: 15,
    fontFamily: 'SFProText-Bold'
  },
  country: {
    fontSize: 15,
    color: '#8c8c8c'
  },
  image: {
    flex: 1,
    height: 90,
    borderRadius: 8,
    overflow: 'hidden'

  },
  reviewAndRating: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
  },
  review: {
    marginLeft: 5,
    color: '#999999'
  },
  restaurantImg: {
    width: '100%',
    height: '100%'
  }
})