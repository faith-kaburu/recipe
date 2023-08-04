import React, {useState} from 'react'

export const EditRecipeForm = ({editRecipe, recipe}) =>{
    const [value, setValue] = useState(recipe.task); //maybe it should be recipe.recipe here

    const handleSubmit = (e) => {
        //prevent default action
        e.preventDefault();

        //update recipe
        editRecipe(value, recipe.id);

    };
    return(
        <form onSubmit={handleSubmit} className="TodoForm" >
            <input
                type="text"
                value={value}
                onchange={(e) => setValue(e.target.value)}
                className="recipe-input"
                placeholder="Update Recipe"
            />
            <button type="submit" className="ar-btn">
                Add Recipe
            </button>

        </form>
    )
}
