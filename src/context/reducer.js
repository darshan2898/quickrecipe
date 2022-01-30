const reducer = (state, action) => {
  if (action.type === "SHOW_ALL_RECIPE") {
    return { ...state, loading: false, allRecipes: action.payload };
  }
  if (action.type === "CATEGORIES_LIST") {
    return { ...state, categoriesList: action.payload };
  }
  if (action.type === "SINGLE_RECIPE_INFO") {
    return { ...state, singleRecipe: action.payload, loading: false };
  }
  if (action.type === "OPEN_MODAL") {
    return { ...state, modal: true };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, modal: false };
  }
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "SHOW_NOTIFICATION") {
    return { ...state, notification: { status: true, text: action.payload } };
  }
  if (action.type === "HIDE_NOTIFICATION") {
    return { ...state, notification: { status: false } };
  }
  if (action.type === "FAV_RECIPES") {
    return { ...state, favRecipesList: action.payload };
  }
  if (action.type === "DELETE_FAV_RECIPE") {
    const newFavList = state.favRecipesList.filter((recipe) => {
      return recipe.id !== action.payload;
    });

    return { ...state, favRecipesList: newFavList };
  }
  return state;
};

export default reducer;
