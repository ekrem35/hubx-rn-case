import React from 'react';

import {View, Text, StyleProp, ViewStyle, StyleSheet} from 'react-native';

import PlanLimitedIconSvg from '../assets/images/plan.limited.icon.svg';

export default function PlanDetailItem({
  style,
}: {
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View style={[styles.container, style]}>
      <PlanLimitedIconSvg />
      <Text style={styles.title}>Unlimited</Text>
      <Text style={styles.description}>Plant Identify</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 156,
    height: 130,
    borderRadius: 14,
    backgroundColor: '#FFFFFF14',
    padding: 16,
  },
  title: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 24,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 0.38,
    color: '#FFFFFF',
    marginTop: 16,
  },
  description: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 18,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: -0.08,
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: 4,
  },
});
