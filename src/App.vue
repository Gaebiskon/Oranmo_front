<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink :to="{name : 'articles-create'}">Create</RouterLink>
      <RouterLink :to="{name : 'login'}">Login</RouterLink>

    </nav>
  </header> -->
  <RouterView />
</template>

<style scoped>
header {
  margin-bottom: 3rem;
}
</style>
