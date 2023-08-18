"use client"
import {useContext, useEffect, useState} from "react";
import Link from "next/link";
import {RecipeContext} from "@/src/frontend/context/RecipeProvider";
import {Search, RecipesTable, Loader} from "@/src/frontend/components";

export default function Home() {

    const {recipes, getRecipes} = useContext(RecipeContext);

    useEffect(() => {
        getRecipes();
    }, []);

    if (recipes) {
        return (
            <main>
                <Search/>
                <br/>
                <br/>
                <Link href={'/rating'}>Ver valoraciones</Link>
                <br/>
                <br/>
                <RecipesTable recipes={recipes}/>
            </main>
        )
    } else {
        return (
            <Loader/>
        )
    }
}
