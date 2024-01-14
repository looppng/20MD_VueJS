import { ref } from 'vue'

const getRecipes = () => {
  const recipe = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      const data = await fetch(`http://localhost:3000/recipes`)
      if (!data.ok) {
        throw Error('no data available')
      }
      recipe.value = await data.json()
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }

  return { recipes, error, load }
}

export default getRecipes
