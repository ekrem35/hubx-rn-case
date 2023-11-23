import {useNavigation} from '@react-navigation/native';

import {useAppSelector} from '../state/hooks';

export default function AuthScreen() {
  const hasUserSeenGuiding = useAppSelector(
    state => state.storage.hasUserSeenGuiding,
  );

  const navigation = useNavigation();

  navigation.navigate(
    (hasUserSeenGuiding ? 'HomeScreen' : 'WelcomeScreen') as never,
  );

  return null;
}
