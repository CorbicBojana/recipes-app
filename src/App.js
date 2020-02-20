import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import LandingPage from "./pages/landing-page/LandingPage";
import RecipeDetails from "./pages/landing-page/components/RecipeDetails";
import CategoriesPage from "./pages/categories-page/CategoriesPage";
import RecipeList from "./pages/categories-page/components/RecipeList";
import FavouritesPage from "./pages/favourites-page/FavouritesPage";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <LandingPage />
                <CategoriesPage />
              </>
            )}
          />
          <Route exact path="/RecipeList/:id" component={RecipeList} />
          <Route exact path="/FavouritesPage" component={FavouritesPage} />
          <Route exact path="/:id" component={RecipeDetails} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
