<template>
  <div>
    <rd-hero :content="block_hero">

    </rd-hero>

    <rd-split-section id="intro" image="/images/testing/test-4.jpg">
      <h2>{{ block_intro.title }}</h2>
      <div class="cms-content" v-html="block_intro.description"></div>
    </rd-split-section>

    <rd-split-section id="about-us" image="/images/testing/test-6.jpg">
      <h2>{{ block_about_us.title }}</h2>
      <div class="cms-content" v-html="block_about_us.description"></div>
    </rd-split-section>

    <rd-split-section id="our-approach" image="/images/testing/test-5.jpg">
      <h2>{{ block_approach.title }}</h2>
      <div class="cms-content" v-html="block_approach.description"></div>
    </rd-split-section>

    <rd-principles-section :block="block_principle_led"/>
    
    <!-- @ToDo: Merge these two components -->
    <rd-divider v-if="block_team.brow" :content="block_team.brow" color="primary" class="divider"/>
    <rd-team-section :block="block_team"/>
    
    <!-- @ToDo: Merge these two components -->
    <rd-divider :content="block_testimonials.title" color="yellow"></rd-divider>
    <rd-video-section id="testimonials" video="https://www.youtube.com/embed/x4Nu8XhaDcw?si=rpCmMPwDqmXyVJ36">
      <div class="cms-content" v-html="block_testimonials.description"></div>
    </rd-video-section>
  </div>
  <!-- <a href="https://docs.google.com/document/d/1GWAdhbJy4Y89TYvRL2eycuprJaDbW-yX8EuzjnObt2M/edit">Google Doc</a> -->
</template>

<script setup>
const { locale } = useI18n()

const pageContent = await queryContent('pages', 'about').findOne();
const { 
  block_hero, 
  block_intro,
  block_about_us,
  block_team,
  block_principle_led,
  block_approach,
  block_testimonials } = await useTranslator(pageContent, locale.value);
block_hero.image = "/images/testing/test-9.jpg";

</script>

<style scoped
  lang="scss">
  .team {
    display: grid;
    grid-template-columns: minmax(250px, 1fr);
  }
</style>
