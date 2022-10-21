import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlexBox = () => {
    return (
        <View style={styles.viewStyle}>
            <Text styles={styles.textStyles}>FlexBox</Text>
            <Text styles={styles.textStyles}>adsasghf</Text>
            <Text styles={styles.textStyles}>okay</Text>
            <Text styles={styles.textStyles}>dshfabsdhf</Text>
        </View>
    )
}

export default FlexBox

const styles = StyleSheet.create({
    textStyles: {
        borderColor: "#2C5F2D",
        backgroundColor: "black",
        color: "white"



    },
    viewStyle: {
        // padding: 100,
        width: 370,
        height: 500,
        marginTop: 100,
        marginHorizontal: 10,
        borderWidth: 3,
        borderColor: "#101820FF",
        backgroundColor: "lightblue",
        flexDirection: "row"





    }
})