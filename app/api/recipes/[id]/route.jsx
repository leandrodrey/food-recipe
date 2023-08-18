import {NextResponse} from "next/server";
import {db} from "@/src/backend/database";
import {Recipe} from "@/src/backend/models";

export async function GET(request, { params }) {
    const id = params.id;

    await db.connect();
    const recipe = await Recipe.findById(id);
    await db.disconnect();

    let json_response = {
        status: 200,
        message: "OK",
        data: recipe
    };
    return NextResponse.json(json_response)
}
