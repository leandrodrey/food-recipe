import {NextResponse} from "next/server";
import {db} from "@/src/database";
import {Recipe} from "@/src/models";

export async function getRecipes() {

    await db.connect();
    const recipes = await Recipe.find().sort({id: 'ascending'});
    await db.disconnect();

    let json_response = {
        status: 200,
        message: "OK",
        data: recipes
    };
    return new NextResponse(JSON.stringify(json_response));

}

export async function addNewRecipe(title, rating, ingredients, steps) {

    const newRecipe = new Recipe({
        title,
        rating,
        ingredients,
        steps
    });

    try {
        await db.connect();
        await newRecipe.save();
        await db.disconnect();
        return new NextResponse(JSON.stringify({message: "OK"}));
    } catch (e) {
        await db.disconnect();
        return new NextResponse(JSON.stringify({message: "Error"}));
    }

}

export async function getRecipeById(id) {

    await db.connect();
    const recipe = await Recipe.findById(id);
    await db.disconnect();

    let json_response = {
        status: 200,
        message: "OK",
        data: recipe
    };
    return new NextResponse(JSON.stringify(json_response));

}



