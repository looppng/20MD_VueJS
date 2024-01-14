<template>
  <section class="container">
    <h3 class="heading">Available Recipes:</h3>
    <div v-for="recipe in recipes" :key="recipe.id">
      <router-link :to="{ name: 'recipe', params: { id: recipe.id } }" class="nav-link">
        <h4>{{ recipe.author }}</h4>
        <h5>{{ recipe.time }}</h5>
        <p class="paragraph">{{ recipe.description }}</p>
      </router-link>
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
  }
}
</script>

<style></style>
