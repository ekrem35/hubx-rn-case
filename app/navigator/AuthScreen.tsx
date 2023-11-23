import {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import {useAppSelector} from '../state/hooks';

export default function AuthScreen() {
  const hasUserSeenGuiding = useAppSelector(
    state => state.storage.hasUserSeenGuiding,
  );

  const navigation = useNavigation();

  useEffect(() => {
    navigation.navigate(
      (hasUserSeenGuiding ? 'HomeScreen' : 'WelcomeScreen') as never,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
