"use client"
import React, {createContext} from 'react'
import useRecipes from "@/src/frontend/services/useRecipes";

export const RecipeContext = createContext('')

const RecipeProvider = ({children}) => {

    const {recipes, recipe, getRecipes, getRecipeById} = useRecipes();

    return (
        <RecipeContext.Provider value={{recipes, recipe, getRecipes, getRecipeById}}>
            {children}
        </RecipeContext.Provider>
    )

}
export default RecipeProvider;
