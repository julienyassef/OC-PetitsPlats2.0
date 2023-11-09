import { getData } from "./storage.js";
import { saveData } from "./storage.js";

import { displayRecipes } from "./dom.js";

export const ingredientSearch = () => {
  const ingredientInput = document.querySelector("#ingredientInput");
  const recipes = getData();

  ingredientInput.value = '';

  // Sélectionnez les éléments div pour créer une liste d'ingrédients à partir des divs du menu ingredients
  const divsIngredients = document.querySelectorAll(".menu-filter__container-filter__menu__list-ingredients__ingredients");

  ingredientInput.addEventListener("input", (event) => {
    const value = event.target.value.toLowerCase();

    // Itérez sur les divs d'ingrédients
    divsIngredients.forEach((div) => {
      const ingrédient = div.textContent.toLowerCase();

      if (value.length >= 3) {
        // Si la longueur de la valeur est supérieure ou égale à 3, ajustez la visibilité en fonction de value dans input
        const isVisible = ingrédient.includes(value);
        div.style.display = isVisible ? "block" : "none";
      } else {
        // Si la longueur de la valeur est inférieure à 3, affichez tous les divs 
        div.style.display = "block";
      }
    });

    // if (value.length >= 3) {
    //   // Si la longueur de la valeur est supérieure ou égale à 3, ajustez la visibilité des recettes
    //   recipes.forEach((recipe) => {
    //     const recipeElement = document.getElementById(`recipe-${recipe.id}`);
    //     const recipeIngredients = recipe.ingredients
    //       .map((ingredient) => ingredient.ingredient.toLowerCase())
    //       .join(" ");

    //     if (recipe.display === true && recipeIngredients.search(value) === -1 && recipeElement) {
    //       recipeElement.style.display = "none";
    //     } else if (recipeElement) {
    //       recipeElement.style.display = "block";
    //     }
    //   });
    // }



    // if (value.length < 3) return;
    
    // const filteredRecipes = recipes.map((recipe) => {
    //   // regarder si y'a l'ingrédient dans les recette qui sont display = true
    //   if (recipe.display === true) {
    //     const recipeIngredients = recipe.ingredients
    //     .map((ingredients) => ingredients.ingredient.toLowerCase())
    //     .join(" ");
        
    //     // comparer si value est dans le tableau d'ingrédient de la recette
    //     if (recipeIngredients.search(value.toLowerCase()) === -1) {
    //       recipe.display = false;
    //     }
    //   }
    //   return recipe;
    // });
  });
};
