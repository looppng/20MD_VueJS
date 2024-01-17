<template>
  <section class="container">
    <h3 class="heading">A recipe</h3>
    <div v-if="recipe" class="row box mt-5">
      <div class="col-3">
        <img :src="recipe.image" alt="recipe image" class="img" />
        <h4 class="name mt-3">{{ recipe.recipe }}</h4>
        <p class="difficulty">{{ recipe.difficulty }}</p>
        <div class="timeW mb-2">
          <img src="../assets/time-svgrepo-com.svg" alt="time" class="timeImg" />
          <h5 class="time">{{ recipe.time }}</h5>
        </div>
        <p>Recipe Author: {{ recipe.author }}</p>
      </div>
      <div class="col-6">
        <h3 class="header">Description of preparation</h3>
        <p class="description">{{ recipe.description }}</p>
      </div>
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
import { onMounted } from 'vue'

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

<style>
.box {
  display: flex;
  justify-content: center;
}

.header {
  font-size: 2em;
  color: lightseagreen;
}

.img {
  max-width: 300px;
  max-height: 190px;
  width: 100%;
  height: auto;
}
</style>
