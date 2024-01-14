import { createRouter, createWebHistory } from 'vue-router'
import RecipesView from '@/views/recipes/RecipesView.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import RecipeDetailsView from '@/views/recipes/RecipeDetailsView.vue'
import NotFound from '@/views/NotFound.vue'
import EditRecipe from '@/views/recipes/EditRecipe.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: RecipesView
    },
    {
      path: '/recipes/:id',
      name: 'recipe',
      component: RecipeDetailsView,
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/recipes/:id/edit',
      name: 'editRecipe',
      component: EditRecipe
    }
  ]
})

export default router
