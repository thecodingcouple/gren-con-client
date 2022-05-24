<script setup>
import { ref, onMounted } from 'vue';
import GameCard from '../components/GameCard.vue';
import { useGameLibraryStore } from '../stores/GameLibraryStore.js'; 

const gameLibraryStore = useGameLibraryStore();

if(!gameLibraryStore.count) {
  await gameLibraryStore.loadGameLibrary();
}

onMounted(() => {

});
</script>

<template>
  <main class="game-library-view">
    <h1>Game Library</h1>
    <p>Choose from over <strong>{{ gameLibraryStore.roundedCount }}+</strong> board games and expansions!</p>
    <section class="library-section">
        <!-- Games -->
        <GameCard  v-for="(game, index) in gameLibraryStore.games" :key="index" :name="game.name" :imageUrl="game.imageUrl" />
    </section>
  </main>
</template>

<style>
@import '@/assets/base.css';
.game-library-view > p {
  margin: 0 0 15px 15px;
  font-size: 1.25rem;
  overflow-wrap: break-word;
}

.library-section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}

@media (max-width: 800px) {
  .library-section {
    flex-direction: column;
  }
}
</style>