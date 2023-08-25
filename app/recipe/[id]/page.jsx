'use client'
import {useContext, useEffect} from "react";
import {RecipeContext} from "@/src/frontend/context/RecipeProvider";
import {RecipeTab, RecipeValoration, Loader} from "@/src/frontend/components";


const recipeDetail = ({params}) => {

    const id = params.id;

    const {recipe, getRecipeById} = useContext(RecipeContext);

    useEffect(() => {
        getRecipeById(id);
    }, []);

    if (recipe) {
        return (
            <>
                <RecipeTab ingredients={recipe.ingredients} steps={recipe.steps}/>
                <RecipeValoration />
            </>
        )
    } else {
        return (
            <Loader/>
        )
    }
}
export default recipeDetail
