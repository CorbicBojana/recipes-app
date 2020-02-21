import {
  SEARCH_RECIPE,
  FETCH_RECIPES,
  FETCH_RECIPE,
  LOADING,
  FETCH_AUTOCOMPLETE_RECIPES,
  TEXT_INPUT,
  FETCH_CATEGORIES_MEAL,
  FETCH_CATEGORIE_LIST_RECIPE,
  CATEGORIE_INPUT,
  CLEAR_SEARCH,
  GET_FAVOURITES_RECIPES
} from "./types";

import instance from "../axios";

export const searchRecipe = text => dispatch => {
  dispatch({
    type: SEARCH_RECIPE,
    payload: text
  });
};

export const fetchRecipes = text => dispatch => {
  instance
    .get(`/search.php?s=${text}`)
    .then(response =>
      dispatch({
        type: FETCH_RECIPES,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const fetchRecipe = id => dispatch => {
  instance
    .get(`/lookup.php?i=${id}`)
    .then(response =>
      dispatch({
        type: FETCH_RECIPE,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const fetchAutocompleteRecipes = text => dispatch => {
  instance
    .get(`/search.php?s=${text}`)
    .then(response =>
      dispatch({
        type: FETCH_AUTOCOMPLETE_RECIPES,
        payload: response.data.meals
      })
    )
    .catch(err => console.log(err));
};

export const fetchCategoriesMeal = () => dispatch => {
  instance
    .get(`/categories.php`)
    .then(response =>
      dispatch({
        type: FETCH_CATEGORIES_MEAL,
        payload: response.data.categories
      })
    )
    .catch(err => console.log(err));
};

export const fetchCategorieListRecipe = categorie => dispatch => {
  instance
    .get(`/filter.php?c=${categorie}`)
    .then(response =>
      dispatch({
        type: FETCH_CATEGORIE_LIST_RECIPE,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const categorieInput = categorie => {
  return {
    type: CATEGORIE_INPUT,
    payload: categorie
  };
};

export const textInput = text => {
  return {
    type: TEXT_INPUT,
    payload: text
  };
};

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH
  };
};

export const getFavouritesRecipes = favouritesRecipes => {
  return {
    type: GET_FAVOURITES_RECIPES,
    payload: favouritesRecipes
  };
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};
