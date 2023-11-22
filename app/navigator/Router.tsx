import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import WelcomeScreen from '../screens/Onboarding/Welcome';
import UserGuide from '../screens/Onboarding/UserGuide';

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="UserGuide" component={UserGuide} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
