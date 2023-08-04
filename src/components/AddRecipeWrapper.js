import React, {useState} from 'react'
import {AddRecipeForm} from './AddRecipeForm'
import {v4 as uuidv4} from 'uuid';
import { EditRecipeForm } from './EditRecipe';
import {Recipe} from './Recipe'
uuidv4();

export function AddRecipeWrapper(){
    const  [recipes, setRecipe] = useState([])

    const addRecipe = recipe => {
        setRecipe([...recipes, {id: uuidv4(), task: recipe, completed: false, isEditing: false}])
    }

    const deleteRecipe = id => {
        setRecipe(recipes.filter(recipe => recipe.id !== id))

    }

    const toggleComplete = id => {
        setRecipe(recipes.map(recipe => recipe.id === id ? {...recipe, completed: !recipe.completed} : recipe))
    }

    const editRecipe = id => {
        setRecipe(recipes.map(recipe => recipe.id === id ? {...recipe, isRecipe: !recipe.isEditing} : recipe))
    }
    // not sure of this part
    const editTask = (task, id) => {
        setRecipe(recipes.map(recipe => recipe.id === id ? {...recipe, task, isEditing: !recipe.isEditing} : recipe))

    }

    return(
        //so this is the actual display on the web page, so div changes should be made here
        <div className='ar-wrapper'>
            {/* add what will be addTodo here */}
            <AddRecipeForm  addRecipe={addRecipe}/>
            {/* display recipe */}
            <div>
                {recipes.map((recipe, index) => (
                    recipe.isEditing ? (
                        <EditRecipeForm editRecipe={editTask} task={recipe} />
                    ): (
                        <Recipe key={index} task ={recipe} deleteRecipe={deleteRecipe} editRecipe={editRecipe} toggleComplete={toggleComplete}/>
                    )
                ))}
            </div>
        </div>


    )
}
