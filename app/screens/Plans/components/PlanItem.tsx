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

export default function PlanItem({
  title,
  description,
  onSelect,
  active,
  value,
  style,
}: {
  title: string;
  description: string;
  onSelect: (idx: number) => void;
  active: boolean;
  value: number;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View style={style}>
      <TouchableOpacity onPress={() => onSelect(value)}>
        <View
          style={
            active ? styles.activePlanItemContainer : styles.planItemContainer
          }>
          <LinearGradient
            colors={
              active ? ['#28AF6E00', '#28AF6E2B'] : ['#FFFFFF0D', '#FFFFFF0D']
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
    borderColor: '#FFFFFF4D',
    borderRadius: 14,
  },
  activePlanItemContainer: {
    borderColor: '#28AF6E',
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
    color: '#FFFFFF',
  },
  planDescription: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: 1,
  },
});
