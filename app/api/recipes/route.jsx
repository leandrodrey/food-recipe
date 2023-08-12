import {getRecipes, addNewRecipe} from "@/src/services/recipes";
import {NextResponse} from "next/server";

export async function GET() {
    await getRecipes();
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
        return new NextResponse(JSON.stringify({message: "Error"}));
    }

    await addNewRecipe({title, rating, ingredients, steps});
}
