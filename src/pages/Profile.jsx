import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';


const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <MaterialIcons name="keyboard-arrow-left" size={35} color="black" />
        <Text style={styles.title}>Profile</Text>
        <Entypo name="dots-three-vertical" size={24} color="black" />
      </View>
      <View style={styles.root}>
        <Image source={require('../../assets/beaut.jpeg')} style={styles.img} />
        <View style={styles.detailBox}>
          <Text style={styles.name}>Chidera Nwanoroh</Text>
          <Text style={styles.number}>xxxx xxx xxxx</Text>
        </View>
        <View>
          <Text style={styles.text}>Dashboard</Text>
          <View style={styles.dashboard}>
            <MaterialCommunityIcons name="folder" size={35} color="black" style={styles.icon} />
            <View style={styles.line}>
              <Text style={styles.lineText}>|</Text>
            </View>
            <View >
              <Text style={styles.txtOne}>Balance</Text>
              <Text style={styles.txtTwo}>Balance</Text>
            </View>
            <View>
              <Text style={styles.txtThree}>20000</Text>
              <Text style={styles.txtFour}>20000</Text>
            </View>
          </View>
        </View>
        <Text style={styles.text}>Settings</Text>
        <View>
          <TouchableOpacity style={styles.box}>
            <Text style={styles.message}>Password</Text>
            <MaterialIcons name="keyboard-arrow-right" size={30} color="black" style={styles.iconTwo} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.box}>
            <Text style={styles.message}>Email</Text>
            <MaterialIcons name="keyboard-arrow-right" size={30} color="black" style={styles.iconTwo} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.box}>
            <Text style={styles.message}>Fingerprint</Text>
            <MaterialIcons name="keyboard-arrow-right" size={30} color="black" style={styles.iconTwo} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.box}>
            <Text style={styles.message}>Support</Text>
            <MaterialIcons name="keyboard-arrow-right" size={30} color="black" style={styles.iconTwo} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.box}>
            <Text style={styles.message}>Sign Out</Text>
            <MaterialIcons name="keyboard-arrow-right" size={30} color="black" style={styles.iconTwo} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDC82E'
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 20,
    color: 'black'
  },
  root: {
    marginTop: 50,
    height: 700,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  img: {
    alignSelf: 'center',
    top: -50,
    width: 100,
    height: 100,
    borderRadius: 50
  },
  detailBox: {
    top: -30
  },
  name: {
    textAlign: 'center',
    fontSize: 20
  },
  number: {
    textAlign: 'center',
    fontSize: 18,
  },
  text: {
    fontSize: 18,
    paddingHorizontal: 20,
    padding: 5,
    fontWeight: '700'
  },
  dashboard: {
    width: 350,
    height: 100,
    backgroundColor: '#FDC82E',
    alignSelf: 'center',
    borderRadius: 20,
    flexDirection: 'row',

  },
  icon: {
    alignSelf: 'center',
    marginHorizontal: 50
  },
  line: {
    width: 1,
    height: '50%',
    backgroundColor: 'black',
    alignSelf: 'center',

  },
  txtOne: {
    marginLeft: 20,
    marginTop: 25,
    fontSize: 18,
    color: 'black'
  },
  txtTwo: {
    marginLeft: 20,
    color: 'black',
    fontSize: 18,
  },
  txtThree: {
    marginTop: 25,
    marginLeft: 20,
    fontSize: 18,
    color: 'black'
  },
  txtFour: {
    marginLeft: 20,
    color: 'black',
    fontSize: 18,
  },
  box: {
    width: '90%',
    height: 50,
    backgroundColor: '#f0f1f3',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:5
  },
  message: {
    padding: 10,
    fontSize: 18
  },
  iconTwo: {
    padding: 10
  }

})