<template>
  <div>
    <rd-hero :content="block_hero" />

    <rd-base-section>
      <h3 class="aux">[Interactive global map that can be clicked to display projects my continent]</h3>
    </rd-base-section>

    <rd-base-section>
      <span v-html="block_intro.description"></span>
    </rd-base-section>
    <rd-divider :content="$t('divider.caseStudies')" color="purple" />
    <rd-base-section>
      <rd-card-grid>
        <rd-card v-for="i in caseStudies" v-bind:key="i.slug" :content="i" />
      </rd-card-grid>
    </rd-base-section>

    <rd-divider :content="$t('divider.tools')" color="purple" />
    <rd-base-section>
      <rd-card-grid>
        <rd-card v-for="i in tools" v-bind:key="i.slug" :content="i" />
      </rd-card-grid>
    </rd-base-section>
    <!-- <pre>
      {{ JSON.stringify(resources, null, 2) }}
    </pre> -->
  </div>
  <!-- <a href="https://docs.google.com/document/d/1GWAdhbJy4Y89TYvRL2eycuprJaDbW-yX8EuzjnObt2M/edit">Google Doc</a> -->
</template>

<script setup>
const { locale } = useI18n()

const pageContent = await queryContent('pages', 'publications').findOne();
const { 
  block_hero, 
  block_intro } = await useTranslator(pageContent, locale.value);
block_hero.image = "/images/testing/test-22.jpg"

const tools = await queryContent('publications').where({"publication_type": 'tools'}).find();
const caseStudies = await queryContent('publications').where({"publication_type": 'case_study'}).find();


// console.log(reports)
// console.log(caseStudies)

</script>

<style scoped
  lang="scss"></style>
