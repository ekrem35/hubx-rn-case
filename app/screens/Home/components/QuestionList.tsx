import React, {useEffect, useState} from 'react';

import {
  Alert,
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';

import {IQuestion} from '../../../lib/types';
import colors from '../../../lib/colors';

import * as questionApi from '../../../api/questions';

export default function QuestionList() {
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  async function getQuestions() {
    try {
      const response = await questionApi.getAllQuestions();

      setQuestions(response.data);
    } catch (err) {
      Alert.alert("Couldn't fetch questions", (err as Error).message);
    }
  }

  function onPressItem(link: string) {
    try {
      Linking.openURL(link);
    } catch (error) {
      Alert.alert('Link is not reachable');
    }
  }

  useEffect(() => {
    getQuestions();
  }, []);

  const listItemkeyExtractor = (item: IQuestion, index: number) =>
    `${item.id}-${index}`;

  const renderQuestionItem = ({
    item,
    index,
  }: {
    item: IQuestion;
    index: number;
  }) => (
    <TouchableOpacity onPress={() => onPressItem(item.uri)}>
      <Image
        source={{
          uri: item.image_uri,
        }}
        borderRadius={12}
        style={[
          styles.image,
          {
            marginLeft: index > 0 ? 10 : 0,
          },
        ]}
      />
      <View
        style={[
          styles.title,
          {
            left: index > 0 ? 10 : 0,
          },
        ]}>
        <Text
          style={{
            color: colors.white,
          }}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.content}
      horizontal
      data={questions}
      renderItem={renderQuestionItem}
      keyExtractor={listItemkeyExtractor}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 16,
    marginLeft: -24,
    marginRight: -24,
  },
  content: {
    paddingHorizontal: 24,
  },
  title: {
    position: 'absolute',
    width: 240,
    justifyContent: 'center',
    paddingHorizontal: 14,
    bottom: 0,
    height: 64,
  },
  image: {
    width: 240,
    height: 164,
  },
});
