import React, {useState} from 'react';
import AddButton from "../todo/AddButton"
import '../styles/AddRecipe.css'

// this is like the Todo form
export function AddRecipeForm({addRecipe}){
    const [value, setValue] = useState('')

    const handleSubmit = (e) =>{
        // prevent default action
        e.preventDefault();
        // add todo
        addRecipe(value);
        // reset form
        setValue('');

    };
    return(
        <div>
            <div className="r-container">


            {/* Should be the left side of the home page */}
            <div className="a-left">
                <div className="r-container">
                    <div className="box">
                    <span className="title">CREATE RECIPE</span>
                    <div>
                        {/* <img src="https://i.pinimg.com/236x/11/12/02/1112029cd321cba587b16cbe93b07325.jpg" className="glass-img"/> */}
                        <p>Create your own recipe and share it with the community!</p>
                        <button class="cta">
                            <span class="hover-underline-animation"> ADD RECIPE </span>
                            <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                                <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                            </svg>
                        </button>
                </div>
            </div>
        </div>



            </div>
            </div>


        </div>
    )

}
