<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/">
        <img src="../assets/navlogo.svg" alt="Logo" class="logo" />
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse navWrapper" id="navbarNav">
        <ul class="navbar-nav nav-items">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/recipes" class="nav-link">Recipes</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/create" class="nav-link">Create</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.navWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  height: 24px;
}

.nav-item {
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s ease;
}

.nav-item:hover {
  border-bottom: 1px solid white;
}
</style>
