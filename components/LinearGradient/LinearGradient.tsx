import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { smitPrimary, smitSecondary } from '@/constants/Colors'

type Props = {
  children?:React.ReactNode,
  style:object
}
const Header = ({children,style}:Props) => {
  return (
    <LinearGradient colors={[smitSecondary,smitPrimary]} style={[styles.container,style]}
    start={{x:0,y:0}} end={{x:1,y:0}}>
        {children}        
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
})

export default Header