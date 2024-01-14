import { ref } from 'vue'

const getRecipe = (id) => {
  const recipe = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      const data = await fetch(`http://localhost:3000/recipes/` + id)
      if (!data.ok) {
        throw Error('no data available')
      }
      recipe.value = await data.json()
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }

  return { recipe, error, load }
}

export default getRecipe
