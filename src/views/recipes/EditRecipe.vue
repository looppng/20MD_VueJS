<template>
  <form id="form" @submit.prevent="saveRecipe">
    <div>
      <label for="author">Recipe Author:</label>
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
export default {
  name: 'EditRecipe',
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
    getRecipeData(id) {
      fetch(`http://localhost:3000/recipes/${id}`).then((res) => {
        console.log(res)
      })
    },

    saveRecipe() {
      fetch(`http://localhost:3000/recipes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.model.recipe)
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('Recipe updated successfully:', data)
        })
        .catch((err) => console.log(err.message))
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
