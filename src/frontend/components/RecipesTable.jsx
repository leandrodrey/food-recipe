import React from 'react'

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
                        <tr key={recipe.id}>
                            <td>{recipe.title}</td>
                            <td>{recipe.rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
