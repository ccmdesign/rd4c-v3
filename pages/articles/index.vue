<template>
  <div>
    <rd-hero :content="block_hero" />
    <rd-base-section>
      <rd-card-grid>
        <rd-card v-for="post in articles" v-bind:key="post.slug" :content="post" />
      </rd-card-grid>

      <!-- <pre>{{ articles }}</pre> -->
  </rd-base-section>
  </div>
</template>

<script setup>
const { locale } = useI18n()

const pageContent = await queryContent('pages', 'updates').findOne();
const { block_hero } = await useTranslator(pageContent, locale.value);
block_hero.image = "/images/hero/readings.jpg"
  
const articles = await queryContent('articles').find();
  
</script>

<style lang="scss" scoped>

</style>
