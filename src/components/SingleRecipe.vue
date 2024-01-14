<template>
  <section class="container">
    <h3 class="heading">A recipe</h3>
    <div v-if="recipe">
      <h4>{{ recipe.author }}</h4>
      <h5>{{ recipe.time }}</h5>
      <p class="paragraph">{{ recipe.description }}</p>
    </div>
    <div v-else-if="error">
      <p>Error: {{ error }}</p>
    </div>
    <div v-else>
      <p>Loading recipe...</p>
    </div>
  </section>
</template>

<script>
import getRecipe from '@/composables/getRecipe.js'
import { ref, onMounted } from 'vue'

export default {
  props: ['id'],
  setup(props) {
    const { recipe, error, load } = getRecipe(props.id)

    onMounted(() => {
      load()
    })

    return { recipe, error }
  }
}
</script>
