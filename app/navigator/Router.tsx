import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import AuthScreen from './AuthScreen';

import WelcomeScreen from '../screens/Onboarding/Welcome';
import UserGuide from '../screens/Onboarding/UserGuide';
import Plans from '../screens/Plans/Plans';
import HomeScreen from '../screens/Home/HomeScreen';

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
        {/* Onboarding Screens Start*/}
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="UserGuide" component={UserGuide} />
        <Stack.Screen name="Plans" component={Plans} />
        {/* Onboarding Screens End*/}
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
