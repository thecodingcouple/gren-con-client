<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useGameLibraryStore } from './stores/GameLibraryStore.js';

const gameLibraryStore = useGameLibraryStore();
gameLibraryStore.loadGameLibrary();
</script>

<template>
  <header class="maxwidth">
    <section>
      <div>Gren Con</div>
      <nav>
        <RouterLink class="navbar-link" to="/">Home</RouterLink>
        <RouterLink class="navbar-link" to="/library">Game Library</RouterLink>
        <RouterLink class="navbar-link" to="/about">About</RouterLink>
        <RouterLink class="navbar-link" to="/profile">
          <img id="user-icon" src="./assets/user-icon.svg">
        </RouterLink>
      </nav>
    </section>
  </header>
  <main class="maxwidth">
    <RouterView />
  </main>
  <footer class="maxwidth">
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

#app > header,
#app > footer,
#app > main,
nav {
  width: 100%;
}

#app > main {
  flex: 1;
  background: whitesmoke;
}

section {
  display: flex;
  flex: 0;
  height: 100%;
  width: 100%;
  align-items: center;
}

header > section > div {
  white-space: nowrap;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 2px 2px rgba(0, 0, 0, .45);
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--purple);
  box-shadow: 0 0 20px black;
  z-index: 2;
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

#user-icon {
  width: 20px;
}

header > section,
footer {
  padding: 15px;
}

footer {
  background: var(--orange);
  color: white;
  text-align: center;
}

@media (max-width: 500px) {
  header > section > div {
    white-space: normal;
  }

  nav {
    flex-direction: column;
    text-align: right;
  }
}
</style>
