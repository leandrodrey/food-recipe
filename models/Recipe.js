import mongoose, {Schema} from "mongoose";

const recipeSchema = new Schema({
    title: {type: String, required: true},
    rating: {type: Number},
    ingredients: {
        type: Object, properties: {
            quantity: {type: Number},
            ingredient: {type: String}
        }
    },
    steps: {type: [String]},
});

const RecipeModel = mongoose.models.Recipe || mongoose.model('Recipe', recipeSchema);

export default RecipeModel;
