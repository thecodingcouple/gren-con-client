<script setup>
const props = defineProps({
    name: String,
    imageUrl: String
});

</script>

<template>
    <figure class="gamecard">
        <img class="gamecard_image" :src="imageUrl" alt="A game" />
        <figcaption>{{ name }}</figcaption>
    </figure>
</template>

<style>
@import '@/assets/base.css';

.gamecard {
    width: 15vw !important;
    height: 20vw;
    background: white;
}

.gamecard_image {
    max-width: 200px;
}
</style>