import React from "react";
import { connect } from "react-redux";
import {
  TextField,
  Button,
  Container,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

import {
  searchRecipe,
  fetchRecipes,
  setLoading,
  fetchAutocompleteRecipes,
  textInput
} from "../../../actions/rootActions";

function SearchForm(props) {
  const handleChange = e => {
    props.searchRecipe(e.target.value);
    props.fetchAutocompleteRecipes(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.fetchRecipes(props.text);
    props.setLoading();
  };

  const handleClick = e => {
    console.log(e.target.textContent);
    props.textInput(e.target.textContent);
  };

  let content = props.suggestions?.map((recipe, index) => (
    <List component="nav" key={index} onClick={handleClick}>
      <ListItem button>
        <ListItemText primary={recipe.strMeal} />
      </ListItem>
    </List>
  ));

  return (
    <Container maxWidth="md">
      <form onSubmit={handleSubmit} style={{ margin: "40px 0" }}>
        <TextField
          id="standard-basic"
          label="Search for recipes"
          type="text"
          name="searchText"
          onChange={handleChange}
          fullWidth={true}
          style={{ marginTop: 40, fontSize: 40 }}
        />
        {content}
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
  textInput
})(SearchForm);
