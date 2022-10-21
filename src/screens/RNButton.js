import { Button, Image, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import CardDetail from '../COmponents/CardDetail'

const RNButton = () => {
  return (
    <View>
      {/* <Text style={styles.textStyle} >Button</Text> */}
      {/* <Button title='first Button'
        onPress={() => {
          console.log("hey pressed button")
          Alert.alert("simple")
        }}
      // disabled
      />
      <TouchableOpacity
        onPress={() => {
          console.log("hey pressed on touchable opacity")
          Alert.alert("touchable opacity")
        }}
      > */}
      {/* what ever that is inside the touchable opacity will trugger the event thats it  */}
      <CardDetail textdata={"ashdgfs"} />

      {/* <Text>Touchable opacity</Text> */}
      {/* </TouchableOpacity> */}
    </View>
  )
}

export default RNButton

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 200,
    textAlign: "center",
    fontSize: 30
  },
  imageStyle: {
    height: 200,
    width: 200
  }
})