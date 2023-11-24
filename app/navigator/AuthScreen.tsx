import {useEffect} from 'react';

import {CommonActions, useNavigation} from '@react-navigation/native';

import {useAppSelector} from '../state/hooks';

export default function AuthScreen() {
  const hasUserSeenGuiding = useAppSelector(
    state => state.storage.hasUserSeenGuiding,
  );

  const navigation = useNavigation();

  useEffect(() => {
    navigation.dispatch(
      CommonActions.reset({
        routes: [
          {
            name: hasUserSeenGuiding ? 'TabNavigatior' : 'WelcomeScreen',
          },
        ],
      }),
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
