<template>
  <div class="rd-card" :color="content.color">
    <h5>{{ content.brow }}</h5>
    <h3>{{ content.heading }}</h3>
    <h4>{{ content.tagline }}</h4>
    <p>{{ formatDate(content.date) }}</p>
    
<!-- @Todo: Douglas, não sei exatamente como devemos puxar as imagens. Achei esse
     filename_disk no Directus/Content. Por favor confira se isso vai funcionar.
     Se não, me avise como devemos fazer. -->
    <!-- <img v-if="content.cover_image.filename_disk" :src="`https://cms.thegovlab.com/assets/${content.cover_image.filename_disk}`" alt=""> -->
    <img src="/images/default.jpg" alt="">
    <div class="rd-card__action">
      <nuxt-link v-if="content.url" class="button" color="primary" :to="content.url">Read
        More</nuxt-link>
      <nuxt-link v-else class="button" color="primary" :to="content._path">
        Read More</nuxt-link>
    </div>
    <!-- <pre>{{ content }}</pre> -->
  </div>
</template>

<script setup>
import { formatDate } from '~/composables/useFilters';

const props = defineProps({
  content: {
    type: Object,
    required: true,
    default: () => ({})
  }
});

// const slugifiedHeading = computed(() => props.content.slug);

// @ToDo: Douglas, estávamos usando isso na versão anterior. Atualemente estou usando o
// attr _path que vem do Directus/Content. Por favor, cheque se a minha solução funciona ou 
// devemos continuar usando o slug.
const computedUrl = computed(() => {
  return `/articles/${props.content.slug}`;
});

</script>

<style lang="scss" scoped>
.rd-card {
  --_gap: var(--s-2);
  --_padding: var(--s0);
}


.rd-card {
  display: grid;
  grid-template-rows: auto auto auto auto auto 1fr;
  grid-template-columns: 1fr;
  gap: var(--_gap);
  grid-template-areas: 
    "image"
    "brow"
    "heading"
    "tagline"
    "date"
    "action";

  border: 1px solid hsla(var(--base-hsl), .1);
  padding-bottom: var(--_padding);
  border-radius: var(--base-border-radius);  
  overflow: clip;

  > *:not(img) {
    padding-inline: var(--_padding);
  }
  
  img {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 16 / 9;
    grid-area: image;
    margin-bottom: var(--_padding);
  }

  h5 { 
    grid-area: brow;
    font-size: .85rem;
    text-transform: uppercase;
    font-weight: bold;
    color: var(--accent-color);
  }

  h3 {
    grid-area: heading;
    font-size: 1.15rem;
    line-height: 1.45;
  }
  
  h4 {
    grid-area: tagline;
    font-size: 1rem;
    line-height: 1.45;
  }

  p {
    grid-area: date;
    font-size: .85rem;
    font-weight: 600;
    color: var(--primary-color);
  }

  .rd-card__action {
    margin-top: var(--_padding);
    grid-area: action;
    display: flex;
    // align-items: flex-end;
    > * {
      margin-top: auto;
    }
  }
}
</style>
