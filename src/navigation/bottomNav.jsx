import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import GeneralChat from '../pages/GeneralChat';
import Chats from '../pages/Chats';
import { AntDesign, MaterialIcons,Feather } from '@expo/vector-icons';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';


const Tab = createBottomTabNavigator();
const BottomNav = () => {
  return (
    <Tab.Navigator
     screenOptions={({route})=>({
         tabBarActiveTintColor:"#FDC82E",
         tabBarInactiveTintColor:"gray"
     })}
    >
        <Tab.Screen
            name='GeneralChat'
            component={GeneralChat}
            options={{
                headerShown:false,
                tabBarIcon:({color})=>(
                    <AntDesign name="message1" size={26} color={color} />
                )
            }}
        />

        <Tab.Screen
            name='Chats'
            component={Chats}
            options={{
                headerShown:false,
                tabBarIcon:({color})=>(
                    <MaterialIcons name="message" size={26} color={color} />
                )
            }}
        />

        <Tab.Screen
            name='Profile'
            component={Profile}
            options={{
                headerShown:false,
                tabBarIcon:({color})=>(
                    <Feather name="user" size={26} color={color} />
                )
            }}
        />

        <Tab.Screen
            name='Settings'
            component={Settings}
            options={{
                headerShown:false,
                tabBarIcon:({color})=>(
                    <AntDesign name="setting" size={26} color={color} />
                )
            }}
        />
    </Tab.Navigator>
  )
}

export default BottomNav

const styles = StyleSheet.create({})