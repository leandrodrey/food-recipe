import {NextResponse} from "next/server";
import {db, seedData} from "@/database";
import {Recipe} from "@/models";

export async function POST(req, res) {

    if (process.env.NODE_ENV === 'production') {
        let error_response = {
            status: 401,
            message: "Este endpoint no está accesible en producción"
        };
        return new NextResponse(JSON.stringify(error_response));
    }

    await db.connect();

    await Recipe.deleteMany();
    await Recipe.insertMany(seedData.recipes);

    await db.disconnect();

    let json_response = {
        status: 200,
        message: "se ha cargado la data correctamente",
    };
    return new NextResponse(JSON.stringify(json_response));

}
