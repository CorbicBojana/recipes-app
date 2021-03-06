import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, Button, ButtonBase } from "@material-ui/core";

import {
  fetchRecipe,
  getFavouritesRecipes
} from "../../../actions/rootActions";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 40,
    paddingBottom: 40
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
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

function RecipeDetails(props) {
  useEffect(() => {
    props.fetchRecipe(props.match.params.id);
  }, []);

  const classes = useStyles();

  const handleClick = () => {
    const oldLocalStorageRecipe =
      JSON.parse(localStorage.getItem("favourites_recipes")) || [];

    let { recipe } = props;

    let newRecipe = recipe.meals[0];

    const newLocalStorageRecipe = {
      ...newRecipe
    };

    const localStorageRecipe = element =>
      element.strMeal == recipe.meals[0].strMeal;

    if (oldLocalStorageRecipe.findIndex(localStorageRecipe) === -1) {
      oldLocalStorageRecipe.push(newLocalStorageRecipe);

      localStorage.setItem(
        "favourites_recipes",
        JSON.stringify(oldLocalStorageRecipe)
      );
    }

    props.getFavouritesRecipes(
      JSON.parse(localStorage.getItem("favourites_recipes"))
    );
  };

  const isInFavorites = useSelector(state => {
    const { recipe, favouritesRecipes } = state.recipes;
    if (recipe.meals) {
      const meal = recipe.meals[0];
      console.log({ recipe }, favouritesRecipes);
      return !!favouritesRecipes.find(r => r.idMeal === meal.idMeal);
    }
    return false;
  });

  return (
    <div className={classes.root}>
      {props.recipe.meals?.map((meal, index) => (
        <Paper className={classes.paper} key={index}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={meal.strMealThumb}
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
                    {meal.strMeal}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {meal.strInstructions}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      href={meal.strYoutube}
                      target="_blank"
                    >
                      Youtube
                    </Button>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    {isInFavorites ? (
                      <>You add recipe to favourites</>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleClick}
                      >
                        Add to favourites
                      </Button>
                    )}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">{meal.strArea}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  recipe: state.recipes.recipe,
  favouritesRecipes: state.recipes.favouritesRecipes
});

export default connect(mapStateToProps, {
  fetchRecipe,
  getFavouritesRecipes
})(RecipeDetails);
