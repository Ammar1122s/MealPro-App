import React from 'react'
import { View,Text,Image,StyleSheet,Pressable} from 'react-native'
import { Color } from '../data/Color'

let heightDetails;
function MealItemTile(props) {
    const urlImg = props.imgUrl
    {
        if (props.id=== 'm9') {
            heightDetails=450            
        } else {
            heightDetails=380
        }
    }

  return (
    <View style = {styles.main}>
    
        <View style = {styles.subMain}>
        <Pressable android_ripple={{color:"grey"}} style ={({pressed}) => 
        [styles.subMain, pressed ? styles.ios : null ] } onPress={props.onPress.bind(this,props.steps,props.id)} >
        <View style = {styles.textView}>
         <Text style={styles.text}>{props.title}</Text>
         </View>
         <View style ={styles.imageView} >
        <Image style={{width: "100%", height: 200}} source={{uri:props.imgUrl}} />
        </View>
        <View style = {styles.details}>
            <Text style ={styles.firstText}>Affordability:  
            <Text style = {styles.secoundText}> {props. affordability}</Text></Text>
            <Text style ={styles.firstText}>Complexity: 
            <Text style = {styles.secoundText}> {props. complexity}</Text></Text>
            <Text style ={styles.firstText}>Duration: 
            <Text style = {styles.secoundText}> {props. duration}</Text></Text>
            <Text style ={styles.firstText}>Ingredients:
            <Text style = {styles.secoundText}> {props. ingredients}</Text> </Text>

        </View>
        </Pressable>
        </View>
      
       
    </View>



  )
}

export default MealItemTile

const styles = StyleSheet.create({
    main:{
        flex:1,
        marginBottom:15
    },
    subMain:{
        alignItems:"center",
        height:heightDetails,
        width:"100%",
        backgroundColor:"#87364e",
        borderRadius:35,
        overflow:"hidden",
    
    },
    
    textView:{
        margin:10
    },
    ios:{
        opacity:0.7
    },
    text:{
        fontSize:20,
        color:"white"
    },
    imageView:{
        marginTop:7,
        borderRadius:30,
        overflow:"hidden",
        width:"90%",
        height:170
    },
    details:{
        padding:10

    },
    firstText:{
        color:"white"

    },
    secoundText:{
        color:"black"

    }

})