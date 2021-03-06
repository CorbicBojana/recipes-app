import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, ButtonBase } from "@material-ui/core";

import { fetchCategorieListRecipe } from "../../../actions/rootActions";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 40,
    paddingBottom: 40
  },
  paper: {
    padding: theme.spacing(2),
    margin: "20px auto",
    maxWidth: 500
  },
  typography: {
    fontSize: 38,
    fontWeight: 700,
    textTransform: "uppercase"
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

function RecipeList(props) {
  useEffect(() => {
    props.fetchCategorieListRecipe(props.categorie);
  }, []);

  const classes = useStyles();

  let content = props.listRecipe?.map((recipe, index) => (
    <Paper className={classes.paper} key={index}>
      <Link
        to={`/${recipe.idMeal}`}
        style={{
          textDecoration: "none",
          textAlign: "center",
          fontWeight: 500
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src={recipe.strMealThumb}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  className={classes.typography}
                >
                  {recipe.strMeal}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Link>
    </Paper>
  ));

  return <div>{content}</div>;
}

const mapStateToProps = state => ({
  categorie: state.recipes.categorie,
  listRecipe: state.recipes.listRecipe,
  recipe: state.recipes.recipe
});

export default connect(mapStateToProps, { fetchCategorieListRecipe })(
  RecipeList
);
