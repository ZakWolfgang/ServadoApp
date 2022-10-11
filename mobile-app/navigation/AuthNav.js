import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'

const AuthNav = createNativeStackNavigator(
    {
        Login: { screen: LoginScreen },
        Signup: { screen: SignupScreen },
        ForgotPassword: { screen: ForgotPasswordScreen }
    },
    { 
        initialRouteName: 'Login',
        headerMode: 'none'
    }
)

export default AuthNav

const styles = StyleSheet.create({})