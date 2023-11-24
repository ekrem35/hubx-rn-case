import React from 'react';

import {
  TextInput,
  View,
  StyleSheet,
  StyleProp,
  TextInputProps,
  ViewProps,
} from 'react-native';

import SearchIconSvg from 'assets/images/search.icon.svg';
import colors from '../lib/colors';

type Props = {
  inputContainerStyle?: StyleProp<ViewProps>;
  inputStyle?: StyleProp<TextInputProps>;
  inputProps?: TextInputProps;
  onChangeText?: (value: string) => void;
  value?: string;
};

export default function SearchInput(props: Props) {
  const {inputStyle, inputProps, onChangeText, value, inputContainerStyle} =
    props;

  return (
    <View style={[styles.inputContainer, inputContainerStyle]}>
      <View style={styles.inputIconContainer}>
        <SearchIconSvg />
      </View>
      <TextInput
        placeholder="Search for plants"
        placeholderTextColor="#AFAFAF"
        onChangeText={onChangeText}
        value={value}
        {...inputProps}
        style={[styles.input, inputStyle]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.white,
    padding: 13,
    paddingLeft: 48,
    borderRadius: 12,
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15.5,
    lineHeight: 18,
    letterSpacing: 0.07,
  },
  inputContainer: {
    borderRadius: 12,
    marginTop: 14,
  },
  inputIconContainer: {
    position: 'absolute',
    left: 16,
    top: 12,
    zIndex: 999,
  },
});
