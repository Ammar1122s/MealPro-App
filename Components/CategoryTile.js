import React from 'react'
import { View,Text,Pressable,StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native'

function CategoryTile(props) {
  const navigation = useNavigation();
  return (
  <View style = {[styles.main,{backgroundColor: "#ECECEC"}]}>
    <Pressable android_ripple={{color:"blue"}}
     style = {({pressed}) => 
      [styles.press, pressed ? styles.buttonPressed : null]
     } onPress= {props.onPress}   >
      <View style ={styles.textContanier}>
        <Text>{props.title}</Text>

        </View>
    </Pressable>
  </View>
  )
}


export default CategoryTile

const styles = StyleSheet.create({
  main:{
    flex:1,
    height:70,
    width:"80%",
    borderWidth:2,
    borderRadius:10,
    margin:10,
    elevation:5,
    shadowColor:"black",
    shadowOpacity:0.2,
    shadowOffset:{width:0, height:2},
    shadowRadius:8,
    overflow:"hidden"
  },
  press:{
    flex:1,
  },

  buttonPressed:{
    opacity:0.4
  },

  textContanier:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    
  }

})