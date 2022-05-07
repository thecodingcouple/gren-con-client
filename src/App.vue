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
  <main>
    <RouterView />
  </main>
  <footer>
    &copy; 2022 The 42nd
  </footer>
</template>

<style>
@import '@/assets/base.css';

#app {
  display: flex;
  flex-direction: column;
}

#app > main {
  flex: 1;
  padding: 15px;
}

header {
  display: flex;
  flex: 0;
  background-color: var(--purple);
  height: 100%;
  align-items: center;
  box-shadow: 0 0 20px black;
}

header > div {
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
}

header,
nav * {
  color: white;
}

nav {
  margin-left: auto;
}

nav * {
  text-decoration: none;
  margin-left: 15px;
}

nav *:hover {
  text-decoration: underline;
}

nav *.router-link-active,
nav *.router-link-exact-active {
  font-weight: bold;
}

header,
footer {
  padding: 15px;
}

footer {
  background: var(--gold);
  text-align: center;
}
</style>
