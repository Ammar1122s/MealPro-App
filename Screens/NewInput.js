import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import InputField from '../Components/InputField'

function NewInput() {
  return (
    <View style={styles.main}>
    <Text style ={styles.headerText} >Add a new Recepie</Text>
    <View style={styles.title}>
    <View style={{width:"30%"}}>
    <Text style={styles.subText}>Title</Text>
    </View>
    <View>
    <InputField steps={false}/>
    </View>
    </View>
    <View style={styles.title}>
    <View style={{width:"30%"}}>
    <Text style={styles.subText}>Ingredient</Text>
    </View>
    <View>
    <InputField steps={false}/>
    </View>
    </View>
    <View style={styles.title}>
    <View style={{width:"30%"}}>
    <Text style={styles.subText}>Steps</Text>
    </View>
    <View>
    <InputField steps={true}/>
    </View>
    </View>





    </View>
  )
}

export default NewInput

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:"white",
        alignContent:"center",
      
    },
    headerText:{
        textAlign:"center",
        marginTop:30,
        fontSize:22,
        fontWeight:"bold"
    },
    title:{
        margin:20,
        alignItems:"center",
        justifyContent:"space-evenly",
        flexDirection:"row"

    },
    subText:{
        fontSize:20
    }

})