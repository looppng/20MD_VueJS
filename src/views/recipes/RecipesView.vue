<template>
  <RecipeList />
  <RecipeForm />
</template>

<script>
import RecipeList from '@/components/RecipeList.vue'
import RecipeForm from '@/components/RecipeForm.vue'

export default {
  name: 'RecipeView',
  components: { RecipeList, RecipeForm }
}
</script>

<style></style>
