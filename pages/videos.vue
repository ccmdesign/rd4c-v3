<template>
  <!-- @ToDo: Translate -->
  <div>
    <rd-hero :content="block_hero" />

    <!-- Essa lista vai mudar para "videos", e vai receber Bites and Lessons, Webinars, Explainers
          https://www.notion.so/ccmdesign/Conte-do-Videos-312685a4148d40c98e251b47c1c933d8?pvs=4
        -->

    <rd-base-section>
      <h2>{{ block_lessons.title }}</h2>
      <span v-html="block_lessons.description"></span>
        <!-- <h3 class="aux">Bites</h3> -->
        <!-- <pre>{{ videos }}</pre> -->

        <rd-card-grid>
          <rd-card v-for="video in videos" :content="video" />
        </rd-card-grid>
      
    </rd-base-section>

    <rd-base-section>
      <h2>{{ block_webinars.title }}</h2>
      <span v-html="block_webinars.description"></span>
      <!-- <h3 class="aux">Webinars</h3> -->
      <rd-card-grid>
        <rd-card v-for="video in videos" :content="video" />
      </rd-card-grid>

      
    </rd-base-section>

    <rd-base-section>
      <h2>{{ block_explainers.title }}</h2>
      <span v-html="block_explainers.description"></span>
      <!-- <h3 class="aux">Explainers</h3> -->
      <rd-card-grid>
        <rd-card v-for="video in videos" :content="video" />
      </rd-card-grid>
    </rd-base-section>

    <rd-signup-section />
  </div>
</template>

<script setup>
const { locale } = useI18n()

const pageContent = await queryContent('pages', 'videos').findOne();
const { 
  block_hero,
  block_explainers,
  block_webinars,
  block_lessons } = await useTranslator(pageContent, locale.value);
block_hero.image = "/images/hero/readings.jpg"

const videos = await queryContent('videos').find();

</script>

<style scoped
  lang="scss">
.form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--s0);
  margin-block: auto;
}
</style>
