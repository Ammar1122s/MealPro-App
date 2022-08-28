import { createContext,useState } from "react";


export const FavContexts = createContext({
    ids:[],
    addFav: (id) =>{},
    removeFav : (id) => {}
})

function FavContextsProvider({children}){

    const [favMeal, setFavMeal] = useState([]);

    function addFav(id){
        return setFavMeal([...favMeal,id])
    }

    function removeFav(id){
        return setFavMeal(favMeal.filter((mealID) => mealID !== id ))
    }

    const value = {
        ids: favMeal,
        addFav:addFav,
        removeFav:removeFav
    }

    return(
    <FavContexts.Provider value={value}>
        {children}
    </FavContexts.Provider>
    )
}

export default FavContextsProvider;