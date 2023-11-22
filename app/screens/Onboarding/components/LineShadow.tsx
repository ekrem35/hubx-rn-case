import React from 'react';

import {View} from 'react-native';

export default function LineShadow() {
  return (
    <View
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24,
        height: 5,
        width: null,
        zIndex: 2,
        backgroundColor: '#ffffff',
      }}
    />
  );
}
