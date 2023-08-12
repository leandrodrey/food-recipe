'use client'
import {RecipeTab} from "@/components/tabs/RecipeTab";

const recipeDetail = ({ params }) => {

    const {id} = params

    return (
        <>
            <RecipeTab />
        </>
    )
}
export default recipeDetail
