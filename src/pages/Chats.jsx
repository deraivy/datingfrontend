import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import SingleChat from './singleChat';
import { useNavigation } from '@react-navigation/native'

const Chats = () => {
  const navigation = useNavigation();
  const chats = [
    {
      "image": require('../../assets/Profile01.png'),
      name: 'Feranmi Micheal',
      mag: 'whtas up? im checking up on you ',
      time: '21:05'
    },
    {
      "image": require('../../assets/Profile01.png'),
      name: 'Joy Micheal',
      mag: 'whtas up? im checking up on you ',
      time: '21:05'
    },
    {
      "image": require('../../assets/Profile11.png'),
      name: 'Chi Chi',
      mag: 'whtas up? im checking up on you ',
      time: '21:05'
    },
    {
      "image": require('../../assets/Profile05.png'),
      name: 'emeneks',
      mag: 'whtas up? no forget next meeting ooo ',
      time: '21:05'
    },
    {
      "image": require('../../assets/Profile03.png'),
      name: 'Sulaimon Aro',
      mag: 'whtas up? im checking up on you ',
      time: '21:05'
    },
    {
      "image": require('../../assets/Profile02.png'),
      name: 'Nnamdi Nwanoroh',
      mag: 'whtas up? im checking up on you ',
      time: '21:05'
    },
    {
      "image": require('../../assets/Profile11.png'),
      name: 'Angel',
      mag: 'dont forgrt to buy the food oo',
      time: '21:05'
    },
    {
      "image": require('../../assets/Profile01.png'),
      name: 'Feranmi Micheal',
      mag: 'whtas up? im checking up on you ',
      time: '21:05'
    },
    {
      "image": require('../../assets/Profile05.png'),
      name: 'Feranmi Micheal',
      mag: 'whtas up? im checking up on you ',
      time: '21:05'
    },
    {
      "image": require('../../assets/Profile06.png'),
      name: 'Feranmi Micheal',
      mag: 'whtas up? im checking up on you ',
      time: '21:05'
    },
    {
      "image": require('../../assets/Profile03.png'),
      name: 'Feranmi Micheal',
      mag: 'whtas up? im checking up on you ',
      time: '21:05'
    },
  ]
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Message</Text>
        <TouchableOpacity>
          <Ionicons name="ios-search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {chats.map((index, value) => (
          <TouchableOpacity style={styles.sectionContainer} key={value} onPress={()=>{navigation.navigate(SingleChat)}}>
            <View style={styles.avatarContainer} >
              <Image source={index.image} style={styles.avatar} />
              <View>
                <Text style={styles.nameChat}>{index.name}</Text>
                <Text style={styles.messageChat} >{index.mag}</Text>
              </View>
            </View>
            <View style={styles.dotContainer}>
              <View style={styles.dot} />
              <Text style={styles.time}>21:05</Text>
            </View>
          </TouchableOpacity>

        ))}

      </ScrollView>
    </View>
  )
}

export default Chats

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20
  },
  header: {
    backgroundColor: '#FDC82E',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  headerText: {
    fontWeight: '700',
    fontSize: 28,
    letterSpacing: 2
  },
  sectionContainer: {
    paddingHorizontal: 20,
    marginTop: 15,
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
  }
})