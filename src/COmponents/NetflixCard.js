import { Button, Image, Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NetflixCard = () => {
    return (
        <View>
            <Text >NetflixCard</Text>
            {/* <Image style={styles.imageStyle} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtHt-ifhEwHhzYwHdoiuYT8erSc4BrcINJ2gsblJrP&s" }} /> */}
            <Button title='wactch now'
                onPress={() => Linking.openURL("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtHt-ifhEwHhzYwHdoiuYT8erSc4BrcINJ2gsblJrP&s")} />
        </View>
    )
}

export default NetflixCard

const styles = StyleSheet.create({
    imageStyle: {
        height: undefined,
        width: "100%",
        aspectRatio: 1
    },
    header: {
        fontSize: 30,
        marginBottom: 20
    },
    poster: {
        width: 250,
        borderWidth: 1,
        alignItems: "center"
    },
    poster_info: {
        alignItems: "center",
        marginVertical: 10
    },
    poster_title: {
        fontSize: 20,
        marginBottom: 10
    },
    poster_text: {
        color: "#999",

    }
})