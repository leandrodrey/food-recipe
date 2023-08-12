import {NextResponse} from "next/server";
import {db} from "@/database";
import {Recipe} from "@/models";

export async function GET(req, res) {

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

export async function POST(req) {

    const {title, rating, ingredients, steps} = await req.json()

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
