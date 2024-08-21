<template>
  <!-- @ToDo: Translate -->
  <div>
    <rd-hero :content="block_hero" />

    <!-- Essa lista vai mudar para "videos", e vai receber Bites and Lessons, Webinars, Explainers
          https://www.notion.so/ccmdesign/Conte-do-Videos-312685a4148d40c98e251b47c1c933d8?pvs=4
        -->
    <rd-tabs-section color="primary">
      <template #tabs>
        <span>{{ $t('tabs.bites') }}</span>
        <span>{{ $t('tabs.webinars') }}</span>
        <span>{{ $t('tabs.explainers') }}</span>
      </template>

      <template #tab-1>
        <rd-base-section>
          <rd-card-grid>
            <rd-card v-for="i in bites" v-bind:key="i.slug" :content="i" />
          </rd-card-grid>
        </rd-base-section>
      </template>

      <template #tab-2>
        <rd-base-section>
          <rd-card-grid>
            <rd-card v-for="i in webinars" v-bind:key="i.slug" :content="i" />
          </rd-card-grid>
        </rd-base-section>
      </template>
      <template #tab-3>
        <rd-base-section>
          <rd-card-grid>
            <rd-card v-for="i in explainers" v-bind:key="i.slug" :content="i" />
          </rd-card-grid>
        </rd-base-section>
      </template>
    </rd-tabs-section>
  </div>
</template>

<script setup>
const { locale } = useI18n()

const pageContent = await queryContent('pages', 'videos').findOne();
const { block_hero } = await useTranslator(pageContent, locale.value);

const { 
  block_explainers,
  block_webinars,
  block_lessons } = await useTranslator(pageContent, locale.value);
  block_hero.image = "/images/testing/test-26.jpg"

const bites = await queryContent(locale.value, 'videos').where({ category: 'bites' }).find();
const explainers = await queryContent(locale.value, 'videos').where({ category: 'explainers' }).find();
const webinars = await queryContent(locale.value, 'videos').where({ category: 'webinars' }).find();

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
