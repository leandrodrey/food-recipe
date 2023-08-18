'use client'
import {RecipeTab} from "@/src/frontend/components/RecipeTab/RecipeTab";

const recipeDetail = ({ params }) => {

    const {id} = params

    return (
        <>
            <RecipeTab />
        </>
    )
}
export default recipeDetail
