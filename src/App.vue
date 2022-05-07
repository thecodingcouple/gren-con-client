<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>Gren Con</div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/library">Game Library</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';
</style>
