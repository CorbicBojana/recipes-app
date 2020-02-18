import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchCategorieListRecipe } from "../../../actions/rootActions";

function RecipeList(props) {
  useEffect(() => {
    props.fetchCategorieListRecipe(props.categorie);
  }, []);

  let content = props.listRecipe?.map((recipe, index) => (
    <div key={index}>{recipe.strMeal}</div>
  ));

  return <div>{content}</div>;
}

const mapStateToProps = state => ({
  categorie: state.recipes.categorie,
  listRecipe: state.recipes.listRecipe
});

export default connect(mapStateToProps, { fetchCategorieListRecipe })(
  RecipeList
);
