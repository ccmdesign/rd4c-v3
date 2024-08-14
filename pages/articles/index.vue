<template>
  <div>
    <rd-hero :content="hero_content" />
    <rd-base-section>
      <rd-card-grid>
        <rd-card v-for="post in articles" v-bind:key="post.slug" :content="post" />
      </rd-card-grid>

      <!-- <pre>{{ articles }}</pre> -->
  </rd-base-section>
  </div>
</template>

<script setup>
const hero_content = {
  brow: 'Responsible Data for Children',
  title: 'Updates & News',
  tagline: 'News and developments from RD4C',
  image: "/images/hero/readings.jpg"
}
  
  const articles = await queryContent('articles').find();
  
</script>

<style lang="scss" scoped>

</style>
