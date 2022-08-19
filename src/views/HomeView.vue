<template>
  <div class="home">
    <header>
      <h1>My Recipes</h1>
      <p>Add and save all your favorite recipes</p>
      <button @click="togglePopup" >Add new recipe</button>
    </header>

    <div class="recipes">
      <div class="card" v-for="recipe in $store.state.recipes" :key="recipe.slug">
        <h2>{{ recipe.title }}</h2>
        <p>{{ recipe.description }}</p>
        <router-link :to="`/recipe/${recipe.slug}`" >
          <button>View Recipe</button>
        </router-link>
      </div>
    </div>

    <div class="add_recipe_popup" v-if="popupOpen">
      <div class="popup_content">
        <h2>Add new recipe</h2>

        <form @submit.prevent="addNewRecipe">
          <div class="group">
            <label>Title</label>
            <input type="text" v-model='newRecipe.title'/>
          </div>

          <div class="group">
            <label>Description</label>
            <textarea v-model='newRecipe.description'></textarea>
          </div>

          <div class="group">
            <label>Ingredients</label>
            <div class="ingredient" v-for="i in newRecipe.ingredientRows" :key="i" >
              <input type="text" v-model="newRecipe.ingredients[i -1]" />
            </div>
            <button type="button" @click="addNewIngredient">Add Ingredient</button>
          </div>

          <div class="group">
            <label>Method</label>
            <div class="method" v-for="i in newRecipe.methodRows" :key="i">
              <textarea v-model="newRecipe.method[i -1]"></textarea>
            </div>
            <button type="button"  @click="addNewStep">Add Step</button>
          </div>

          <button type="submit">Add Recipe</button>
          <button type="button" @click="togglePopup" >Close</button>
        </form>
      </div>
    </div>
    
  </div>
</template>

<script>

import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'HomeView',
  setup() {
    const newRecipe = ref({
      title: '',
      description: '',
      ingredients: [],
      method: [],
      ingredientRows: 1,
      methodRows: 1
    })

    const popupOpen = ref(false);
    const store = useStore()

    const togglePopup = () => {
      popupOpen.value = !popupOpen.value
    }

    const addNewIngredient = () => {
      newRecipe.value.ingredientRows++;
    }

    const addNewStep = () => {
      newRecipe.value.methodRows++;
    }

    const addNewRecipe = () => {
      newRecipe.value.slug = newRecipe.value.title.toLowerCase().replace(/\s/g, '-');

      if (newRecipe.value.slug == '') {
        alert('Please enter a title');
        return;
      }

      store.commit('ADD_RECIPE', { ...newRecipe.value })

      newRecipe.value = {
        title: '',
        description: '',
        ingredients: [],
        method: [],
        ingredientRows: 1,
        methodRows: 1
      }

      togglePopup()
    }

    return {
      newRecipe,
      togglePopup,
      popupOpen,
      addNewIngredient,
      addNewStep,
      addNewRecipe
    }
  }
}
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

header {
  margin: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}

h1 {
  text-transform: uppercase;
}

p {
  text-transform: capitalize;
  letter-spacing: 1px;
}

.recipes {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.recipes .card {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #0f345d;
  border-radius: 4px;
}

.recipes .card h2 {
  font-weight: 500;

}

.recipes .card p{
  font-size: .7rem;
}

.add_recipe_popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
}

.add_recipe_popup .popup_content {
  background-color: #081c33;
  padding: 2rem;
  border: 1rem;
  width: 100%;
  max-width: 768px;
}

.popup_content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.popup_content .group {
  margin-bottom: 1rem;
}

.popup_content .group label {
  display: block;
  margin-bottom: .5rem;
}

.popup_content .group input,
.popup_content .group textarea {
  display: block;
  width: 100%;
  padding: .5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem ;
}

.popup_content .group textarea {
  height: 100px;
  resize: none;
}

.popup_content button[type='submit'] {
  margin-right: 1rem;
}

</style>