import {
  SEARCH_RECIPE,
  FETCH_RECIPES,
  FETCH_RECIPE,
  LOADING,
  FETCH_AUTOCOMPLETE_RECIPES,
  FETCH_CATEGORIES_MEAL,
  FETCH_CATEGORIE_LIST_RECIPE,
  TEXT_INPUT,
  CATEGORIE_INPUT,
  CLEAR_SEARCH,
  GET_FAVOURITES_RECIPES
} from "../actions/types";

const initialState = {
  text: "",
  recipes: [],
  recipe: [],
  loading: false,
  suggestions: [],
  categories: [],
  categorie: "",
  listRecipe: [],
  favouritesRecipes: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_RECIPE:
      return {
        ...state,
        text: action.payload,
        loading: false
      };
    case FETCH_RECIPES:
      return {
        ...state,
        recipes: action.payload.meals,
        suggestions: [],
        loading: false
      };
    case FETCH_RECIPE:
      return {
        ...state,
        recipe: action.payload
      };
    case FETCH_AUTOCOMPLETE_RECIPES:
      return {
        ...state,
        suggestions: action.payload
      };
    case FETCH_CATEGORIES_MEAL:
      return {
        ...state,
        categories: action.payload
      };
    case FETCH_CATEGORIE_LIST_RECIPE:
      return {
        ...state,
        listRecipe: action.payload.meals
      };
    case CATEGORIE_INPUT:
      return {
        ...state,
        categorie: action.payload
      };
    case TEXT_INPUT:
      return {
        ...state,
        text: action.payload,
        suggestions: []
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        recipes: [],
        text: "",
        suggestions: []
      };
    case GET_FAVOURITES_RECIPES:
      return {
        ...state,
        favouritesRecipes: action.payload
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
