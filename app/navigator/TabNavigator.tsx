import React from 'react';

import {View, TouchableOpacity, Text} from 'react-native';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home/HomeScreen';
import DiagnoseScreen from '../screens/Diagnose/DiagnoseScreen';
import ScannerScreen from '../screens/Scanner/ScannerScreen';
import MyGardenScreen from '../screens/MyGarden/MyGardenScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

import colors from '../lib/colors';

import {
  HomeIcon,
  DiagnoseIcon,
  MyGardenIcon,
  ProfileIcon,
  ScannerIcon,
} from './assets/tabBarIcons';

const Tab = createBottomTabNavigator();

const routeLabels = {
  HomeScreen: 'Home',
  DiagnoseScreen: 'Diagnose',
  ScannerScreen: 'Scanner',
  MyGardenScreen: 'My Garden',
  ProfileScreen: 'Profile',
};

function getRouteIcon(routeName: string, isFocused: boolean) {
  switch (routeName) {
    case 'HomeScreen':
      return <HomeIcon isFocused={isFocused} />;
    case 'DiagnoseScreen':
      return <DiagnoseIcon isFocused={isFocused} />;
    case 'MyGardenScreen':
      return <MyGardenIcon isFocused={isFocused} />;
    case 'ProfileScreen':
      return <ProfileIcon isFocused={isFocused} />;
  }
}

function TabBar(props: BottomTabBarProps) {
  const {state, descriptors, navigation} = props;

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        display: 'flex',
        backgroundColor: colors.white,
        height: 54,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = routeLabels[route.name as never];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        switch (route.name) {
          case 'ScannerScreen':
            return (
              <TouchableOpacity
                key={route.key}
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                style={{marginTop: -36}}
                onLongPress={onLongPress}>
                <ScannerIcon isFocused={isFocused} />
              </TouchableOpacity>
            );
          default:
            return (
              <TouchableOpacity
                key={route.key}
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                style={{}}
                onLongPress={onLongPress}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  {getRouteIcon(route.name, isFocused)}

                  <Text
                    style={{
                      color: isFocused ? '#28AF6E' : '#979798',
                      textAlign: 'center',
                      fontFamily: 'Rubik',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: 10,
                      lineHeight: 12,
                      letterSpacing: -0.24,
                      marginTop: 4.87,
                    }}>
                    {label}
                  </Text>
                </View>
              </TouchableOpacity>
            );
        }
      })}
    </View>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={TabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="DiagnoseScreen" component={DiagnoseScreen} />
      <Tab.Screen name="ScannerScreen" component={ScannerScreen} />
      <Tab.Screen name="MyGardenScreen" component={MyGardenScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
