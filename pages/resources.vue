<template>
  <div>
    <rd-hero :content="bh_caseStudies" v-if="route.query && route.query.tab == 'case-studies'" />
    <rd-hero :content="bh_tools" v-else-if="route.query && route.query.tab == 'tools'" />
    <!-- <rd-base-section>
      <div class="columns" v-html="block_intro.description"></div>
    </rd-base-section> -->
    
    <!-- <rd-base-section>
      <h3 class="aux">[Interactive global map that can be clicked to display projects my continent]</h3>
    </rd-base-section> -->

    <rd-tabs-section color="primary" :tabsIDs="tabs">
      <template #tabs>
        <span>{{ $t('tabs.caseStudies.label') }}</span>
        <!-- This is currently hidden because we don't have any tools in the CMS yet. We will show it once we do. -->
        <span>{{ $t('tabs.tools.label') }}</span>
      </template>

      <template #tab-1>
        <rd-base-section :id="$t('tabs.caseStudies.id')">
          <stack-l space="var(--s3)">
            <rd-case-study-card v-for="i in caseStudies" v-bind:key="i.slug" :content="i" />
          </stack-l>
        </rd-base-section>
      </template>

      <template #tab-2>
        <rd-base-section :id="$t('tabs.tools.id')">
          <stack-l space="var(--s3)">
            <rd-case-study-card v-for="i in tools" v-bind:key="i.slug" :content="i" :tags="false" :brow="false" />
          </stack-l>
        </rd-base-section>
      </template>
    </rd-tabs-section>
  </div>
  <!-- <a href="https://docs.google.com/document/d/1GWAdhbJy4Y89TYvRL2eycuprJaDbW-yX8EuzjnObt2M/edit">Google Doc</a> -->
</template>

<script setup>
const { locale, t } = useI18n()
const route = useRoute();

const pageContent = await queryContent('pages', 'publications').findOne();

const bh_caseStudies = pageContent['case-studies'][locale.value];
bh_caseStudies.image = "/images/testing/test-22.jpg"
bh_caseStudies.imageCredit = "Photo by Priscilla Du Preez/Unsplash"

const bh_tools = pageContent['tools'][locale.value];
bh_tools.image = "/images/testing/test-22.jpg"
bh_tools.imageCredit = "Photo by Priscilla Du Preez/Unsplash"


const tools = await queryContent(locale.value, 'publications').where({"publication_type": 'tools'}).sort({sort: 1}).find();
const caseStudies = await queryContent(locale.value, 'publications').where({"publication_type": 'case_study'}).sort({sort: 1}).find();

const tabs = [t('tabs.caseStudies.id'), t('tabs.tools.id')]
</script>

<style scoped lang="scss">
.columns {
  --_column-width: 45ch;
}
</style>
