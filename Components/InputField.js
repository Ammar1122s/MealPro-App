import React from 'react'
import { View , Text , StyleSheet, TextInput} from 'react-native'

function InputField(props) {
  return (
    <View style={props.steps ? [styles.main,{height:100}]:styles.main }>
        <TextInput style={styles.input}/>
    </View>
  )
}

export default InputField

const styles = StyleSheet.create({
    main:{
        backgroundColor:"grey",
        height:35,
        width:200,
        borderRadius:10
    },
    input:{
        padding:5,
    }
})