"use client"
import {useState} from 'react'

const UseRecipes = () => {

    const [recipes, setRecipes] = useState();
    const [recipe, setRecipe] = useState();

    const getRecipes = async () => {
        try {
            const response = await fetch('api/recipes');
            const data = await response.json();
            setRecipes(data.data);
        } catch (error) {
            console.error(error);
        }
    }

    const getRecipeById = async (id) => {
        try {
            const response = await fetch(`/api/recipes/${id}`);
            const data = await response.json();
            setRecipe(data.data);
        } catch (error) {
            console.error(error);
        }
    }

    return {
        // Values
        recipes,
        recipe,

        // Methods
        getRecipes,
        getRecipeById
    }

}
export default UseRecipes
