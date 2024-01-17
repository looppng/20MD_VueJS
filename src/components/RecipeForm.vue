<template>
  <form id="form" @submit.prevent="saveRecipe">
    <div>
      <label for="recipe">Recipe name:</label>
      <input
        v-model="model.recipe.recipe"
        type="text"
        id="recipe"
        placeholder="What is the name of recipe"
        required
      />
    </div>

    <div>
      <label for="author">Recipe author:</label>
      <input
        v-model="model.recipe.author"
        type="text"
        id="author"
        placeholder="What is the name of author"
        required
      />
    </div>

    <div>
      <label for="time">Prep & Cooking time:</label>
      <input v-model="model.recipe.time" type="text" id="time" placeholder="1h 30min" required />
    </div>

    <div>
      <label for="description">Cooking Process description:</label>
      <textarea
        v-model="model.recipe.description"
        id="description"
        placeholder="Be sure to include ingredients and step by step method"
        required
      />
    </div>

    <div>
      <label for="image">Image url:</label>
      <input
        v-model="model.recipe.image"
        type="text"
        id="image"
        placeholder="Image url..."
        required
      />
    </div>

    <div>
      <label>Difficulty:</label>
      <select v-model="model.recipe.difficulty">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>

    <button class="btn btn-success mt-3">Add Recipe</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { toast } from 'vue3-toastify'
import { useRouter } from 'vue-router'
import type { IRecipe } from '@/interfaces/interfaces'

const model = ref<IRecipe>({
  recipe: {
    author: '',
    time: '',
    description: '',
    difficulty: '',
    recipe: '',
    image: ''
  }
})
const router = useRouter()
const saveRecipe = async () => {
  try {
    if (confirm('Are you sure you entered everything correctly?')) {
      const response = await fetch('http://localhost:3000/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(model.value.recipe)
      })

      if (!response.ok) {
        console.log('Failed to add this recipe')
      }

      await response.json()

      toast.success('Recipe created successfully!', {
        autoClose: 1500,
        position: 'top-left'
      })

      setTimeout(() => {
        router.push('/recipes')
      }, 1500)
    }
  } catch (error: any) {
    console.error(error.message)
  }
}
</script>

<style>
form {
  max-width: 420px;
  margin: 32px auto;
  background: #424242;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #f2f2f2;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input,
textarea,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
  background: #e8f1f0;
}
</style>
