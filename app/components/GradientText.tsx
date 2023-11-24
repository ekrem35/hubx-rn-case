import React from 'react';
import {Text, TextProps} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

interface IGradientText extends TextProps {
  gradient: {
    colors: string[];
    start: {
      x: number;
      y: number;
    };
    end: {
      x: number;
      y: number;
    };
  };
}

const GradientText = (props: IGradientText) => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={props.gradient.colors}
        start={props.gradient.start}
        end={props.gradient.end}>
        <Text {...props} style={[props.style, {opacity: 0}]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
