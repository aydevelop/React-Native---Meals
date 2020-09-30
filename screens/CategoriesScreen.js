import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  Dimensions,
} from 'react-native'

import { CATEGORIES } from '../data/dummy'

const { height, width } = Dimensions.get('window')
const renderGridItem = (itemData) => {
  return (
    <View style={{ ...styles.gridItem, width: (width - 70) / 2 }}>
      <Text>{itemData.item.title}</Text>
    </View>
  )
}

export const CategoriesScreen = (props) => {
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    margin: 15,
    height: 20,
    backgroundColor: '#ddd',
    height: 55,
  },
})

export default CategoriesScreen
