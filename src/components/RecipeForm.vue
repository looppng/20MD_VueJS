<template>
  <form id="form" @submit="handleSubmit">
    <div>
      <label for="author">Recipe Author:</label>
      <input
        v-model="model.recipe.author"
        type="text"
        id="author"
        placeholder="What is your name..."
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
      <label>Difficulty:</label>
      <select v-model="model.recipe.difficulty">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>

    <button class="btn btn-primary mt-3" @click="saveRecipe">Add Recipe</button>
  </form>
</template>

<script>
import { toast } from 'vue3-toastify'

export default {
  name: 'CreateRecipe',
  data() {
    return {
      model: {
        recipe: {
          author: '',
          time: '',
          description: '',
          difficulty: ''
        }
      }
    }
  },
  methods: {
    handleSubmit() {
      console.log('Form Submitted')
    },
    saveRecipe() {
      if (confirm('Are you sure you entered all correctly?')) {
        fetch('http://localhost:3000/recipes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.model.recipe)
        })
          .then((res) => res.json())
          .then((data) => {
            console.log('Recipe added successfully:', data)
            toast.success('Recipe added successfully!', {
              autoClose: 1500,
              position: toast.POSITION.TOP_LEFT
            })
          })
          .catch((err) => console.log(err.message))
      }
    }
  }
}
</script>

<style>
form {
  max-width: 420px;
  margin: 32px auto;
  background: #f0f0f0;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
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
}
</style>
