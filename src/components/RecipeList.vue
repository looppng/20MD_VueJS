<template>
  <section class="container">
    <h3 class="heading">Available Recipes:</h3>
    <div v-for="recipe in recipes" :key="recipe.id">
      <router-link :to="{ name: 'recipe', params: { id: recipe.id } }" class="nav-link">
        <h4>{{ recipe.author }}</h4>
        <h5>{{ recipe.time }}</h5>
        <p class="paragraph">{{ recipe.description }}</p>
        <p>{{ recipe.difficulty }}</p>
      </router-link>
      <div class="action">
        <router-link :to="{ path: '/recipes/' + recipe.id + '/edit' }" class="btn btn-info"
          >Edit</router-link
        >
        <Button type="button" @click="deleteRecipe(recipe)" class="btn btn-danger"> Delete </Button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      recipes: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/recipes')
      .then((res) => res.json())
      .then((data) => (this.recipes = data))
      .catch((err) => console.log(err.message))
  },
  methods: {
    deleteRecipe() {
      console.log(recipe.id)
    }
  }
}
</script>

<style>
.action {
  display: flex;
  gap: 1rem;
}
</style>
