import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, ButtonBase, Typography } from "@material-ui/core";

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
      backgroundPosition: "center 40%"
    },
    imageBackdrop: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create("opacity")
    },
    imageTitle: {
      position: "relative",
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
        6}px`
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
        width: "30%"
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
        <Typography
          component="span"
          variant="subtitle1"
          color="inherit"
          className={classes.imageTitle}
        >
          {categorie.strCategory}
          <span className={classes.imageMarked} />
        </Typography>
      </span>
    </ButtonBase>
  ));

  return <div className={classes.root}>{content}</div>;
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
