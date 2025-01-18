<template>
  <div class="rd-card" :color="content.color">
    <img class="rd-card__image" v-if="content.cover_image" :src="content.cover_image" />
    <img class="rd-card__image" v-else-if="content.image" :src="content.image" alt="" />
    <img class="rd-card__image" v-else src="/images/default.jpg" alt="" />

    <div class="rd-card__content | stack">
      <header>
        <h5 v-if="content.brow">{{ content.brow }}</h5>
        <h3 v-if="content.heading">{{ content.heading }}</h3>
        <h3 v-else-if="content.title">{{ content.title }}</h3>
        <h4 v-if="content.tagline">{{ content.tagline }}</h4>
      </header>
      <p v-if="content.excerptSummary">{{ content.excerptSummary }}</p>
      <div class="rd-card__action">
        <a v-if="content.url && content.url.startsWith('https')" class="button" data-size="full-width" color="primary" :href="content.url"
          target="_blank">Go to Resource</a>
        <nuxt-link v-else class="button" color="primary" data-size="full-width" :to="locale !== 'en' ? content._path : computedUrl">
          Read More</nuxt-link>
      </div>
    </div>
    <!-- <pre>{{ content }}</pre> -->
  </div>
</template>

<script setup>
import { formatDate } from '~/composables/useFilters';
const { locale } = useI18n()

const props = defineProps({
  source: {
    type: String,
    default: ''
  },
  content: {
    type: Object,
    required: true,
    default: () => ({})
  }

});

const computedUrl = computed(() => {
  if(props.content.lang === 'en') {
    return `/${ props.content._dir }/${ props.content.slug }`;
  }
});

</script>

<style lang="scss" scoped>
.rd-card {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  grid-template-areas: "image" "content";
  
  @media screen and (min-width: 768px) {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
    grid-template-areas: "image content";
  }
}

.rd-card__image {
  max-width: 93%;
  @media screen and (min-width: 768px) {
    max-width: 350px;
  }
  aspect-ratio: 16/9;
  object-fit: cover;
  grid-area: image;
  // width: calc(40% - (var(--s0) * 2));
  height: auto;
  aspect-ratio: 16/9;
  object-fit: cover;
  margin-inline: var(--s0);
  margin-top: calc(var(--s1) * -1);
  border-radius: var(--_card-radius);
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
}


.rd-card {
  // Overriding the Base Section color.
  // This is an unintended side effect of the Base Section component.
  --base-section-color: var(--base-color); 
}

.rd-card {
  --_card-radius: var(--base-border-radius);
  box-shadow: 0 4px 8px hsla(var(--base-hsl), 0.15);
  border-radius: var(--_card-radius);
  background-color: #fff;
}

.rd-card__content {
  padding: var(--s1);
  * {--space: var(--s0); }
}



.rd-card h5 {
  font-size: 1rem;
  text-transform: uppercase;
  color: hsla(var(--rd-green), 1);
}

.rd-card h3 {
  font-size: 1.25rem;
  line-height: 1.35;
  color: hsla(var(--rd-purple), 1);
}

</style>
