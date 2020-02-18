import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchRecipe } from "../../../actions/rootActions";

function RecipeDetails(props) {
  useEffect(() => {
    props.fetchRecipe(props.match.params.id);
  }, []);

  return (
    <div>
      {props.recipe.meals?.map((meal, index) => (
        <div key={index}>{meal.strMeal}</div>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  recipe: state.recipes.recipe
});

export default connect(mapStateToProps, { fetchRecipe })(RecipeDetails);
