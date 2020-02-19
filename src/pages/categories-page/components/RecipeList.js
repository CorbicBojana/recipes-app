import React, { useEffect } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, Button, ButtonBase } from "@material-ui/core";

import { fetchCategorieListRecipe } from "../../../actions/rootActions";

function RecipeList(props) {
  useEffect(() => {
    props.fetchCategorieListRecipe(props.categorie);
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

  let content = props.listRecipe?.map((recipe, index) => (
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

  return <div>{content}</div>;
}

const mapStateToProps = state => ({
  categorie: state.recipes.categorie,
  listRecipe: state.recipes.listRecipe
});

export default connect(mapStateToProps, { fetchCategorieListRecipe })(
  RecipeList
);
