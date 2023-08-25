import {NextResponse} from "next/server";
import {db} from "@/src/backend/database";
import {Recipe} from "@/src/backend/models";

const RatingState = {
    BEST: 'best',
    WORSE: 'worst'
};

export async function GET(request, { params }) {

    try {
        const order = params.order;
        let recipes = [];
        await db.connect();
        if (order === RatingState.BEST) {
            recipes = await Recipe.find().sort({rating: 'descending'});
        } else if (order === RatingState.WORSE) {
            recipes = await Recipe.find().sort({rating: 'ascending'});
        }
        await db.disconnect();
        let json_response = {
            status: 200,
            message: "OK",
            data: recipes
        };
        return NextResponse.json(json_response)
    } catch (e) {
        console.log(e);
        return NextResponse.json({message: "Error"});
    }

}
