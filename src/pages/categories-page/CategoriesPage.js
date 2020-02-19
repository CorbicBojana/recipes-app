import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { ButtonBase, Typography, Container } from "@material-ui/core";

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

  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      minWidth: 300,
      width: "100%"
    },
    image: {
      position: "relative",
      height: 200,
      [theme.breakpoints.down("xs")]: {
        width: "100% !important", // Overrides inline-style
        height: 100
      },
      "&:hover, &$focusVisible": {
        zIndex: 1,
        "& $imageBackdrop": {
          opacity: 0.15
        },
        "& $imageMarked": {
          opacity: 0
        },
        "& $imageTitle": {
          border: "4px solid currentColor"
        }
      }
    },
    focusVisible: {},
    imageButton: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.common.white
    },
    imageSrc: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: "cover",
      backgroundPosition: "center 40%",
      margin: 20
    },
    imageBackdrop: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create("opacity"),
      margin: 20
    },
    imageTitle: {
      position: "relative",
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
        6}px`,
      backgroundColor: "#f7f7f7"
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: "absolute",
      bottom: -2,
      left: "calc(50% - 9px)",
      transition: theme.transitions.create("opacity")
    }
  }));

  const classes = useStyles();

  const content = props.categories.map((categorie, index) => (
    <ButtonBase
      focusRipple
      key={index}
      className={classes.image}
      focusVisibleClassName={classes.focusVisible}
      style={{
        width: "33%"
      }}
    >
      <span
        className={classes.imageSrc}
        style={{
          backgroundImage: `url(${categorie.strCategoryThumb})`
        }}
      />
      <span className={classes.imageBackdrop} />
      <span className={classes.imageButton}>
        <Link
          to={`/RecipeList/${categorie.idCategory}`}
          style={{
            textTransform: "uppercase",
            textDecoration: "none",
            fontWeight: 700
          }}
        >
          <Typography
            component="span"
            variant="subtitle1"
            className={classes.imageTitle}
            onClick={handleClick}
          >
            {categorie.strCategory}
            <span className={classes.imageMarked} />
          </Typography>
        </Link>
      </span>
    </ButtonBase>
  ));

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <h2
          style={{
            textAlign: "center",
            fontSize: 34,
            fontWeight: 700,
            textTransform: "uppercase",
            margin: "40px 0 20px"
          }}
        >
          Categories Recipe
        </h2>
        {content}
      </Container>
    </div>
  );
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
