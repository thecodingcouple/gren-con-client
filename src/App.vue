<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <section>
      <div>Gren Con</div>
      <nav>
        <RouterLink class="navbar-link" to="/">Home</RouterLink>
        <RouterLink class="navbar-link" to="/library">Game Library</RouterLink>
        <RouterLink class="navbar-link" to="/about">About</RouterLink>
      </nav>
    </section>
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
  align-items: center;
}

#app * {
  width: 100%;
}

#app > header > section,
#app > main {
  max-width: 1440px;
}

#app > main {
  flex: 1;
  padding: 15px;
}

section {
  display: flex;
  flex: 0;
  height: 100%;
  width: 100%;
  align-items: center;
}

header > section > div {
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--purple);
  box-shadow: 0 0 20px black;
}

header,
.navbar-link {
  color: white;
  flex-basis: 0;
  width: fix-content;
}

nav {
  display: flex;
  justify-content: flex-end;
}

.navbar-link:hover {
  text-decoration: underline;
}

.navbar-link.router-link-active,
.navbar-link.router-link-exact-active {
  font-weight: bold;
}

.navbar-link {
  white-space: nowrap;
  text-decoration: none;
  margin-left: 15px;
}

header > section,
footer {
  padding: 15px;
}

footer {
  background: var(--gold);
  text-align: center;
}
</style>
