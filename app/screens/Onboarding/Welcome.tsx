import React from 'react';

import {View, StatusBar, StyleSheet, Text} from 'react-native';

import Container from './components/Container';

export default function Onboarding() {
  return (
    <View>
      <StatusBar barStyle="dark-content" />

      <Container>
        <View
          style={{
            marginTop: 12,
          }}>
          <Text style={styles.title}>
            Welcome to <Text style={styles.titleBold}>PlantApp</Text>
          </Text>

          <Text style={styles.description}>
            Identify more than 3000+ plants and 88% accuracy.
          </Text>
        </View>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
