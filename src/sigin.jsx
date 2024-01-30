import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Sigin = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.register}>Register</Text>
            <Text>Welcome back</Text>
            <View style={styles.cardContainer}>
                <Text style={styles.label}>Email:</Text>
                <TextInput
                    placeholder='Enter your email'
                    style={styles.inputField}
                />
                <Text style={styles.label}>Phone number:</Text>
                <TextInput
                    placeholder='+234 000 000 0000'
                    style={styles.inputField}
                />
                <Text style={styles.label}>Password:</Text>
                <TextInput
                    placeholder='password'
                    style={styles.inputField}
                    secureTextEntry
                />
                <Text style={styles.label}>Confirm assword:</Text>
                <TextInput
                    placeholder='confirm password'
                    style={styles.inputField}
                    secureTextEntry
                />
                <TouchableOpacity style={styles.buttonContainer} onPress={()=>{navigation.navigate('BottomNav')}}>
                    <Text style={styles.button}>SignIn</Text>
                </TouchableOpacity>
                <View style={styles.butomContainer}>
                    <Text>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}}>
                        <Text style={styles.login}>
                            SignUp
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Sigin

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: '#FDC82E'
    },
    register: {
        marginTop: 20,
        fontSize: 28,
        fontWeight: '700',
        letterSpacing: 2
    },
    cardContainer: {
        marginVertical: 30,
        padding: 20,
        shadowColor: 'rgba(0,0,0,0.3)',
        backgroundColor: 'white',
        borderRadius: 20,
        shadowOpacity: 2,
        elevation: 2,
        shadowOffset: { width: 2, height: 2 }
    },
    label: {
        fontSize: 16,
        color: 'gray'
    },
    inputField: {
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        marginVertical: 10
    },
    buttonContainer: {
        marginVertical: 20,
        backgroundColor: '#FDC82E',
        borderRadius: 20,
    },
    button: {
        paddingVertical: 15,
        textAlign: 'center',
    },
    butomContainer:{
        flexDirection:'row',
        gap:5,
        alignItems:'center'
    },
    login: {
        marginRight: 10,
        color: '#FDC82E',
        fontWeight: '800',
        fontSize:15
    },
})