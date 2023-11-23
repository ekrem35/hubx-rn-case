import React, {useEffect, useState} from 'react';

import {View, StyleProp, ViewStyle} from 'react-native';

import PlanItem from '../components/PlanItem';

export default function PlanList({
  style,
  onChange,
}: {
  style?: StyleProp<ViewStyle>;
  onChange?: (idx: number) => void;
}) {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(1);

  useEffect(() => {
    if (typeof onChange === 'function') {
      onChange(selectedPlanIndex);
    }
  }, [selectedPlanIndex, onChange]);

  return (
    <View style={[style]}>
      <PlanItem
        title="1 Month"
        description="$2.99/month, auto renewable"
        onSelect={idx => setSelectedPlanIndex(idx)}
        active={selectedPlanIndex === 0}
        value={0}
      />

      <PlanItem
        style={{marginTop: 16}}
        title="1 Year"
        description="First 3 days free, then $529,99/year"
        onSelect={idx => setSelectedPlanIndex(idx)}
        active={selectedPlanIndex === 1}
        value={1}
        badgeTitle="Save 50%"
      />
    </View>
  );
}
