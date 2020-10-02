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
        onPress={() => {
          props.navigation.navigate('CategoryMeals', {
            title: itemData.item.title,
          })
        }}
      >
        <View
          style={{
            ...styles.gridItem,
            width: (width - 70) / 2,
            backgroundColor: itemData.item.color,
            borderRadius: 10,
            shadowColor: 'black',
            shadowOpacity: 0.26,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 10,
            elevation: 3,
            padding: 20,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}
        >
          <Text style={styles.title}>{itemData.item.title}</Text>
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
      style={{ margin: 10 }}
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
    margin: 12,
    height: 150,
    backgroundColor: '#ddd',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 14,
    textAlign: 'right',
  },
})

CategoriesScreen.navigationOptions = {}

export default CategoriesScreen
