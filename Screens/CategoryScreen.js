import React, { useEffect, useState } from 'react'
import { FlatList,View,Pressable,Text } from 'react-native'
import {CATEGORIES} from '../data/dummyData'
import CategoryTile from '../Components/CategoryTile'
import { addingMeals, getMeal, test } from '../HttpStore'
import ButtonIcon from '../Components/buttonIcon'
import NewInput from './NewInput'



function CategoryScreen(props) {

  function pressHandler(){
    props.navigation.navigate('NewInput')
  }

  useEffect(()=>{
    props.navigation.setOptions({
      headerRight:()=>{
        return(
       <ButtonIcon icon = 'add' size = {40} onPress={pressHandler} />
        )
      }
    })
  },[])
  

   const [data,setData]  =useState([]);

   useEffect(()=>{
    async function dowloadMeal(){
      const response = await getMeal();
      setData(response);
   }
    dowloadMeal();
   },[])

  // async function adding (){
  //   await addingMeals();
  // }

  // adding();



  function renderCategory(itemData){
   
    function pressHandler(){
      props.navigation.navigate('MealOverview',{categoryId: itemData.item.id, categoryTitle:itemData.item.title})
      }
    return (
    <CategoryTile title= {itemData.item.title} color = {itemData.item.color} onPress = {pressHandler}/>
     );
}

  return (

    <FlatList data={data} 
    keyExtractor= {(item) => item.id} renderItem = {renderCategory}/>
  );
}

export default CategoryScreen