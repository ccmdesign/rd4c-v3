<template>
  <nuxt-link class="rd-update-card" :to="content._path">
    <img :src="`https://cms.thegovlab.com/assets/${content.cover_image.id}`" :alt="content.title">
    <stack-l class="rd-update-card__content">
      <h3>{{ content.title }}</h3>
      <h4 v-if="content.tagline">{{ content.tagline }}</h4>
      <rd-button color="accent" class="margin-top:auto">Read More</rd-button>
    </stack-l>

    <!-- <pre>{{ content }}</pre> -->

  </nuxt-link>
</template>

<script setup>
defineProps({
  content: {
    type: Object,
    required: true
  }
})

</script>

<style lang="scss" scoped>
.rd-update-card {
  border: 1px solid hsla(var(--base-hsl), .1);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  
  &__content {
    --space: var(--s-1);
    padding: var(--s0);
    flex: 1;

    > *:nth-last-child(2) {
      margin-bottom: var(--s0);
    }
  }

  h3 {
    font-size: 1.2rem;
    line-height: 1.4;
    font-weight: 500;
  }

  h4 {
    font-size: 1rem;
    font-weight: 300;
  }

  * {
    color: var(--base-color);
  }

  @media screen and (max-width: 768px) {
    box-sizing: border-box;
  }
}

</style>
