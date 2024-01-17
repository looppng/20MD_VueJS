<template>
  <form id="form" @submit.prevent="saveRecipe">
    <div>
      <label for="recipe">Recipe name:</label>
      <input v-model="model.recipe.recipe" type="text" id="recipe" required />
    </div>

    <div>
      <label for="author">Author name:</label>
      <input v-model="model.recipe.author" type="text" id="author" required />
    </div>

    <div>
      <label for="time">Prep & Cooking time:</label>
      <input v-model="model.recipe.time" type="text" id="time" required />
    </div>

    <div>
      <label for="description">Cooking Process description:</label>
      <textarea v-model="model.recipe.description" id="description" required />
    </div>

    <div>
      <label for="image">Image url:</label>
      <input v-model="model.recipe.image" type="text" id="image" required />
    </div>

    <div>
      <label>Difficulty:</label>
      <select v-model="model.recipe.difficulty">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>

    <button class="btn btn-info mt-3">Save</button>
  </form>
</template>

<script>
import { toast } from 'vue3-toastify'

export default {
  name: 'EditRecipe',
  data() {
    return {
      model: {
        recipe: {
          author: '',
          time: '',
          description: '',
          difficulty: '',
          image: '',
          recipe: ''
        }
      },
      id: null
    }
  },
  mounted() {
    this.id = this.$route.params.id
    this.getRecipeData(this.id)
  },
  methods: {
    getRecipeData(id) {
      fetch(`http://localhost:3000/recipes/${id}`)
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          this.model.recipe = data
        })
    },
    saveRecipe() {
      const id = this.$route.params.id

      fetch(`http://localhost:3000/recipes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.model.recipe)
      }).then((res) => {
        if (!res.ok) {
          throw Error(`Failed to update recipe with id ${id}`)
        }

        toast.success('Recipe updated successfully!', {
          autoClose: 1500,
          position: 'top-left'
        })

        setTimeout(() => {
          this.$router.push('/recipes')
        }, 1500)

        return res.json()
      })
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
