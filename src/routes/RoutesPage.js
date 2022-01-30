import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/global-cmp/Navbar";
import Footer from "../components/global-cmp/Footer";
import ErrorPage from "../pages/ErrorPage";
import FavoritesPage from "../pages/FavoritesPage";
import HomePage from "../pages/HomePage";
import RecipesPage from "../pages/RecipesPage";
import SingleRecipePage from "../pages/SingleRecipePage";
import ContactPage from "../pages/ContactPage";

const RoutesPage = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={"/"}>
            <HomePage />
          </Route>
          <Route exact path={"/recipes"}>
            <RecipesPage />
          </Route>
          <Route exact path={"/favorites"}>
            <FavoritesPage />
          </Route>
          <Route exact path={"/contact"}>
            <ContactPage />
          </Route>
          <Route exact path={"/recipe/:id"}>
            <SingleRecipePage />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default RoutesPage;
