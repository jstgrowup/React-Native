import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatListDemo = () => {
  const names = [{
    index: 1,

    name: "subham"
  }, {
    index: 2,
    name: "dey"
  }, {
    index: 3,
    name: "React Native"
  }, {
    index: 4,
    name: "guru"
  }, {
    index: 5,
    name: "guru"
  }, {
    index: 6,
    name: "guru"
  }, {
    index: 7,
    name: "guru"
  }, {
    index: 8,
    name: "guru"
  }, {
    index: 9,
    name: "guru"
  }]
  return (
    <View>
      <FlatList style={styles.listStyle} keyExtractor={(key) => { return key.index }}
        data={names}
        // horizontal
        // inverted
        //  numColumns={3}
        renderItem={({ item }) => {
          // here the element is the whole data like all the datas 
          return <Text style={styles.textStyles}>{item.name}</Text>
        }} />
    </View >
  )
}

export default FlatListDemo

const styles = StyleSheet.create({
  textStyles: {
    color: "red",
    fontSize: 40,
    padding: 30,
    backgroundColor: "blue",
    margin: 20,
    color: "white"
  },
  listStyle: {
    textAlign: "center",
    margin: 20,
    padding: 10
  }
})