<template>
  <section class="container">
    <h3 class="heading">Available Recipes:</h3>
    <div v-for="recipe in recipes" :key="recipe.id" class="mt-2 mb-4 card">
      <div class="row">
        <div class="col-5 image">
          <img :src="recipe.image" alt="recipe image" class="img" />
        </div>
        <div class="col-7">
          <router-link :to="{ name: 'recipe', params: { id: recipe.id } }" class="nav-link">
            <h4 class="name">{{ recipe.recipe }}</h4>
            <div class="timeW mb-3">
              <img src="../assets/time-svgrepo-com.svg" alt="time" class="timeImg" />
              <h5 class="time">{{ recipe.time }}</h5>
            </div>
            <span class="difficulty">{{ recipe.difficulty }}</span>
          </router-link>
          <div class="action mt-4">
            <router-link :to="{ path: '/recipes/' + recipe.id + '/edit' }" class="btn btn-info"
              >Edit</router-link
            >
            <Button type="button" @click="deleteRecipe(recipe.id)" class="btn btn-danger">
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { toast } from 'vue3-toastify'

interface IRecipe {
  id: number
  recipe: string
  author: string
  time: string
  description: string
  difficulty: string
  image: string
}

const recipes = ref<IRecipe[]>([])

const fetchRecipes = async () => {
  try {
    const response = await fetch('http://localhost:3000/recipes')
    recipes.value = await response.json()
  } catch (error: any) {
    console.error(error.message)
  }
}

const deleteRecipe = async (recipeId: number) => {
  try {
    if (confirm('Are you sure you want to delete this recipe?')) {
      const response = await fetch(`http://localhost:3000/recipes/${recipeId}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        await fetchRecipes()
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
    }
  } catch (error: any) {
    console.error(error.message)
  }
}

onMounted(fetchRecipes)
</script>

<style>
.action {
  display: flex;
  gap: 1rem;
}

.timeImg {
  width: 20px;
  height: 20px;
}

.timeW {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.card {
  padding: 1rem;
}

.difficulty {
  border: 1px solid black;
  border-radius: 5px;
  background: #333333;
  color: #f0f0f0;
  padding: 5px;
}

.name {
  font-size: 2em;
  color: indigo;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
