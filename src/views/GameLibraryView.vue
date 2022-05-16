<script setup>
import { ref, onMounted } from 'vue';
import GameCard from '../components/GameCard.vue';
import { useGameLibraryStore } from '../stores/GameLibraryStore.js'; 

const gameLibraryStore = useGameLibraryStore();

onMounted(() => {

});
</script>

<template>
  <main class="game-library-view">
    <h1>Game Library</h1>
    <section class="library-section">
        <!-- Games -->
        <GameCard  v-for="(game, index) in gameLibraryStore.games" :key="index" :name="game.name" :imageUrl="game.imageUrl" />
    </section>
  </main>
</template>

<style>
@import '@/assets/base.css';
.library-section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}
</style>