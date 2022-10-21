import { Alert, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(true)
    const getData = async () => {

        try {
            const response = await fetch("https://blooming-caverns-51497.herokuapp.com/data")
            const data = await response.json()
            setdata(data)
            setloading(false)
        } catch (error) {
            Alert.alert(error)
        }
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <View>
            <FlatList data={data}

                renderItem={({ item }) => {
                    return (
                        <View style={styles.viewStyle}>
                            <Image style={styles.imgStyle} resizeMode='cover' source={{ uri: item.image_url }} />
                            <Text style={styles.textStyles}>{item.name}</Text>
                            <Text style={styles.textStyles}>{item.mfgby} </Text>
                            <Text style={styles.textStyles}>{item.description}</Text>
                        </View>
                    )
                }} />
        </View >
    )
}

export default UseEffect

const styles = StyleSheet.create({
    imgStyle: {
        height: 150,
        width: 150
    },
    viewStyle: {
        borderColor: "black",
        borderWidth: 1,
        flexDirection: 'row'
    },
    textStyles: {
        fontSize: 20,
        justifyContent: "center",
        alignContent: "center"
    }
})