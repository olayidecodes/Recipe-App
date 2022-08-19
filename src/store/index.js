import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [{
      slug: 'jollof-rice',
      title: 'Jollof Rice',
      description: 'A delicious rice recipe made with beef, stock, special seasoning, and sauce.',
      ingredients: [
        '4 cups of rice',
        '1 onion, chopped',
        'Tomato, pepper and scotch bonnet',
        'Groundnut oil',
        'Tomato paste'
      ],
      method: [
        'Boil and fry chicken over medium heat',
        'Pour seasonings in chicken stock to simmer',
        'Add curry, thyme, garlic and ginger spices and cook for about 10 minutes',
        'Pour washed amd parboiled rice',
        'Put bay leaf',
        'Voila'
      ]
    },

    {
      slug: 'ramen noodle',
      title: 'Ramen Noodle',
      description: 'A delicious rice recipe made with beef, stock, special seasoning, and sauce.',
      ingredients: [
        '4 cups of rice',
        '1 onion, chopped',
        'Tomato, pepper and scotch bonnet',
        'Groundnut oil',
        'Tomato paste'
      ],
      method: [
        'Boil and fry chicken over medium heat',
        'Pour seasonings in chicken stock to simmer',
        'Add curry, thyme, garlic and ginger spices and cook for about 10 minutes',
        'Pour washed amd parboiled rice',
        'Put bay leaf',
        'Voila'
      ]
    }
    ]
  },
  getters: {
  },
  mutations: {
    ADD_RECIPE (state, recipe) {
      state.recipes.push(recipe)
    }
  },
  actions: {
  },
  modules: {
  }
})
