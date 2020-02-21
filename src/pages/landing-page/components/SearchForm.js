import React from "react";
import { connect } from "react-redux";
import { TextField, Button, Container } from "@material-ui/core";

import Autocomplete from "@material-ui/lab/Autocomplete";

import {
  searchRecipe,
  fetchRecipes,
  setLoading,
  fetchAutocompleteRecipes,
  textInput,
  clearSearch
} from "../../../actions/rootActions";

function SearchForm(props) {
  const handleChange = e => {
    const value = e.target.value;
    if (value === "") {
      props.clearSearch();
    } else {
      props.searchRecipe(value);
      props.fetchAutocompleteRecipes(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (props.text !== "") {
      props.fetchRecipes(props.text);
      props.setLoading();
    }
  };

  const handleAutocompleteChange = e => {
    props.textInput(e.target.textContent);
  };

  return (
    <Container maxWidth="md">
      <form onSubmit={handleSubmit} style={{ margin: "40px 0" }}>
        <Autocomplete
          id="combo-box-demo"
          options={props.suggestions}
          getOptionLabel={option => option.strMeal}
          onChange={handleAutocompleteChange}
          style={{ width: "100%" }}
          renderInput={params => (
            <TextField
              {...params}
              id="standard-basic"
              label="Search for recipes"
              type="text"
              name="searchText"
              value={props.text}
              onChange={handleChange}
              fullWidth={true}
              style={{ marginTop: 40, fontSize: 40 }}
            ></TextField>
          )}
        />
        <Button
          variant="outlined"
          type="submit"
          style={{ display: "block", marginTop: 20, padding: " 10px 80px" }}
        >
          Search
        </Button>
      </form>
    </Container>
  );
}

const mapStateToProps = state => ({
  text: state.recipes.text,
  categorie: state.recipes.categorie,
  suggestions: state.recipes.suggestions
});

export default connect(mapStateToProps, {
  searchRecipe,
  fetchRecipes,
  setLoading,
  fetchAutocompleteRecipes,
  textInput,
  clearSearch
})(SearchForm);
