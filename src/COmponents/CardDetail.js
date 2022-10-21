import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


const CardDetail = ({ textdata }) => {
    return (
        <View>
            <Text style={styles.textStyle}>{textdata}</Text>
            <Image style={styles.imageStyle} source={require("../../assets/1662731986525.jpg")} />

        </View>
    )
}

export default CardDetail

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 10,
        textAlign: "center",
        fontSize: 50,
        color: "black"

    },
    imageStyle: {
        height: 200,
        width: 200
    }
})