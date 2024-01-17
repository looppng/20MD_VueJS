<template>
  <div class="container not-found">
    <h2>404</h2>
    <h3>Page Not Found</h3>
    <p>Oops! The page you are looking for might be under construction or doesn't exist.</p>
    <router-link to="/recipes" class="nav-link">Go back to Recipes</router-link>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 50px;
  color: #555;
}

h2 {
  font-size: 5em;
  margin-bottom: 10px;
  color: #d9534f;
}

h3 {
  font-size: 2em;
  margin-bottom: 30px;
}

p {
  font-size: 1.1em;
}
</style>
