<template>
  <div class="container mt-3">
    <h1 class="heading">Discover the Art of Cooking</h1>
    <p class="paragraph">
      Welcome to our culinary world, where every recipe tells a story and each dish is a
      masterpiece.
    </p>

    <div class="featured-recipes mt-5">
      <h2 class="sub-heading">Featured Recipes</h2>
      <div class="recipe-card mt-4">
        <img src="./../assets/carbonara.jpg" alt="Featured Recipe" class="recipe-image" />
        <div class="recipe-details">
          <h3 class="recipe-title">Spaghetti Carbonara</h3>
          <p class="recipe-description">
            Indulge in the creamy richness of classic Italian Spaghetti Carbonara. A delight for
            pasta lovers!
          </p>
          <router-link to="/recipes" class="btn btn-primary">Explore Recipes</router-link>
        </div>
      </div>
    </div>

    <p class="paragraph mt-5">
      Whether you're a seasoned chef or a cooking enthusiast, our collection of recipes spans a wide
      range of cuisines, from comforting classics to adventurous delights. Dive into the world of
      flavors and embark on a culinary journey with us.
    </p>

    <h2 class="sub-heading mt-5">Share Your Culinary Creations</h2>
    <p class="paragraph mt-3">
      Have a recipe you'd like to share with the community? Join us in celebrating the joy of
      cooking! Create an account, submit your recipes, and connect with fellow food enthusiasts.
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.heading,
.paragraph {
  display: flex;
  justify-content: center;
}

.sub-heading {
  margin-top: 30px;
  font-size: 1.5em;
  color: #007bff;
  display: flex;
  justify-content: center;
}

.featured-recipes {
  margin-top: 40px;
}

.recipe-card {
  display: flex;
  margin-bottom: 30px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.recipe-card:hover {
  box-shadow: 0 0 15px rgba(39, 41, 42, 0.5);
}

.recipe-image {
  width: 200px;
  height: 150px;
  object-fit: cover;
}

.recipe-details {
  padding: 15px;
}

.recipe-title {
  font-size: 1.2em;
  margin-bottom: 8px;
  color: #333;
}

.recipe-description {
  font-size: 1em;
  color: #555;
}

.btn-primary {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>
