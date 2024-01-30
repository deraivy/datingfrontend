import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SingleChat = () => {
    const [inputText, setInputText] = useState('');

    const navigation = useNavigation();

    const [chat, setChat] = useState([
        { id: 1, sender: "FeranmiMike", message: "Yo! what's up?", isMe: false },
        { id: 2, sender: "You", message: "Good day, I am fine...", isMe: true },
        { id: 3, sender: "You", message: "How are you doing today?", isMe: true },
        { id: 4, sender: "FeranmiMike", message: "So good, thank you", isMe: false },
        { id: 5, sender: "You", message: "Do have a nice time", isMe: true }
    ])
    const handleSendChat = () => {
        if (inputText.trim() === '') return;

        const newChat = {
            id: chat.length + 1,
            sender: 'You',
            message: inputText,
            isMe: true
        }

        setChat([...chat, newChat]);

        setInputText('');


    };


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.MergeHeader}>
                    <TouchableOpacity  onPress={()=> navigation.navigate('Chats')}>
                        <Ionicons name="chevron-back" size={18} color="black"/>
                    </TouchableOpacity>
                    <View style={styles.avatarHeader}>
                        <Image source={require('../../assets/Profile01.png')} style={styles.avatar} />
                        <Text>Jonny Drille</Text>
                    </View>
                </View>
                <View style={styles.MergeHeader}>
                    <View style={styles.avatarHeader}>
                        <TouchableOpacity >
                            <Ionicons name="md-videocam-outline" size={18} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Ionicons name="call-outline" size={18} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

            <Text style={styles.date}>14 September</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                {chat.map((msg) => (
                    <View
                        key={msg.id}
                        style={[styles.chatBubble, msg.isMe ? styles.myChat : styles.theirChat]}>
                        <Text style={styles.chatSender}>{msg.sender}</Text>
                        <Text style={styles.chatMessage}>{msg.message}</Text>
                    </View>

                ))}

            </ScrollView>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type a message"
                    value={inputText}
                    onChangeText={(text) => setInputText(text)}
                />
                <TouchableOpacity onPress={handleSendChat} style={styles.sendButton}>
                    <Feather name="send" size={20} color="black" />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default SingleChat

const styles = StyleSheet.create({
    container: {

    },
    header: {
        backgroundColor: '#FDC82E',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    MergeHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatarHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 10
    },
    avatar: {
        width: 30,
        height: 30
    },
    date: {
        textAlign: 'center',
        color: 'gray',
        padding: 14,
        fontSize: 14
    },
    chatBubble: {
        marginBottom: 16,
        padding: 12,
        maxWidth: '70%',
        borderRadius: 8,
    },
    chatSender: {
        fontWeight: 'bold',
        marginBottom: 4
    },
    chatMessage: {},
    myChat: {
        alignSelf: 'flex-end',
        backgroundColor: '#DCF8C6'
    },
    theirChat: {
        alignSelf: 'flex-start',
        backgroundColor: '#E0E0E0'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 24,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginRight: 16,
    },
    sendButton: {
        width: 30,
        height: 40,
        marginLeft: -50,
        backgroundColor: 'yellow',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})