<template>
  <div>
    <rd-hero :content="block_hero" />

    <rd-base-section>
      <center-l measure="var(--wide)" class="columns">
        <span v-html="block_intro.description"></span>
        <p><rd-button color="primary" href="/files/rd4c-synthesis-report.pdf">{{ $t('buttons.downloadReport') }}</rd-button></p>
      </center-l>
    </rd-base-section>

    <rd-divider :content="$t('divider.principle')" color="green" />

    <rd-base-section>
      <div class="principles-grid">
        <rd-principle-card class="principles-grid__item" v-for="(i, index) in principles" :content="i"
          :data-n="index + 1" :n="index+1" />
      </div>
    </rd-base-section>
  </div>
  <!-- <a href="https://docs.google.com/document/d/1GWAdhbJy4Y89TYvRL2eycuprJaDbW-yX8EuzjnObt2M/edit">Google Doc</a> -->
</template>

<script setup>
const { locale } = useI18n()

const pageContent = await queryContent('pages').where({title: 'Principles'}).findOne();
const { 
  block_hero, 
  block_intro } = await useTranslator(pageContent, locale.value);
block_hero.image = "/images/testing/test-23.jpg"

const principles = await queryContent('principles').find();

</script>

<style scoped lang="scss">
.principles-grid {
  display: grid;
  gap: var(--s-1);
  grid-template-columns: 1fr;
  grid-row: auto;
}

.principles-grid__item {
}

.columns {
  * + * { margin-top: var(--s-1);}

  @media screen and (min-width: 768px) {
    columns: 2;
    column-gap: var(--s2);
  }
  
}


</style>
