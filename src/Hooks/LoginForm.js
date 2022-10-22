import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox'
const LoginForm = ({ navigation }) => {
    const [agree, setagree] = useState(false)
    const [username, setusername] = useState("")
    const [Password, setPassword] = useState("")
    const submit = () => {
        if (username === "subham" && Password === "dey") {

            Alert.alert("thankyou")
            navigation.navigate('Use');
        } else {
            return Alert.alert("wrong credentials")

        }
    }
    // console.log(username, Password);
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}>Login Form</Text>
            <Text style={styles.description}>Hello please fillup the form </Text>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter Your Name</Text>
                <TextInput onChangeText={(text) => setusername(text)} style={styles.inputStyle} placeholder={"Enter your username"} value={username} autoCapitalize={"none"} autoCorrect={false} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter Your Password</Text>
                <TextInput onChangeText={(text) => setPassword(text)} placeholder='Enter your passoword' value={Password} style={styles.inputStyle} autoCapitalize={"none"} autoCorrect={false} secureTextEntry={true} />
                <View style={styles.wrapper}>
                    <Checkbox value={agree} onValueChange={() => setagree(!agree)} color={agree ? "#4630EB" : undefined} />
                    <Text style={styles.wrapperText}> ALL the Tand C are agreed</Text>

                </View>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => submit()}>
                    <Text style={styles.submitStyle}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    mainContainer: {
        height: '80%',
        paddingHorizontal: 30,
        paddingTop: 30,
        backgroundColor: '#fff'
    },
    mainHeader: {
        fontSize: 25,
        color: '#344055',
        fontWeight: '500',
        paddingVertical: 10,
    },
    description: {
        fontSize: 20,
        color: '#7d7d7d',
        padding: 10,


    },
    inputContainer: {

        paddingVertical: 10
    },
    labels: {
        fontSize: 18,
        color: '#7d7d7d',
    },
    inputStyle: {
        borderWidth: 2,
        borderColor: 'rgba(0,0,0,0.3)',
        paddingVertical: 7,
        borderRadius: 10,
        fontSize: 18,
        padding: 14
    },
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 30
    },
    wrapperText: {
        padding: 3
    },
    buttonStyle: {
        borderRadius: 40,
        backgroundColor: "black",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitStyle: {
        color: "white"
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        justifyContent: 'center',
        alignContent: 'center',
        fontWeight: '600'
    },
})