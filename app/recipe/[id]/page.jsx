'use client'
import {RecipeTab} from "@/src/frontend/components/tabs/RecipeTab";

const recipeDetail = ({ params }) => {

    const {id} = params

    return (
        <>
            <RecipeTab />
        </>
    )
}
export default recipeDetail
