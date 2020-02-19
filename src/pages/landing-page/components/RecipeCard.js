import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

function RecipeCard(props) {
  const { recipe } = props;

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      height: 400,
      width: 340,
      marginTop: 40,
      fontSize: 38,
      textTransform: "uppercase"
    },
    image: {
      height: 340,
      width: "100%"
    },
    control: {
      padding: theme.spacing(2)
    }
  }));

  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={6}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          <Grid item>
            <Link
              to={`/${recipe.idMeal}`}
              style={{
                textDecoration: "none",
                textAlign: "center",
                fontWeight: 500
              }}
            >
              <Paper className={classes.paper}>
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className={classes.image}
                />
                {recipe.strMeal}
              </Paper>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default RecipeCard;
