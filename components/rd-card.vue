<template>
  <!-- @Todo: Douglas, não sei exatamente como devemos puxar as imagens. Achei esse
     filename_disk no Directus/Content. Por favor confira se isso vai funcionar.
     Se não, me avise como devemos fazer. -->
  <!-- <img v-if="content.cover_image.filename_disk" :src="`https://cms.thegovlab.com/assets/${content.cover_image.filename_disk}`" alt=""> -->
  <!-- <img src="/images/default.jpg" alt=""> -->

  <div class="rd-card" :color="content.color">
    <img v-if="content.cover_image" :src="content.cover_image" alt="">
    <img v-else-if="content.image" :src="content.image" alt="">
    <img v-else src="/images/default.jpg" alt="">

    <div class="rd-card__content">
      <header>
        <h5 v-if="content.brow">{{ content.brow }}</h5>
        <h3 v-if="content.heading">{{ content.heading }}</h3>
        <h3 v-else-if="content.title">{{ content.title }}</h3>
        <p v-if="content.date" class="date" v-html="formatDate(content.date)"></p>
        <h4 v-if="content.tagline">{{ content.tagline }}</h4>
      </header>
      <div>
        <span v-html="content.description"></span>
      </div>
      <div class="rd-card__action">
        <a v-if="content.url && content.url.startsWith('https')" class="button" data-size="full-width" color="primary" :href="content.url"
          target="_blank">Go to Resource</a>
        <nuxt-link v-else class="button" color="primary" data-size="full-width" :to="content._path">
          Read More</nuxt-link>
      </div>
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

</script>

<style lang="scss" scoped>
.rd-card {
  border: 1px solid hsla(var(--rd-orange), 1);
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr;
  box-shadow: 0 4px 8px hsla(var(--base-hsl), 0.15);
  align-items: start;
}

.rd-card__content {
  padding: var(--s1);
  display: grid;
  gap: var(--s-1);
  grid-template-rows: auto 1fr auto;
  grid-template-areas: "heading" "description" "action";
  height: fill-available;
}

.rd-card__content header {
  grid-area: heading;
} 

.rd-card img {
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  object-fit: cover;
}

.rd-card h5 {
  font-size: 1rem;
  text-transform: uppercase;
  color: hsla(var(--rd-green), 1);
}

.rd-card h3 {
  font-size: 1.25rem;
  color: hsla(var(--rd-purple), 1);
}

.rd-card h4 {
  font-size: 1rem;
}

.rd-card .description {
  font-size: 1rem;
  grid-area: description;
}
.rd-card .date {
  font-size: 1rem;
  font-weight: 500;
}

.rd-card__action {
  margin-top: auto;
  grid-area: action;
}
</style>
