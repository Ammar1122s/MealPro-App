import React from 'react'
import {Pressable,Text,View,StyleSheet} from 'react-native'
import {Ionicons} from "@expo/vector-icons"

function buttonIcon(props) {
  return (
    <Pressable style={({pressed})=> pressed ? styles.pressed : null} onPress={props.onPress}>
        <Ionicons name={props.icon} size={props.size} color="white" />
        
    </Pressable>
    
    
  )
}

export default buttonIcon

const styles = StyleSheet.create({
    pressed:{
        opacity:0.5,
        
    },
  
})