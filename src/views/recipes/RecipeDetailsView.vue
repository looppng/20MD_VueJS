<template>
  <SingleRecipe :id="id" />
</template>

<script>
import SingleRecipe from '@/components/SingleRecipe.vue'

export default {
  name: 'RecipeDetailsView',
  components: { SingleRecipe },
  props: ['id']
}
</script>
