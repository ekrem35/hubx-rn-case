import React, {useRef, useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  LayoutRectangle,
  ScrollView,
} from 'react-native';

import Swiper from 'react-native-swiper';

import {useAppDispatch} from '../../state/hooks';

import {setHasUserSeenGuiding} from '../../state/slices/storage';

import Container from './components/Container';
import Button from 'components/Button';

import UserGuideSVG from './assets/userguide-svg';
import brushImg from './assets/brush.png';
import brushLongImg from './assets/brush_long.png';
import shadowUnderPhoneImg from './assets/shadow-under-phone.png';
import FlatPhoneSVG from './assets/flat_phone.svg';
import ArtWorkSVG from './assets/art_work.svg';

import spray_image from './assets/object_spray.png';
import sun_image from './assets/object_sun.png';

import colors from '../../lib/colors';
import {INavigation} from '../../lib/types';

type PageProps = {onPressNext: () => void};

function FirstPage({onPressNext}: PageProps) {
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
      <ScrollView
        contentContainerStyle={{
          padding: 24,
        }}>
        <Text
          onLayout={ev => onLayoutTitle(ev.nativeEvent.layout)}
          style={styles.title}>
          Take a photo to <Text style={{fontWeight: '800'}}>identify</Text> the
          the plant!
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
      </ScrollView>

      <View style={{padding: 24, paddingTop: 0, paddingBottom: 64}}>
        <Button onPress={onPressNext}>Continue</Button>
      </View>
    </View>
  );
}

function SecondPage({onPressNext}: PageProps) {
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
    <View style={{flex: 2}}>
      <ScrollView
        contentContainerStyle={{
          padding: 24,
        }}>
        <Text
          onLayout={ev => onLayoutTitle(ev.nativeEvent.layout)}
          style={styles.title}>
          Get plant <Text style={{fontWeight: '800'}}>care guides</Text>
        </Text>

        <View
          style={[
            {
              position: 'absolute',
              top: titleLayout.y + 38,
              left: titleLayout.x + 114,
            },
          ]}>
          <Image source={brushLongImg} />
        </View>

        <View
          style={{
            alignItems: 'center',
            marginTop: 79,
          }}>
          <View
            style={{
              width: 400,
              zIndex: 99,
            }}>
            <View
              style={{
                position: 'absolute',
                top: -48,
                right: 0,
              }}>
              <Image
                source={sun_image}
                resizeMode="contain"
                style={styles.sunImg}
              />
              <Image
                source={spray_image}
                resizeMode="contain"
                style={styles.sprayImg}
              />
              <ArtWorkSVG />
            </View>
          </View>
          <FlatPhoneSVG />
        </View>
      </ScrollView>

      <View style={{padding: 24, paddingTop: 0, paddingBottom: 64}}>
        <Button onPress={onPressNext}>Continue</Button>
      </View>
    </View>
  );
}

type Props = {
  navigation: INavigation;
};

export default function UserGuide({navigation}: Props) {
  const dispatch = useAppDispatch();

  const swiperRef = useRef<{scrollBy: (idx: number) => void}>(null);

  function onPressCloseGuiding() {
    dispatch(setHasUserSeenGuiding(true));

    navigation.navigate('Plans' as never);
  }

  return (
    <Container contentStyle={{padding: 0}} disableScroll>
      <Swiper
        ref={swiperRef as never}
        activeDotStyle={styles.swiperDotStyle}
        dotStyle={styles.swiperActiveDotStyle}
        loop={false}
        style={styles.wrapper}
        showsButtons={false}>
        <FirstPage
          onPressNext={() => swiperRef.current && swiperRef.current.scrollBy(1)}
        />
        <SecondPage onPressNext={() => onPressCloseGuiding()} />
      </Swiper>
    </Container>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  swiperDotStyle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: colors.darkGreen,
  },
  swiperActiveDotStyle: {
    width: 6,
    height: 6,
    backgroundColor: colors.darkGreen40,
  },
  title: {
    gap: 8,
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 28,
    lineHeight: 33,
    letterSpacing: -1,
    color: colors.darkGreen,
    marginTop: 12,
  },
  slide: {
    paddingBottom: 32,
  },
  shadowImg: {
    left: -24,
    right: -24,
    height: 80,
    position: 'absolute',
    bottom: 160,
    width: Dimensions.get('screen').width,
  },
  text: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 'bold',
  },
  sprayImg: {
    position: 'absolute',
    left: -60,
    top: -10,
    zIndex: 99,
    width: 148,
    height: 148,
  },
  sunImg: {
    position: 'absolute',
    right: 8,
    top: 32,
    zIndex: 99,
    width: 32,
    height: 32,
  },
});
