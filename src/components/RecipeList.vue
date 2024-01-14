<template>
  <section class="container">
    <h3 class="heading">Available Recipes:</h3>
    <div class="image">
      <img src="#" alt="image" />
    </div>
    <div v-for="recipe in recipes" :key="recipe.id" class="mt-2 mb-4">
      <div class="image"></div>
      <router-link :to="{ name: 'recipe', params: { id: recipe.id } }" class="nav-link">
        <h4>{{ recipe.author }}</h4>
        <h5>{{ recipe.time }}</h5>
        <p>{{ recipe.difficulty }}</p>
      </router-link>
      <div class="action">
        <router-link :to="{ path: '/recipes/' + recipe.id + '/edit' }" class="btn btn-info"
          >Edit</router-link
        >
        <Button type="button" @click="deleteRecipe(recipe.id)" class="btn btn-danger">
          Delete
        </Button>
      </div>
    </div>
  </section>
</template>

<script>
import { toast } from 'vue3-toastify'

export default {
  data() {
    return {
      recipes: []
    }
  },
  mounted() {
    this.fetchRecipes()
  },
  methods: {
    fetchRecipes() {
      fetch('http://localhost:3000/recipes')
        .then((res) => res.json())
        .then((data) => (this.recipes = data))
        .catch((err) => console.error(err.message))
    },
    deleteRecipe(recipeId) {
      if (confirm('Are you sure you want to delete this recipe?')) {
        fetch(`http://localhost:3000/recipes/${recipeId}`, {
          method: 'DELETE'
        })
          .then((res) => {
            if (res.ok) {
              this.fetchRecipes()
              toast.success('Recipe deleted successfully!', {
                autoClose: 1500,
                position: toast.POSITION.TOP_LEFT
              })
            } else {
              toast.error('Error deleting this recipe!', {
                autoClose: 1500,
                position: toast.POSITION.TOP_LEFT
              })
            }
          })
          .catch((err) => console.error(err.message))
      }
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
