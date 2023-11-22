import React, {useEffect, useState} from 'react';

import {
  Dimensions,
  Image,
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  useWindowDimensions,
} from 'react-native';

import ContainerBgSVG from '../assets/container.bg.svg';

import shadowImage from '../assets/shadow.png';

type ContainerProps = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  scrollContainerStyle?: StyleProp<ViewStyle>;
  disableScroll?: boolean;
};

export default function Container(props: ContainerProps) {
  const initialDimensions = useWindowDimensions();
  const [dimensions, setDimensions] = useState(initialDimensions);

  function isPortrait() {
    return dimensions.height >= dimensions.width;
  }

  function getBgTransformStyles() {
    return {
      transform: [
        {
          rotate: isPortrait() ? '0deg' : '90deg',
        },
      ],
      top: isPortrait() ? 0 : -dimensions.height / 1.71,
      right: isPortrait() ? 0 : 90,
    };
  }

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      changedDimens => {
        setDimensions(changedDimens.screen);
      },
    );

    return () => subscription.remove();
  }, []);

  return (
    <View>
      <ContainerBgSVG
        style={[defaultContainerStyle.containerBg, getBgTransformStyles()]}
      />
      <ScrollView
        scrollEnabled={props.disableScroll !== true}
        contentContainerStyle={[
          defaultContainerStyle.containerScroll,
          props.scrollContainerStyle,
        ]}
        style={[defaultContainerStyle.content, props.contentStyle]}>
        <View style={[defaultContainerStyle.childrenArea, props.style]}>
          {props?.children ?? null}
        </View>
      </ScrollView>

      <Image
        source={shadowImage}
        height={50}
        style={[
          defaultContainerStyle.shadowImage,
          {
            top: dimensions.height / 1.5,
            width: dimensions.width,
          },
        ]}
        resizeMode="cover"
      />
    </View>
  );
}

const defaultContainerStyle = StyleSheet.create({
  content: {
    padding: 24,
    zIndex: 999,
  },
  childrenArea: {
    zIndex: 99,
  },
  containerBg: {
    zIndex: 1,
    position: 'absolute',
  },
  shadowImage: {
    height: 50,
    position: 'absolute',
    zIndex: 9,
  },
  containerScroll: {paddingBottom: 48},
});
