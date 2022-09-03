import axios from "axios";
import { CATEGORIES, MEALS } from "./data/dummyData";

export async function addingMeals(){

    async function handler (cata){
        const response = 
        await axios.post('https://practice-app-e8584-default-rtdb.firebaseio.com/Category.json',cata)

    }

    CATEGORIES.forEach(handler)

}

export function test(){
    CATEGORIES.forEach((cata)=>{

        console.log(cata);

    })
}

export async function getMeal(){
    const response = await axios.get('https://practice-app-e8584-default-rtdb.firebaseio.com/Category.json')

    const data = [];


    for (const key in response.data){
        const cata ={
            color : response.data[key].color,
            id : response.data[key].id,
            title : response.data[key].title
        }
        
        data.push(cata);
    
    }

    
    
    return data;
}
