<script setup>
import Navbar from '@/components/Navbar.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { id } = route.params
</script>

<template>
  <Navbar />
  <router-view />
</template>
