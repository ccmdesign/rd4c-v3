<template>
  <!-- Estou tomando um erro nessa página -->

  <div>
    <rd-hero :content="hero_content" />
    <base-section>
      <div class="list">
        <rd-update-card v-for="post in articles" v-bind:key="post.slug" :content="post" />
      </div>
    </base-section>

  </div>
</template>

<script setup>
const hero_content = {
  title: 'Responsible Data for Children',
  tagline: 'Guidance, tools and leadership to support the responsible handling of data for and about children.',
  image: "/images/hero/readings.jpg"
}
  
  const articles = await queryContent('articles').find();
  
</script>

<style lang="scss" scoped>

</style>
