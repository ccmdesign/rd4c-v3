<template>
  <!-- @Todo: Douglas, não sei exatamente como devemos puxar as imagens. Achei esse
     filename_disk no Directus/Content. Por favor confira se isso vai funcionar.
     Se não, me avise como devemos fazer. -->
    <!-- <img v-if="content.cover_image.filename_disk" :src="`https://cms.thegovlab.com/assets/${content.cover_image.filename_disk}`" alt=""> -->
    <!-- <img src="/images/default.jpg" alt=""> -->
  
    <div class="rd-card" :color="content.color">
      <div class="rd-card__content">
        <h5>{{ content.brow }}</h5>
        <h3>{{ content.heading }}</h3>
        <h4>{{ content.tagline }}</h4>
        
        <div class="rd-card__action">
          <nuxt-link v-if="content.url" class="button" color="primary" :to="content.url">Read
            More</nuxt-link>
          <nuxt-link v-else class="button" color="primary" :to="content._path">
            Read More</nuxt-link>
        </div>
      </div>
    <pre>{{ content }}</pre>
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
  aspect-ratio: 1/1;
  overflow: clip;
  position: relative;
  background-image: url('/images/default.jpg');
  background-size: cover;
}

.rd-card:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsla(var(--rd-orange), 1);
  mix-blend-mode: color;
  z-index: 1;
}

.rd-card:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(0deg, hsla(var(--black-hsl), .7), hsla(var(--black-hsl), 0));
  z-index: 2;
}

.rd-card__content {
  z-index: 3;
  position: relative;
  padding-inline: 2rem;
  padding-block: 2rem;
  box-sizing: border-box;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
      
  > * { color: white;}

  h5 {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
  h3 {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
  h4 {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
}
</style>
