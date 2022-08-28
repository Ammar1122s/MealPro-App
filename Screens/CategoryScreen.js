import React from 'react'
import { FlatList,View,Pressable,Text } from 'react-native'
import {CATEGORIES} from '../data/dummyData'
import CategoryTile from '../Components/CategoryTile'




function CategoryScreen(props) {

  function renderCategory(itemData){
    function pressHandler(){
      props.navigation.navigate('MealOverview',{categoryId: itemData.item.id, categoryTitle:itemData.item.title})
      }
    return (
    <CategoryTile title= {itemData.item.title} color = {itemData.item.color} onPress = {pressHandler}/>
     );
}

  
  return (
    <FlatList data={CATEGORIES} 
    keyExtractor= {(item) => item.id} renderItem = {renderCategory} numColumns={2}/>
  );
}

export default CategoryScreen