import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import Nav from "./components/Nav";
import LandingPage from "./pages/landing-page/LandingPage";
import RecipeDetails from "./pages/landing-page/components/RecipeDetails";
import CategoriesPage from "./pages/categories-page/CategoriesPage";
import RecipeList from "./pages/categories-page/components/RecipeList";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Nav />
          <Route exact path="/" component={LandingPage} />
          <Route path="/:id" component={RecipeDetails} />
          <Route exact path="/" component={CategoriesPage} />
          <Route path="/RecipeList/:id" component={RecipeList} />
        </>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
