import React from "react"
import { AddRecipeWrapper } from "../components/AddRecipeWrapper"
import Layout from "../todo/Layout"
import '../styles/Myrecipe.css'

export function Myrecipe (){

    return(
        <div className="split-container">
        {/* Left section */}
        <div className="left-section">
            {/* content for left section */}
            <AddRecipeWrapper/>
        </div>

        {/* Right section */}
        <div className="right-section">
            {/* content for right section */}

            <Layout />
        </div>
        </div>


    )
}
