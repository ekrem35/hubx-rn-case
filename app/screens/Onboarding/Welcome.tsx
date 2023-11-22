import React from 'react';

import {View, StatusBar, StyleSheet, Text, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Container from './components/Container';
import Button from 'components/Button';

import PlantImgSVG from './assets/plant_camera_line.image.svg';

import spray_image from './assets/object_spray.png';
import water_image from './assets/object_water.png';
import sun_image from './assets/object_sun.png';

export default function Onboarding() {
  const navigation = useNavigation();

  return (
    <View>
      <StatusBar barStyle="dark-content" />

      <Container>
        <View style={styles.headerTextContainer}>
          <Text style={styles.title}>
            Welcome to <Text style={styles.titleBold}>PlantApp</Text>
          </Text>

          <Text style={styles.description}>
            Identify more than 3000+ plants and 88% accuracy.
          </Text>
        </View>

        <View style={styles.plantImgContainer}>
          <View style={styles.objectImagesContainer}>
            <Image source={spray_image} style={styles.sprayImg} />

            <Image source={sun_image} style={styles.sunImg} />

            <Image source={water_image} style={styles.waterImg} />
          </View>

          <PlantImgSVG />
        </View>

        <Button onPress={() => navigation.navigate('UserGuide')}>
          Get Started
        </Button>

        <View style={styles.policyTextContainer}>
          <Text style={styles.policyText}>
            By tapping next, you are agreeing to PlantID{' '}
            <Text onPress={() => true} style={styles.clickableText}>
              Terms of Use
            </Text>{' '}
            &{' '}
            <Text onPress={() => true} style={styles.clickableText}>
              Privacy Policy.
            </Text>
          </Text>
        </View>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTextContainer: {
    marginTop: 12,
  },
  title: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 28,
    lineHeight: 33,
    letterSpacing: 0.07,
    color: '#13231B',
  },
  titleBold: {
    fontWeight: '500',
  },
  description: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 0.07,
    fontSize: 16,
    lineHeight: 22,
    color: 'rgba(19, 35, 27, 0.7)',
    marginTop: 8,
  },
  plantImgContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  objectImagesContainer: {
    width: 300,
    height: 400,
    position: 'absolute',
  },
  sprayImg: {
    position: 'absolute',
    left: 0,
  },
  sunImg: {
    position: 'absolute',
    right: 30,
    top: 40,
  },
  waterImg: {
    position: 'absolute',
    bottom: 20,
    right: 70,
  },
  policyTextContainer: {
    alignItems: 'center',
  },
  policyText: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 15,
    textAlign: 'center',
    letterSpacing: 0.07,
    color: 'rgba(89, 113, 101, 0.7)',
    marginTop: 17,
    maxWidth: '75%',
  },
  clickableText: {
    textDecorationLine: 'underline',
  },
});
