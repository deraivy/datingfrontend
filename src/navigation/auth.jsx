import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Sigin from '../sigin';
import SignUp from '../signup';
import BottomNav from './bottomNav';
import SingleChat from '../pages/singleChat';


const Auth = createStackNavigator();
const AuthNav = () => {
    return (
        <NavigationContainer>
            <Auth.Navigator>
                <Auth.Screen
                    name='Signin'
                    component={Sigin}
                    options={{
                        headerShown: false
                    }}
                />

                <Auth.Screen
                    name='SignUp'
                    component={SignUp}
                    options={{
                        headerShown: false
                    }}
                />
                <Auth.Screen
                    name='BottomNav'
                    component={BottomNav}
                    options={{
                        headerShown: false
                    }}
                />

                <Auth.Screen
                    name='SingleChat'
                    component={SingleChat}
                    options={{
                        headerShown: false
                    }}
                />



            </Auth.Navigator>
        </NavigationContainer>
    )
}

export default AuthNav

const styles = StyleSheet.create({})