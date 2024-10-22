<template>
  <div>
    <rd-hero :content="block_hero" />

    <rd-base-section v-for="item of blocks">
      <h3>{{ item.title }}</h3>
      <div class="columns" v-html="item.description"></div>
    </rd-base-section>
    
  </div>

</template>

<script setup>
const { locale, t } = useI18n()

const pageContent = await queryContent('pages', 'faq').findOne();
const { 
  block_hero,
  block_faq_whatis,
  block_faq_why_create,
  block_faq_prodive,
  block_faq_how_work,
  block_faq_geo_focus,
  block_faq_benefit,
  block_faq_involved,
  block_faq_initiative } = await useTranslator(pageContent, locale.value);
block_hero.image = "/images/testing/test-22.jpg"


const blocks = [block_faq_whatis,
  block_faq_why_create,
  block_faq_prodive,
  block_faq_how_work,
  block_faq_geo_focus,
  block_faq_benefit,
  block_faq_involved,
  block_faq_initiative]

</script>

<style scoped lang="scss">
.columns {
  --_column-width: 45ch;
}
</style>
