import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Counter = () => {
    const [counter, setcounter] = useState(0)
    // const counter=10
    return (
        <View>
            <Text style={styles.counter}>{counter}</Text>
            <View style={styles.button_group}>
                <TouchableOpacity style={[styles.commonButton, styles.subtract]} onPress={() => { setcounter(counter + 10) }} >
                    <Text style={styles.commonText}>+10</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.commonButton, styles.reset]} onPress={() => { setcounter(0) }} >
                    <Text style={styles.commonText}>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.commonButton, styles.add]} onPress={() => { counter > 0 ? setcounter(counter - 10) : null }} >
                    <Text style={styles.commonText}>-10</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({

    button_group: {
        width: "100%",
        display: "flex",
        alignItems: "center",
    },

    counter: {
        fontSize: 80,
        textAlign: "center",
        width: "100%",
        padding: 20,
        marginTop: 60,
        // marginBottom: 30,
    },
    commonButton: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
        borderRadius: 4,
        backgroundColor: "black",
        width: 200,
        height: 80,
    },
    commonText: {
        fontSize: 25,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
    },
})