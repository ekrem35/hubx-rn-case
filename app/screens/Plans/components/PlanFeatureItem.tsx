import React from 'react';

import {View, Text, StyleProp, ViewStyle, StyleSheet} from 'react-native';

import PlanLimitedIconSvg from '../assets/images/plan.limited.icon.svg';
import PlanFasterIconSvg from '../assets/images/plan.feature.faster.svg';
import PlanDetailedIconSvg from '../assets/images/plan.feature.details.svg';

import colors from '../../../lib/colors';

const mockFeatures = {
  unlimited: {
    title: 'Unlimited',
    description: 'Plant Identify',
    icon: PlanLimitedIconSvg,
  },
  faster: {
    title: 'Faster',
    description: 'Process',
    icon: PlanFasterIconSvg,
  },
  detailed: {
    title: 'Detailed',
    description: 'Plant care',
    icon: PlanDetailedIconSvg,
  },
};

export default function PlanDetailItem({
  style,
  name,
}: {
  style?: StyleProp<ViewStyle>;
  name: 'unlimited' | 'faster' | 'detailed';
}) {
  const FeatureIcon = mockFeatures[name].icon;

  return (
    <View style={[styles.container, style]}>
      <FeatureIcon />
      <Text style={styles.title}>{mockFeatures[name].title}</Text>
      <Text style={styles.description}>{mockFeatures[name].description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 156,
    height: 130,
    borderRadius: 14,
    backgroundColor: colors.white14,
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
    color: colors.white,
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
    color: colors.whiteb3,
    marginTop: 4,
  },
});
