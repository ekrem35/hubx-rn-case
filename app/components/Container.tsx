import React from 'react';

import {StyleProp, StyleSheet, TextStyle, View} from 'react-native';

type ContainerProps = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
};

export default function Container(props: ContainerProps) {
  return (
    <View style={[defaultContainerStyle.content, props.style]}>
      {props.children}
    </View>
  );
}

const defaultContainerStyle = StyleSheet.create({
  content: {
    padding: 24,
  },
});
