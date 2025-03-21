<template>
  <div>
    <rd-hero :content="block_hero" />

    <!-- <rd-base-section>
      <div class="columns" v-html="block_intro.description"></div>
    </rd-base-section> -->
    
    <!-- <rd-base-section>
      <h3 class="aux">[Interactive global map that can be clicked to display projects my continent]</h3>
    </rd-base-section> -->

    <rd-tabs-section color="primary">
      <template #tabs>
        <span>{{ $t('tabs.caseStudies') }}</span>
        <!-- This is currently hidden because we don't have any tools in the CMS yet. We will show it once we do. -->
        <!-- <span>{{ $t('tabs.tools') }}</span> -->
      </template>

      <template #tab-1>
        <rd-base-section id="case-studies">
          <stack-l space="var(--s3)">
            <rd-case-study-card v-for="i in caseStudies" v-bind:key="i.slug" :content="i" />
          </stack-l>
        </rd-base-section>
      </template>

      <template #tab-2>
        <rd-base-section id="tools">
          <h2>Tools Temp</h2>
          <rd-card-grid>
            <rd-card v-for="i in tools" v-bind:key="i.slug" :content="i" />
          </rd-card-grid>
        </rd-base-section>
      </template>
    </rd-tabs-section>
  </div>
  <!-- <a href="https://docs.google.com/document/d/1GWAdhbJy4Y89TYvRL2eycuprJaDbW-yX8EuzjnObt2M/edit">Google Doc</a> -->
</template>

<script setup>
const { locale, t } = useI18n()

const pageContent = await queryContent('pages', 'publications').findOne();
const { 
  block_hero, 
  block_intro } = await useTranslator(pageContent, locale.value);
block_hero.image = "/images/testing/test-22.jpg"
block_hero.imageCredit = "Photo by Priscilla Du Preez/Unsplash"

const tools = await queryContent('publications').where({"publication_type": 'tools'}).sort({sort: 1}).find();
const caseStudies = await queryContent(locale.value, 'publications').where({"publication_type": 'case_study'}).sort({sort: 1}).find();

</script>

<style scoped lang="scss">
.columns {
  --_column-width: 45ch;
}
</style>
