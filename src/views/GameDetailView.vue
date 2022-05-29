<script setup>
import { ref, onMounted } from 'vue';
import { useGameLibraryStore } from '../stores/GameLibraryStore.js'; 
import { useRoute } from 'vue-router';

const route = useRoute();

const gameLibraryStore = useGameLibraryStore();

if(!gameLibraryStore.count) {
  await gameLibraryStore.getGameDetails(route.params.id);
}
</script>

<template>
  <main>
    <h1>Game Details</h1>

    <section class="game-detail-section">
      <h2>{{ gameLibraryStore.gameDetails.name }}</h2>

      <img :src="gameLibraryStore.gameDetails.imageUrl" loading="lazy" />

      <p class="game-description" v-html="gameLibraryStore.gameDetails.description"></p>

      <ul class="game-info-list">
        <li>
          <b>min players: </b>{{ gameLibraryStore.gameDetails.minPlayers }}
        </li>
        <li>
          <b>max players: </b>{{ gameLibraryStore.gameDetails.maxPlayers }}
        </li>
        <li>
          <b>playing time: </b>{{ gameLibraryStore.gameDetails.playingTime }}
        </li>
      </ul>

      <div class="category_container">
        <span class="category" v-for="(category, index) in gameLibraryStore.gameDetails.categories" :key="index">
          {{ category }}
        </span>
      </div>
    </section>
  </main>
</template>

<style>
@import '@/assets/base.css';

.game-detail-section {
  display: block;
  margin: 15px;
}

.game-detail-section > img {
  max-height: 25vh;
}

.game-description {
  margin-top: 10px;
  margin-right: 20px;
}

.game-info-list {
  margin: 10px;
  list-style: none;
}

.category_container {
  margin: 10px;
  display: flex;
}

.category {
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  background: var(--teal);
  color: white;
}
</style>

