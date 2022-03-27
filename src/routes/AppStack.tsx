import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import { Home } from '../screens/Home';
import Details  from '../screens/Details';


export default function Routes() { 
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen 
          name="Home" 
          component={Home} 
        />
        <Screen 
          name="Details" 
          component={Details} 
        />
      </Navigator>
    </NavigationContainer>
  );
}