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

    return {
        // Values
        recipes,
        recipe,

        // Methods
        getRecipes
    }

}
export default UseRecipes
