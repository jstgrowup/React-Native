import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const First = () => {
  
    return (
        <View>
            <Text style={styles.textStyleOne}>React Native is best</Text>
            <Text style={styles.textStyleTwo}>I Love React native</Text>
            <Text style={styles.textStyleThree}>Lets start</Text>

        </View>
    )
}

export default First

const styles = StyleSheet.create({
    textStyleOne: {
        fontSize: 40,
        color: "red",
        fontWeight: "bold"
    },
    textStyleTwo: {
        color: "blue",
        fontWeight: "700",
        fontSize: 50


    },
    textStyleThree: {
        color: "green",
        fontWeight: "600",
        fontSize: 30
    }

})