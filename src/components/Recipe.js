import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Recipe = ({recipe, deleteRecipe, editRecipe, toggleComplete}) => {
    return(
        <div className="Recipe">
            <p className={`${recipe.completed ? 'completed' : ""}`} onClick={() => toggleComplete(recipe.id)}>{recipe.task}</p>
            <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editRecipe(recipe.id)} />
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteRecipe(recipe.id)} />
            </div>
        </div>
    )
}
