<script setup>
import { ref, onMounted } from 'vue';
import { useGameLibraryStore } from '../stores/GameLibraryStore.js'; 
import { useRoute } from 'vue-router';

const route = useRoute();
const gameLibraryStore = useGameLibraryStore();
const game = await gameLibraryStore.getGameDetails(route.params.id);

</script>

<template>
  <main>
    <h1>Game Details</h1>

    <section class="game-detail-section">
      <h2>{{ game.name }}</h2>

      <img :src="game.imageUrl" loading="lazy" />

      <p class="game-description" v-html="game.description"></p>

      <ul class="game-info-list">
        <li>
          <b>min players: </b>{{ game.minPlayers }}
        </li>
        <li>
          <b>max players: </b>{{ game.maxPlayers }}
        </li>
        <li>
          <b>playing time: </b>{{ game.playingTime }}
        </li>
      </ul>

      <div class="category_container">
        <span class="category" v-for="(category, index) in game.categories" :key="index">
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

