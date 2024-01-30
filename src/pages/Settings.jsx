import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const Settings = () => {
  return (
    <View style={styles.container}>
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
  )
}

export default Settings

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#FDC82E'
  },
  text: {
    fontSize: 20,
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
    margin: 5
  },
  message: {
    padding: 10,
    fontSize: 18
  },
  iconTwo: {
    padding: 10
  }

})