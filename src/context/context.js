import React, { useState, useEffect, useContext, useReducer } from "react";
import ACTIONS from "./actions";
import reducer from "./reducer";

// CREATED A CONTEXT OBJECT FROM REACT
const AppContext = React.createContext();

// MEAL DB INITIAL API URL
const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

// MEAL DB CATEGORIES API

const categoriesUrl = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";

// APP-PROVIDER COMPONENT
const AppProvider = ({ children }) => {
  // INPUT FIELD STATE
  const [input, setInput] = useState("");
  const [localFavRecipes, setLocalFavRecipes] = useState({});

  // INITIAL STATE (CURRENT-VALUE)
  const initialState = {
    allRecipes: [],
    loading: true,
    categoriesList: [],
    singleRecipe: {},
    modal: null,
    notification: {
      status: false,
      text: "",
    },
    favRecipesList: [],
  };

  const [currentStateValue, dispatch] = useReducer(reducer, initialState);

  // REDUCER FUNCTIONALITIES---------

  // FETCHING DATA FROM MEAL DB API
  const showAllRecipes = async (value) => {
    const response = await fetch(`${url}${value}`);
    const recipes = await response.json();
    dispatch({ type: ACTIONS.SHOW_ALL_RECIPE, payload: recipes.meals });
  };
  useEffect(() => {
    showAllRecipes("a");
  }, []);

  // SEARCHING RECIPE FUNCTION
  useEffect(() => {
    if (input) {
      dispatch({ type: ACTIONS.LOADING });
      showAllRecipes(input);
    }
  }, [input]);

  // GETTING ALL THE CATEGORIES FROM API
  const getCategories = async () => {
    const response = await fetch(categoriesUrl);
    const result = await response.json();
    dispatch({ type: ACTIONS.CATEGORIES_LIST, payload: result.meals });
  };
  useEffect(() => {
    getCategories();
  }, []);

  // INFO OF SINGLE RECIPE IN DETAILS
  const singleRecipeData = async (id) => {
    const idUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const response = await fetch(idUrl);
    const result = await response.json();
    dispatch({ type: ACTIONS.SINGLE_RECIPE_INFO, payload: result.meals[0] });
  };

  // MODAL SETTINGS (OPEN/CLOSE)
  const openModal = () => {
    dispatch({ type: ACTIONS.OPEN_MODAL });
  };
  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  // POSTING FAVORITE RECIPE TO FIREBASE
  const postFavRecipe = (recipe) => {
    fetch("https://fav-recipes-default-rtdb.firebaseio.com/recipes.json", {
      method: "POST",
      body: JSON.stringify(recipe),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  //GETTING FAV RECIPES DATA FROM FIREBASE
  const getFavRecipes = async () => {
    const response = await fetch(
      "https://fav-recipes-default-rtdb.firebaseio.com/recipes.json"
    );
    const result = await response.json();
    setLocalFavRecipes(result);
    const favRecipes = [];
    for (const key in result) {
      const recipe = {
        id: key,
        ...result[key],
      };

      favRecipes.push(recipe);
    }
    dispatch({ type: ACTIONS.FAV_RECIPES, payload: favRecipes });
  };

  useEffect(() => {
    getFavRecipes();
  }, [currentStateValue.notification.status]);

  // SETTING NOTIFICATION (SHOW/HIDE)
  const showNotification = (text) => {
    dispatch({ type: ACTIONS.SHOW_NOTIFICATION, payload: text });
  };
  const hideNotification = () => {
    dispatch({ type: ACTIONS.HIDE_NOTIFICATION });
  };

  // DELETING DATA FROM FIREBASE SERVER AND FROM LOCAL STATE TOO
  const deleteRecipe = (id) => {
    dispatch({ type: ACTIONS.DELETE_FAV_RECIPE, payload: id });
    deleteFBRecipe(id);
  };

  const deleteFBRecipe = (id) => {
    const favObjKeys = Object.keys(localFavRecipes);
    const favSingleKey = favObjKeys.find((item) => {
      return localFavRecipes[item].id === id;
    });

    const deleteUrl = `https://fav-recipes-default-rtdb.firebaseio.com/recipes/${favSingleKey}.json`;

    fetch(deleteUrl, {
      method: "DELETE",
    });
  };

  //MAIN RETURN OF VALUES & EXPORTING VALUES
  return (
    <AppContext.Provider
      value={{
        input,
        setInput,
        deleteRecipe,
        //USE_REDUCER FUNCTION PASS
        currentStateValue,
        singleRecipeData,
        openModal,
        closeModal,
        postFavRecipe,
        showNotification,
        hideNotification,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//CUSTOM HOOK
const useGlobalContext = () => {
  return useContext(AppContext);
};

//EXPORTING COMPONENT
export { AppProvider, useGlobalContext };
