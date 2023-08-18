import {NextResponse} from "next/server";
import {db} from "@/src/backend/database";
import {Recipe} from "@/src/backend/models";

export async function GET() {
    await db.connect();
    const recipes = await Recipe.find().sort({id: 'ascending'});
    await db.disconnect();

    let json_response = {
        status: 200,
        message: "OK",
        data: recipes
    };
    return NextResponse.json(json_response)
}

const validateRecipeData = (title, rating, ingredients, steps) => {
    const errors = [];

    if (!title) {
        errors.push({
            message: "El título es obligatorio"
        });
    }

    if (rating !== null && !Number.isInteger(rating) && !rating < 0) {
        errors.push({
            message: "La calificación debe ser un número entero"
        });
    }

    if (!ingredients) {
        errors.push({
            message: "Los ingredientes son obligatorios"
        });
    }

    if (!steps) {
        errors.push({
            message: "Los pasos son obligatorios"
        });
    }

    return errors;
};

export async function POST(request) {
    const {title, rating, ingredients, steps} = await request.json();
    const errors = validateRecipeData(title, rating, ingredients, steps);
    if (errors.length) {
        return NextResponse.json({message: "Error"});
    }

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
        return NextResponse.json({message: "OK"});
    } catch (e) {
        await db.disconnect();
        return NextResponse.json({message: "Error"});
    }
}

export async function PUT(request) {
    const {id, title, rating, ingredients, steps} = await request.json();
    const errors = validateRecipeData(title, rating, ingredients, steps);
    if (errors.length) {
        return NextResponse.json({message: "Error"});
    }

    try {
        await db.connect();
        await Recipe.findByIdAndUpdate(id, {
            title,
            rating,
            ingredients,
            steps
        });
        await db.disconnect();
        return NextResponse.json({message: "OK"});
    } catch (e) {
        await db.disconnect();
        return NextResponse.json({message: "Error"});
    }
}
