<script setup>
import { computed } from 'vue';

const props = defineProps({
    id: String,
    name: String,
    imageUrl: String
});

const imgAlt = computed(() => {
    return props.name ? `${props.name} board game box photo` : 'Board game box art';
});

const routeTo = computed(() => {
    return { name: 'game', params: { id: props.id }};
});

</script>

<template>
    <RouterLink :to="routeTo">
        <figure class="gamecard">
            <img class="gamecard_image" :src="imageUrl" :alt="imgAlt" loading="lazy" />
            <figcaption>{{ name }}</figcaption>
        </figure>
    </RouterLink>
</template>

<style>
@import '@/assets/base.css';

a {
  text-decoration: none;
}

.gamecard {
    width: 15vw;
    background: white;
    border-radius: 5px;
    border: 4px solid var(--teal);
    margin: 10px;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 10px gray;
    cursor: pointer;
}

.gamecard figcaption {
    background: var(--teal);
    color: white;
    padding: 15px 5px;
    height: 70px;
    overflow-wrap: break-word;
}

.gamecard_image {
    max-width: 200px;
    max-height: 200px;
    min-height: 200px;
    min-width: 200px;
    height: 100%;
    flex: 1;
    align-self: center;
    object-fit: contain;
}


@media (max-width: 1400px) {
    .gamecard {
        width: auto;
        height: auto;
        margin-bottom: 30px;
    }

    .gamecard_image {
        max-width: 150px;
        max-height: 150px;
        width: 150px;
        height: 150px;
        object-fit: contain;
    }

    .gamecard figcaption {
        inline-size: 200px;
    }
}

@media (max-width: 800px) {
    .gamecard {
        width: auto;
        height: auto;
        margin-bottom: 30px;
    }

    .gamecard_image {
        max-width: 250px;
        max-height: 250px;
        width: 250px;
        height: 250px;
    }

    .gamecard figcaption {
        inline-size: 250px;
    }
}
</style>
