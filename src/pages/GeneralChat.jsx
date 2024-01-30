import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const GeneralChat = () => {
  const chats = [
    {
      image: require('../../assets/Profile01.png'),
      name: 'Feranmi Micheal',
      msg: "What's up? I am checking on you",
      time: "21:05"
    },
    {
      image: require('../../assets/Profile02.png'),
      name: 'Feranmi Micheal',
      msg: "What's up? I am checking on you",
      time: "21:05"
    },
    {
      image: require('../../assets/Profile03.png'),
      name: 'Feranmi Micheal',
      msg: "What's up? I am checking on you",
      time: "21:05"
    },
    {
      image: require('../../assets/Profile05.png'),
      name: 'Feranmi Micheal',
      msg: "What's up? I am checking on you",
      time: "21:05"
    },
    {
      image: require('../../assets/Profile06.png'),
      name: 'Feranmi Micheal',
      msg: "What's up? I am checking on you",
      time: "21:05"
    },
    {
      image: require('../../assets/Profile11.png'),
      name: 'Feranmi Micheal',
      msg: "What's up? I am checking on you",
      time: "21:05"
    },
    {
      image: require('../../assets/Profile01.png'),
      name: 'Feranmi Micheal',
      msg: "What's up? I am checking on you",
      time: "21:05"
    },
    {
      image: require('../../assets/Profile03.png'),
      name: 'Feranmi Micheal',
      msg: "What's up? I am checking on you",
      time: "21:05"
    },
    {
      image: require('../../assets/Profile05.png'),
      name: 'Feranmi Micheal',
      msg: "What's up? I am checking on you",
      time: "21:05"
    },
    {
      image: require('../../assets/Profile02.png'),
      name: 'Tim Gold',
      msg: "It is nice meeting you guy!",
      time: "01:09"
    },
    {
      image: require('../../assets/Profile11.png'),
      name: 'Grace Tom',
      msg: "Don't forget our next meeting",
      time: "11:00"
    },
    {
      image: require('../../assets/Profile02.png'),
      name: 'Tim Gold',
      msg: "It is nice meeting you guy!",
      time: "01:09"
    },
    {
      image: require('../../assets/Profile11.png'),
      name: 'Grace Tom',
      msg: "Don't forget our next meeting",
      time: "11:00"
    }
  ]
  const status = [
    { image: require('../../assets/Profile01.png'), name: 'you' },
    { image: require('../../assets/Profile02.png'), name: 'chidere' },
    { image: require('../../assets/Profile03.png'), name: 'tommy' },
    { image: require('../../assets/Profile05.png'), name: 'Tade' },
    { image: require('../../assets/Profile06.png'), name: 'chelsea' },
    { image: require('../../assets/Profile11.png'), name: 'jackkson' },
    { image: require('../../assets/Profile01.png'), name: 'feranmi' },
    { image: require('../../assets/Profile02.png'), name: 'chidere' },
  ]
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/Profile01.png')} style={styles.avatar} />
        <TouchableOpacity>
          <Ionicons name="ios-search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.message}>Messages</Text>
      <View style={styles.generalChat}>
        <View style={styles.status}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {status.map((data, index) => (
              <View key={index} style={styles.singleStatus}>
                <Image source={data.image} style={styles.avatar} />
                <Text>{data.name}</Text>
              </View>
            ))}
          </ScrollView>
          <View style={styles.line1} />
        </View>
        <View style={styles.others}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {chats.map((index, value) => (
              <View key={value}>
                <View style={styles.sectionContainer}>
                  <View style={styles.avatarContainer} >
                    <Image source={index.image} style={styles.avatar} />
                    <View>
                      <Text style={styles.nameChat}>{index.name}</Text>
                      <Text style={styles.messageChat} lineBreakMode>{index.msg}</Text>
                    </View>
                  </View>
                  <View style={styles.dotContainer}>
                    <View style={styles.dot} />
                    <Text style={styles.time}>{index.time}</Text>
                  </View>
                </View>
                <View style={styles.line} />
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

    </View>
  )
}

export default GeneralChat

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDC82E',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  avatar: {
    width: 40,
    height: 40
  },
  message: {
    paddingHorizontal: 20,
    color: 'white',
    letterSpacing: 3,
    fontSize: 24
  },
  generalChat: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'white'
  },
  status: {
    // marginLeft:15,
    paddingVertical: 15
  },
  singleStatus: {
    marginLeft: 15,
    paddingRight: 20,
    alignItems: 'center'
  },
  sectionContainer: {
    paddingHorizontal: 15,
    marginTop: 10,
    paddingBottom:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  nameChat: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  messageChat: {
    fontSize: 12,
    color: 'gray'
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  dot: {
    backgroundColor: 'red',
    height: 1,
    padding: 5,
    borderRadius: 10,
  },
  time: {
    fontSize: 12,
    color: 'gray'
  },
  line1: {
    height: 1,
    backgroundColor: 'gray',
    opacity:0.1,
    paddingHorizontal:20,
    marginTop: 10,
  },
  line: {
    height: 1,
    backgroundColor: 'gray',
    opacity:0.1,
    paddingHorizontal:20
  },
  others:{
    paddingBottom:100,
  }
})