import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getFavouritesRecipes } from "../../actions/rootActions";

import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Paper,
  Typography,
  ButtonBase
} from "@material-ui/core";

function RecipeList(props) {
  useEffect(() => {
    props.getFavouritesRecipes(
      JSON.parse(localStorage.getItem("favourites_recipes"))
    );
  }, []);

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

  const classes = useStyles();

  let content = props.favouritesRecipes?.map((recipe, index) => (
    <Paper className={classes.paper} key={index}>
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
    </Paper>
  ));

  return (
    <Container maxWidth="md">
      {props.favouritesRecipes?.length > 0 ? (
        <>
          <h2
            style={{
              textAlign: "center",
              fontSize: 34,
              fontWeight: 700,
              textTransform: "uppercase",
              margin: "40px 0 20px"
            }}
          >
            Favourites Recipes
          </h2>
          {content}
        </>
      ) : (
        <h2
          style={{
            textAlign: "center",
            fontSize: 34,
            fontWeight: 700,
            textTransform: "uppercase",
            margin: "40px 0 20px"
          }}
        >
          No Favourites Recipes
        </h2>
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  favouritesRecipes: state.recipes.favouritesRecipes
});

export default connect(mapStateToProps, { getFavouritesRecipes })(RecipeList);
