import React from 'react';

import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  StyleSheet,
  TextStyle,
} from 'react-native';

type Props = {
  children?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export default function Button(props: Props) {
  const {children, onPress, style, textStyle} = props;

  return (
    <TouchableOpacity onPress={onPress} style={[defaultStyle.touchable, style]}>
      <Text style={[defaultStyle.text, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  children: '',
  style: {},
  onPress: () => true,
  textStyle: {},
};

const defaultStyle = StyleSheet.create({
  touchable: {
    backgroundColor: '#28AF6E',
    padding: 16,
    borderRadius: 12,
  },
  text: {
    fontFamily: 'Rubik',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 24,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: -0.24,
    color: '#FFFFFF',
  },
});
