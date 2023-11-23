import React from 'react';

import {
  View,
  Text,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
  StyleSheet,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import InactiveIconSvg from '../assets/images/inactive.plan.icon.svg';
import ActiveIconSvg from '../assets/images/active.plan.icon.svg';
import BadgeBgSvg from '../assets/images/badge.bg.svg';

import colors from '../../../lib/colors';

export default function PlanItem({
  title,
  description,
  onSelect,
  active,
  value,
  style,
  badgeTitle,
}: {
  title: string;
  description: string;
  onSelect: (idx: number) => void;
  active: boolean;
  value: number;
  style?: StyleProp<ViewStyle>;
  badgeTitle?: string;
}) {
  return (
    <View style={style}>
      {badgeTitle ? (
        <View style={{position: 'absolute', right: 0, top: 0}}>
          <BadgeBgSvg />
          <Text style={styles.badgeTitle}>{badgeTitle}</Text>
        </View>
      ) : null}

      <TouchableOpacity onPress={() => onSelect(value)}>
        <View
          style={
            active ? styles.activePlanItemContainer : styles.planItemContainer
          }>
          <LinearGradient
            colors={
              active
                ? [colors.green00, colors.green2b]
                : [colors.white0d, colors.white0d]
            }
            start={{x: 0, y: 0}}
            style={styles.planItemGradient}
            end={{x: 1, y: 0}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {active ? <ActiveIconSvg /> : <InactiveIconSvg />}

              <View
                style={{
                  marginLeft: 12,
                }}>
                <Text style={styles.planTitle}>{title}</Text>
                <Text style={styles.planDescription}>{description}</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  planItemContainer: {
    borderWidth: 0.5,
    borderColor: colors.white4d,
    borderRadius: 14,
  },
  activePlanItemContainer: {
    borderColor: colors.green,
    borderWidth: 1.5,
    borderRadius: 14,
  },
  planItemGradient: {
    paddingVertical: 13,
    paddingHorizontal: 16,
    borderRadius: 14,
  },
  planTitle: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    color: colors.white,
  },
  planDescription: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 14,
    color: colors.whiteb3,
    marginTop: 1,
  },
  badgeTitle: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 18,
    alignItems: 'center',
    color: colors.white,
    position: 'absolute',
    top: 4,
    right: 8,
  },
});
