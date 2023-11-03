import { createSelector } from "reselect";

export const foodsSelector = (state) => state.foods.data;

export const searchNameSelector = (state) => state.filters.name;
export const searchDietSelector = (state) => state.filters.diet;
export const searchIngredientsSelector = (state) => state.filters.ingredients;

export const usersSelector = (state) => state.users.data;
export const userSelector = (state) => state.user;

export const foodsRemainingSelector = createSelector(
  foodsSelector,
  searchNameSelector,
  searchDietSelector,
  searchIngredientsSelector,
  (foods, name, diet, ingredients) => {
    const filterByName = foods.filter((food) =>
      food.name.toLowerCase().includes(name)
    );
    const filterByDiet =
      !diet || diet === "Tất cả chế độ ăn"
        ? [...filterByName]
        : filterByName.filter((food) => food.diet === diet);
    const filterByIngredients =
      ingredients.length === 0
        ? [...filterByDiet]
        : filterByDiet.filter((food) => {
            const _ingredients = food.ingredients.map((ingredient) =>
              ingredient.name.toLowerCase()
            );
            const newIngredients = ingredients.map((ingredient) =>
              ingredient.toLowerCase()
            );
            const hasIngredients = _ingredients.some((ingredient) =>
              newIngredients.includes(ingredient)
            );
            return hasIngredients;
          });
    return filterByIngredients;
  }
);
