<template>
  <div>
    <rd-hero :content="block_hero" />
    <rd-base-section color="base">
      <rd-card-grid>
        <rd-card v-for="post in articles" v-bind:key="post.slug" :content="post" />
      </rd-card-grid>
    </rd-base-section>
  </div>
</template>

<script setup>
const { locale } = useI18n();

const pageContent = await queryContent('pages', 'updates').findOne();
const { block_hero } = await useTranslator(pageContent, locale.value);
block_hero.image = "/images/testing/test-2.jpg"
  
const articles = await queryContent(locale.value, 'articles').find();
  
</script>

<style lang="scss" scoped>

</style>
