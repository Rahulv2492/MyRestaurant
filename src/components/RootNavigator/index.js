import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TabNavigator from './TabNavigator';
import {brandColor} from './../../assets/style/colorVariables'


const RootNavigator = createStackNavigator({

  Home: {
    screen: TabNavigator,
    navigationOptions: ({ navigation }) =>{ 
      return(
      {
      title:navigation.state.index ===0? 'Restaurants' : 'Recipes',
      headerStyle:{backgroundColor:brandColor,width:'100%'},
      headerTitleStyle:{width:'100%',fontSize:30,color:'white'}
  }
)}
  }
});

export default createAppContainer(RootNavigator);