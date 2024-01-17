<template>
  <SingleRecipe :id="id" />
</template>

<script setup lang="ts">
import SingleRecipe from '@/components/SingleRecipe.vue'

defineProps(['id'])
</script>
