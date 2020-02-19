import React, { useEffect } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, Button, ButtonBase } from "@material-ui/core";

import { fetchRecipe } from "../../../actions/rootActions";

function RecipeDetails(props) {
  useEffect(() => {
    props.fetchRecipe(props.match.params.id);
  }, []);

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

  const classes = useStyles();

  const handleClick = () => {
    const oldInput =
      JSON.parse(localStorage.getItem("favourites_recipes")) || [];

    let { recipe, favouritesRecipes } = props;

    const newInput = {
      ...recipe
    };

    oldInput.push(newInput);

    localStorage.setItem("favourites_recipes", JSON.stringify(oldInput));

    favouritesRecipes = JSON.parse(localStorage.getItem("favourites_recipes"));
    console.log(favouritesRecipes);
  };

  return (
    <div className={classes.root}>
      {console.log(props.favouritesRecipes)}
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
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleClick}
                    >
                      Add to favourites
                    </Button>
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

export default connect(mapStateToProps, { fetchRecipe })(RecipeDetails);
