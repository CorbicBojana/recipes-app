import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Grid, Paper } from "@material-ui/core";

import {
  fetchCategoriesMeal,
  categorieInput,
  fetchCategorieListRecipe
} from "../../actions/rootActions";

function CategoriesPage(props) {
  useEffect(() => {
    props.fetchCategoriesMeal();
  }, []);

  const handleClick = e => {
    props.categorieInput(e.target.textContent);
  };

  const content = props.categories.map((categorie, index) => (
    <Grid item xs={4} key={index}>
      <Paper onClick={handleClick} style={{ textAlign: "center", padding: 20 }}>
        <Link to={`/${categorie.idCategory}`}>{categorie.strCategory}</Link>
      </Paper>
    </Grid>
  ));

  return <div>{content}</div>;
}

const mapStateToProps = state => ({
  categories: state.recipes.categories,
  categorie: state.recipes.categorie
});

export default connect(mapStateToProps, {
  fetchCategoriesMeal,
  categorieInput,
  fetchCategorieListRecipe
})(CategoriesPage);
