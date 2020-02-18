import React from "react";
import { Link } from "react-router-dom";

function RecipeCard(props) {
const { recipe } = props;
    return(
        <div>
            <Link to={`/${recipe.idMeal}`}>{recipe.strMeal}</Link>
        </div>
    )
}

export default RecipeCard;