import React from 'react';

import {SafeAreaView} from 'react-native';

import {INavigation} from '../../lib/types';
import Button from 'components/Button';

type Props = {
  navigation: INavigation;
};

export default function DiagnoseScreen(props: Props) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#a139Ff50',
        padding: 24,
        justifyContent: 'flex-end',
      }}>
      <Button onPress={() => props.navigation.navigate('WelcomeScreen')}>
        Go to onboarding
      </Button>
    </SafeAreaView>
  );
}
