import Link from "next/link";

export const RecipesTable = ({recipes}) => {

    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Recipe</th>
                        <th scope="col">Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes.map((recipe) => (
                        <tr key={recipe._id}>
                            <td><Link href={`/recipe/${recipe._id}`}>{recipe.title}</Link></td>
                            <td>{recipe.rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
