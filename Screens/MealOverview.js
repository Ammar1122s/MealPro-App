import React from 'react'
import { View,Text,StyleSheet,FlatList } from 'react-native'
import {useRoute} from '@react-navigation/native'
import {MEALS,CATEGORIES} from '../data/dummyData'
import MealItemTile from '../Components/MealItemTile'
import { useEffect } from 'react'


function MealOverview(props) {
    // const route = useRoute();
    // route.params.categoryId;

    function pressHandler(mealSteps,id,title,ingredients){
        props.navigation.navigate('MealSteps',{mealSteps:mealSteps, id:id,})
    }

    const catId = props.route.params.categoryId
    const catTitle = CATEGORIES.find((category)=> category.id === catId).title


   

    useEffect(()=>{
        //const catTitle = props.route.params.categoryTitle
        props.navigation.setOptions({
            title:catTitle
        })

    },[])

   

    const mealList = MEALS.filter((itemMeal) => 
    {return itemMeal.categoryIds.indexOf(catId) >=0;} )

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


  return (
   <View style = {styles.main}>
    <FlatList data={mealList} keyExtractor={(item) => item.id} renderItem={mealItemRender}/>
    
   </View>
  )
}

export default MealOverview

const styles = StyleSheet.create({
    main:{
        padding:20
    }
})