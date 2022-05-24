<script setup>
import { computed } from 'vue';

const props = defineProps({
    name: String,
    imageUrl: String
});

const imgAlt = computed(() => {
    return props.name ? `${props.name} board game box photo` : 'Board game box art';
});

</script>

<template>
    <figure class="gamecard">
        <img class="gamecard_image" :src="imageUrl" :alt="imgAlt" loading="lazy" />
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
        max-width: 365px;
        max-height: none;
        width: 365px;
        height: 365px;
        object-fit: cover;
    }

    .gamecard figcaption {
        inline-size: auto;
    }
}
</style>