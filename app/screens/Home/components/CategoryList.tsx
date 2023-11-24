import React, {useEffect, useState} from 'react';

import {FlatList, View, Image, Alert, Text} from 'react-native';

import * as categoriesApi from '../../../api/categories';

import {ICategory} from '../../../lib/types';

export default function CategoryList() {
  const [categories, setCategories] = useState<ICategory[]>([]);

  async function getCategories() {
    try {
      const data = await categoriesApi.getAllCategories();

      setCategories(data);
    } catch (err) {
      Alert.alert("Couldn't fetch categories", (err as Error).message);
    }
  }

  const listItemkeyExtractor = (item: ICategory, index: number) =>
    `${item.id}-${index}`;

  const renderCategoryItem = ({item}: {item: ICategory; index: number}) => (
    <View
      style={{
        borderWidth: 0.5,
        borderColor: '#29BB892E',
        borderRadius: 12,
        backgroundColor: '#F4F6F6',
        marginTop: 16,
      }}>
      <Image
        borderRadius={12}
        style={{
          height: 152,
          width: 158,
        }}
        source={{uri: item.image.url}}
      />
      <Text
        style={{
          position: 'absolute',
          top: 16,
          left: 16,
          maxWidth: '60%',
          minHeight: 40,
          maxHeight: 70,

          fontFamily: 'Rubik',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: 16,
          lineHeight: 21,
          letterSpacing: -0.32,
          color: '#13231B',
        }}>
        {item.title}
      </Text>
    </View>
  );

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View>
      <FlatList
        keyExtractor={listItemkeyExtractor}
        renderItem={renderCategoryItem}
        contentContainerStyle={{
          marginTop: 8,
        }}
        numColumns={2}
        data={categories}
        maxToRenderPerBatch={4}
        columnWrapperStyle={{
          justifyContent: 'space-evenly',
        }}
      />
    </View>
  );
}
