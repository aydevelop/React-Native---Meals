import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native'

import { CATEGORIES } from '../data/dummy'
const { height, width } = Dimensions.get('window')

export const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          props.navigation.navigate('CategoryMeals', {
            title: itemData.item.title,
          })
        }}
      >
        <View style={{ ...styles.gridItem, width: (width - 70) / 2 }}>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

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

CategoriesScreen.navigationOptions = {}

export default CategoriesScreen
