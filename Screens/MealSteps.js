import React from 'react'
import { View,Text,StyleSheet,FlatList,Image,ScrollView } from 'react-native'
import {MEALS} from '../data/dummyData'
import { useEffect,useContext } from 'react'
import ButtonIcon from '../Components/buttonIcon'
import { FavContexts } from '../store/context/Fav_Context'

function MealSteps(props) {

    
    const id = props.route.params.id
    const imgUrl = MEALS.find((meal) => meal.id === id).imageUrl
    const steps = props.route.params.mealSteps
    const title = MEALS.find((meal) => meal.id === id ).title
    const ingredients = MEALS.find((meal) => meal.id === id ).ingredients


    const favMealCtxt = useContext(FavContexts)

    const isFav = favMealCtxt.ids.includes(id)


    
    function presshandler(){
       if (isFav) {
        favMealCtxt.removeFav(id)
       } else {
        favMealCtxt.addFav(id);
       }

    }

    useEffect(()=>{
        return(
            props.navigation.setOptions({
                headerRight: () => {
                    return <ButtonIcon onPress = {presshandler} icon = {isFav ? "star" : "star-outline"} 
                    size ={26}/>
                }
                
                
            })
        )
    },[presshandler])

  return (
    <>
    <View style = {styles.main} >
        <ScrollView>
        
    <View style = {styles.imgStyles}>
          <Image style ={{width:"100%",height:200}} source= {{uri:imgUrl}}/>
          </View>
    <View style = {styles.subMain}>
    <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={[styles.titleText,{fontSize:22,marginTop:14}]}>Ingredients</Text>             
    </View>
    <View style = {styles.inStyles}>
        {
            ingredients.map((ingredients)=>{
                return(
                    <View key={ingredients}>
                        <Text style={{color:"grey"}}>
                            {ingredients}
                        </Text>
                    </View>

                )
            })
        }
    </View>
<View style={[styles.title,{marginHorizontal:40}]}>
    <Text style={styles.titleText}>Steps</Text>
    </View>


   

   
    {
        steps.map((stepMeal,index)=>{
           
            return(
                
                <View key={stepMeal} style={styles.textView}>
                 <Text style={styles.text}>Step {index+1}: </Text> 
                 <Text style={{color:"white", fontSize:15,width:250,marginTop:10,}}>{stepMeal}</Text>
                 </View>
               
    
                )
        })
    }
    </View>
    </ScrollView>      
        
        {/* <View style = {styles.imgStyles}>
          <Image style ={{width:"100%",height:200}} source= {{uri:imgUrl}}/>
          </View>
     <View style = {styles.subMain}>
   
     
        <FlatList data={steps} renderItem={(itemData)=>{
            return(
            <View style={styles.textView}>
             <Text style={styles.text}>Step {itemData.index+1}: </Text> 
             <Text style={{color:"white", fontSize:15,width:250,marginTop:10,}}>{itemData.item}</Text>
             </View>

            )
        }}/>
          
    
        
        </View> */}

    




    </View>
    </>
  )
}

export default MealSteps

const styles = StyleSheet.create({
    main:{
       flex:1,
       padding:8
    },
    subMain:{
        width:"100%",
        backgroundColor:"#87364e",
        borderRadius:20,
        padding:8
    },
    text:{
        marginTop:10,
        lineHeight: 20,
        color:"black",
        fontSize:20,
        width:80
       
    },
    textView:{
        flexDirection:"row",
        height:80,
        alignItems:"center",
        justifyContent:"center"

    },
    imgStyles:{
        overflow:"hidden",
        borderRadius:12,
        marginBottom:10
    },
    title:{
        padding:5,
        justifyContent:"center",
        alignItems:"center",
       borderBottomWidth:2,
        borderBottomColor:"white",
        marginHorizontal:15,
        borderBottomEndRadius:5
    },
    titleText:{
        color:"white",
        fontSize:20,
        fontWeight:"bold"

    },
    inStyles:{
        marginTop:10,
        marginLeft:10
    }
})