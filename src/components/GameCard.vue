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
    width: 15vw;
    background: white;
    border-radius: 5px;
    border: 4px solid var(--teal);
    margin: 10px;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 10px gray;
}

.gamecard figcaption {
    background: var(--teal);
    color: white;
    padding: 15px 5px;
    height: 70px;
}

.gamecard_image {
    max-width: 200px;
    max-height: 200px;
    min-height: 200px;
    min-width: 200px;
    height: 100%;
    flex: 1;
    align-self: center;
}

@media (max-width: 800px) {
    .gamecard {
        width: auto;
        height: auto;
    }

    .gamecard_image {
        max-width: 450px;
        max-height: none;
        width: 450px;
        height: 450px;
    }
}
</style>