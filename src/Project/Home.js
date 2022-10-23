
import { Image, Text, StyleSheet, View, style } from "react-native"
import React from 'react'

const Home = () => {
    return (
        <View style={styles.MainContainer}>
            <View style={styles.homeTop}>
                <Image resizeMode="contain" style={styles.headerImage} source={require("../../assets/student1.jpg")} />
                <Text style={styles.mainHeader}>Hey welcome</Text>
                <Text style={[styles.mainHeader, {
                    fontSize: 33, color: "blue"
                }]}> Subham dey</Text>
                <Text style={styles.paraStyle}>This is my first React Native mini project really excited to work on React native</Text>
            </View>
            <Home />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    textStyle: {
        color: "red",
        marginTop: 100
    },
    MainContainer: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        justifyContent: "space-between"
    },
    homeTop: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10

    },
    headerImage: {
        height: undefined,
        width: "100%",
        aspectRatio: 1,
        marginTop: 50,
        borderRadius: 20
    },
    mainHeader: {
        fontSize: 30,
        color: "red",
        textTransform: "uppercase",

    },
    paraStyle: {
        textAlign: "left",
        fontSize: 19,
        marginTop: 30,
        lineHeight: 26
    }
})