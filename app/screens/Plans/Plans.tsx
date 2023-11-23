import React from 'react';

import {
  View,
  StatusBar,
  ImageBackground,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Button from 'components/Button';

import PlanFeatureItem from './components/PlanFeatureItem';
import PlanList from './components/PlanList';

import imageBg from './assets/images/Imagebackground.png';
import CloseIconSVG from './assets/images/close.icon.svg';

export default function Plans() {
  return (
    <View style={{flex: 1}}>
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
            <TouchableOpacity
              style={{
                alignSelf: 'flex-end',
                marginBottom: 160,
              }}>
              <CloseIconSVG />
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
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
                <PlanFeatureItem name="unlimited" />
                <PlanFeatureItem name="faster" style={{marginLeft: 8}} />
                <PlanFeatureItem name="detailed" style={{marginLeft: 8}} />
              </ScrollView>

              <PlanList style={{marginTop: 24}} />

              <Button
                style={{
                  marginTop: 26,
                }}>
                Try free for 3 days
              </Button>

              <Text style={styles.subscriptionDesc}>
                After the 3-day free trial period you’ll be charged ₺274.99 per
                year unless you cancel before the trial expires. Yearly
                Subscription is Auto-Renewable
              </Text>

              <View style={styles.termsAndCondsContainer}>
                <TouchableOpacity>
                  <Text style={styles.termsAndCondsText}> Terms</Text>
                </TouchableOpacity>
                <Text style={styles.termsAndCondsText}> • </Text>
                <TouchableOpacity>
                  <Text style={styles.termsAndCondsText}> Privacy</Text>
                </TouchableOpacity>
                <Text style={styles.termsAndCondsText}> • </Text>
                <TouchableOpacity>
                  <Text style={styles.termsAndCondsText}> Restore</Text>
                </TouchableOpacity>
              </View>
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
  subscriptionDesc: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 9,
    lineHeight: 11.88,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.52)',
    marginTop: 8,
  },
  termsAndCondsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  termsAndCondsText: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 13,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.5)',
  },
});
