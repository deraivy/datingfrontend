import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const SignUp = () => {
  const navigation = useNavigation();
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = async () => {
        const apiUrl = `https://dating-api-icqd.onrender.com/api/user`
        const response = await axios.post(apiUrl, {
            name,
            username,
            email,
            phone,
            password
        })
        if (response.status === 201) {
            navigation.navigate('Login')
        }
        else (
            alert('This user cannot be registered')
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.register}>Register</Text>
            <Text>Sign up with your details to get started!</Text>
            <View style={styles.cardContainer}>
            <Text style={styles.label}>Name:</Text>
                <TextInput value={name} onChangeText={(text)=> setName(text)}
                    placeholder='Enter your fullname'
                    style={styles.inputField}
                />
                 <Text style={styles.label}>Username:</Text>
                <TextInput value={username} onChange={(text) => setUsername(text)}
                    placeholder='Enter your username'
                    style={styles.inputField}
                />
                <Text style={styles.label}>Email:</Text>
                <TextInput value={email} onChangeText={(text)=> setEmail(text)}
                    placeholder='Enter your email'
                    style={styles.inputField}
                />
                 
                <Text style={styles.label}>Phone number:</Text>
                <TextInput value={phone} onChangeText={(text)=> setPhone(text)}
                    placeholder='+234 000 000 0000'
                    style={styles.inputField}
                />
                <Text style={styles.label}>Password:</Text>
                <TextInput value={password} onChangeText={(text)=> setPassword(text)}
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
                <TouchableOpacity style={styles.buttonContainer} onPress={()=>{handleRegister}}>
                    <Text style={styles.button}>SignUp</Text>
                </TouchableOpacity>
                <View style={styles.butomContainer}>
                    <Text>
                        Already have an account?
                    </Text>
                    <TouchableOpacity >
                        <Text style={styles.login}>
                            SignIn
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SignUp

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