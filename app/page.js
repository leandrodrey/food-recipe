"use client"
import {useContext, useEffect} from "react";
import Link from "next/link";
import {RecipeContext} from "@/src/frontend/context/RecipeProvider";
import {Search, RecipesTable} from "@/src/frontend/components";

export default function Home() {

    const {recipes, getRecipes} = useContext(RecipeContext);

    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <main>
            <Search />
            <br />
            <br />
            <Link href={'/rating'}>Rating</Link>
            <br />
            <br />
            <RecipesTable recipes={recipes} />
        </main>
    )
}
