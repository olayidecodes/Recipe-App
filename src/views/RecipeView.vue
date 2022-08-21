<template lang="">
    <router-link to="/">
        <span class="header">
            &lt; Back
        </span>
    </router-link>
    <div class="body">
        <div class="recipe">
            
            <h1>{{ recipe.title}}</h1>
            <p class="desc">{{ recipe.description }}</p>
            <hr />
            <div class="ingredients">
                <h3>Ingredients</h3>
                <ul>
                    <li v-for="(ingredient, i) in recipe.ingredients" :key="i" >
                        {{ ingredient }}
                    </li>
                </ul>
            </div>
            <div class="method">
                <h3>Method</h3>
                <ol>
                    <li v-for="(step, i) in recipe.method" :key="i" >
                        <span v-html="cleanText(step)" ></span>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        recipe() {
            return this.$store.state.recipes.find(recipe => 
            recipe.slug === this.$route.params.slug)
        }
    },
    methods: {
        cleanText(text) {
            return text.replace(/\n/g, '<br />')
        }
    }
}
</script>
<style>

.header {
    color: #dc68cf;
    padding: 1rem;
}

.body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.recipe {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

hr {
    width: 7rem;
}

h3 {
    font-size: 1.2rem;
    line-height: 1.8rem;
}

</style>