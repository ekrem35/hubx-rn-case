import React from 'react';

import {
  View,
  StatusBar,
  ImageBackground,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import imageBg from './assets/images/Imagebackground.png';

import PlanLimitedIconSvg from './assets/images/plan.limited.icon.svg';

function PlanDetailItem() {
  return (
    <View
      style={{
        width: 156,
        height: 130,
        borderRadius: 14,
        backgroundColor: '#FFFFFF14',
        padding: 16,
      }}>
      <PlanLimitedIconSvg />
      <Text
        style={{
          fontFamily: 'Rubik',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: 20,
          lineHeight: 24,
          display: 'flex',
          alignItems: 'center',
          letterSpacing: 0.38,
          color: '#FFFFFF',
          marginTop: 16,
        }}>
        Unlimited
      </Text>
      <Text
        style={{
          fontFamily: 'Rubik',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: 13,
          lineHeight: 18,
          display: 'flex',
          alignItems: 'center',
          letterSpacing: -0.08,
          color: 'rgba(255, 255, 255, 0.7)',
          marginTop: 4,
        }}>
        Plant Identify
      </Text>
    </View>
  );
}

export default function Plans() {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={imageBg}
        imageStyle={styles.imageBg}
        style={styles.bgImageStyle}>
        <LinearGradient
          colors={['#101e17', '#101e17', '#101e1700']}
          start={{x: 0, y: 1}}
          style={styles.gradientBg}
          end={{x: 0, y: 0}}>
          <ScrollView
            contentContainerStyle={{
              padding: 24,
            }}>
            <View
              style={{
                flex: 1,
                paddingTop: 260,
              }}>
              <View>
                <Text style={styles.titleTxt}>
                  <Text
                    style={{
                      fontWeight: '800',
                    }}>
                    PlantApp
                  </Text>{' '}
                  Premium
                </Text>

                <Text style={styles.decriptionText}>Access All Features</Text>
              </View>

              <ScrollView
                horizontal
                contentContainerStyle={{
                  paddingHorizontal: 24,
                }}
                style={{
                  marginTop: 20,
                  marginLeft: -24,
                }}>
                <PlanDetailItem />
              </ScrollView>
            </View>
          </ScrollView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  gradientBg: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 999,
  },
  imageBg: {
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    bottom: '30%',
  },
  bgImageStyle: {
    flex: 1,
    position: 'relative',
  },
  titleTxt: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 30,
    lineHeight: 47,
    textTransform: 'capitalize',
    color: '#FFFFFF',
  },
  decriptionText: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 17,
    lineHeight: 24,
    letterSpacing: 0.38,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});
