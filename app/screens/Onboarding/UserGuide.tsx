import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  LayoutRectangle,
} from 'react-native';

import Swiper from 'react-native-swiper';

import Container from './components/Container';
import Button from 'components/Button';

import UserGuideSVG from './assets/userguide-svg';
import brushImg from './assets/brush.png';
import shadowUnderPhoneImg from './assets/shadow-under-phone.png';

export default function UserGuide() {
  const [titleLayout, setTitleLayout] = useState<LayoutRectangle>({
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  });

  function onLayoutTitle(layout: LayoutRectangle) {
    setTitleLayout(layout);
  }

  return (
    <View style={{flex: 1}}>
      <Swiper
        activeDotStyle={styles.swiperActiveDotStyle}
        dotStyle={styles.swiperDotStyle}
        loop={false}
        style={styles.wrapper}
        showsButtons={false}>
        <View style={styles.slide1}>
          <Container>
            <Text
              onLayout={ev => onLayoutTitle(ev.nativeEvent.layout)}
              style={styles.title}>
              Take a photo to <Text style={{fontWeight: '800'}}>identify</Text>{' '}
              the the plant!
            </Text>

            <View
              style={[
                {
                  position: 'absolute',
                  top: titleLayout.y + 38,
                  left: titleLayout.x + 176,
                },
              ]}>
              <Image source={brushImg} />
            </View>

            <View style={{alignItems: 'center', marginTop: 19}}>
              <Image
                source={shadowUnderPhoneImg}
                resizeMode="stretch"
                style={styles.shadowImg}
              />
              <UserGuideSVG />
            </View>

            <Button>Continue</Button>
          </Container>
        </View>

        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>

        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  swiperDotStyle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#13231B',
  },
  swiperActiveDotStyle: {width: 6, height: 6, backgroundColor: '#13231B40'},
  title: {
    gap: 8,
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 28,
    lineHeight: 33,
    letterSpacing: -1,
    color: '#13231B',
    marginTop: 12,
  },
  slide1: {
    flex: 1,
    paddingBottom: 32,
  },
  shadowImg: {
    left: -24,
    right: -24,
    height: 120,
    position: 'absolute',
    bottom: 180,
    width: Dimensions.get('screen').width,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
