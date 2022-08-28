import React, { useContext,useEffect,useState } from 'react'
import {Text,FlatList,View,StyleSheet} from "react-native"
import { MEALS } from '../data/dummyData'
import { FavContexts } from '../store/context/Fav_Context'
import MealItemTile from '../Components/MealItemTile'
function Fav(props) {

  function mealItemRender (itemData){
    return <MealItemTile 
    title={itemData.item.title} imgUrl = {itemData.item.imageUrl}
    affordability = {itemData.item.affordability} 
    complexity = {itemData.item.complexity}  duration ={itemData.item.duration}
    ingredients ={itemData.item.ingredients} 
    steps = {itemData.item.steps}
    onPress={pressHandler}
    id={itemData.item.id}/>      
  
  }

  const [present , setPresent] = useState(true);
  
function pressHandler(mealSteps,id,){
  props.navigation.navigate('MealSteps',{mealSteps:mealSteps, id:id,})
}


  const favMeals = useContext(FavContexts);

  const finalFavMeals = MEALS.filter((meals) => favMeals.ids.includes(meals.id))
 
  useEffect(()=>{ 
  if(favMeals.ids.length !== 0){
    setPresent(false)
  }
  else{
    setPresent(true)
  }
  },[favMeals])
  

  return (
    <View style = {styles.main}>
      { present ?
       <View style ={styles.textView}>
      <Text style={{color:"red", fontSize:30}}>Nothing in Favorites!</Text>
      </View>
        : null}
    <FlatList data={finalFavMeals} keyExtractor={(item) => item.id} renderItem={mealItemRender}/>
   </View>
  
  )
}

export default Fav

const styles = StyleSheet.create({
  main:{
      padding:20
  },
  textView:{
    alignItems:"center",
    justifyContent:"center",
    height:"100%"

  }
})