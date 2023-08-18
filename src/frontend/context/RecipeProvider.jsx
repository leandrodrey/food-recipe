"use client"
import React, {createContext} from 'react'
import useRecipes from "@/src/frontend/services/useRecipes";

export const RecipeContext = createContext('')

const RecipeProvider = ({children}) => {

    const {recipes, recipe, getRecipes} = useRecipes();

    return (
        <RecipeContext.Provider value={{recipes, recipe, getRecipes}}>
            {children}
        </RecipeContext.Provider>
    )

}
export default RecipeProvider;
