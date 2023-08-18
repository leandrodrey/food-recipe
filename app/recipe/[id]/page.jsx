'use client'
import {RecipeTab} from "@/src/frontend/components/RecipeTab/RecipeTab";
import {useContext, useEffect} from "react";
import {RecipeContext} from "@/src/frontend/context/RecipeProvider";
import {Loader} from "@/src/frontend/components";

const recipeDetail = ({params}) => {

    const id = params.id;

    const {recipe, getRecipeById} = useContext(RecipeContext);

    useEffect(() => {
        getRecipeById(id);
    }, []);

    if (recipe) {
        return (
            <RecipeTab ingredients={recipe.ingredients} steps={recipe.steps}/>
        )
    } else {
        return (
            <Loader/>
        )
    }
}
export default recipeDetail
