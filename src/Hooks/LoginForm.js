import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Checkbox from 'expo-checkbox'
const LoginForm = () => {
    const [agree, setagree] = useState(false)
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}>Login Form</Text>
            <Text style={styles.description}>Hello please fillup the form </Text>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter Your Name</Text>
                <TextInput style={styles.inputStyle} autoCapitalize={"none"} autoCorrect={false} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter Your Password</Text>
                <TextInput style={styles.inputStyle} autoCapitalize={"none"} autoCorrect={false} secureTextEntry={true} />
                <View style={styles.wrapper}>
                    <Checkbox value={agree} onValueChange={() => setagree(!agree)} />
                    <Text style={styles.wrapperText}> ALL the Tand C are agreed</Text>

                </View>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        paddingHorizontal: 30,
        paddingTop: 30,
        backgroundColor: '#fff'
    },
    mainHeader: {
        fontSize: 25,
        color: '#344055',
        fontWeight: '500',
        paddingTop: 20,
        paddingBottom: 15,
        textTransform: 'capitalize',
    },
    description: {
        fontSize: 20,
        color: '#7d7d7d',
        paddingBottom: 20,
        lineHeight: 25,
        fontFamily: 'regular',
    },
    inputContainer: {
        marginTop: 20,
    },
    labels: {
        fontSize: 18,
        color: '#7d7d7d',
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 25,
        fontFamily: 'regular',
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 1,
        fontFamily: 'regular',
        fontSize: 18
    },
    wrapper: {
        // paddingHorizontal: 10,
        // paddingVertical: 15,
        // paddingBottom: 30
        flexDirection: "row",
        // justifyContent:'center',
        alignItems: "center",
        marginTop: 15,
        marginBottom: 360
        // alignContent:"center"

    },
    wrapperText: {
        // paddingLeft: 30
        marginTop: 0,
    },
    buttonStyle: {
        borderRadius: 40,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        justifyContent: 'center',
        alignContent: 'center',
        fontWeight: '600'
    },
})