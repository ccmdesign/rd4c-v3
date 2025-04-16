<template>
  <!-- @ToDo: Translate -->
  <div>
    <rd-hero :content="block_hero" />

    <!-- Essa lista vai mudar para "videos", e vai receber Bites and Lessons, Webinars, Explainers
          https://www.notion.so/ccmdesign/Conte-do-Videos-312685a4148d40c98e251b47c1c933d8?pvs=4
        -->
    <rd-tabs-section color="primary" :tabsIDs="tabs">
      <template #tabs>
        <span>{{ $t('tabs.explainers.label') }}</span>
        <span>{{ $t('tabs.testimonials.label') }}</span>
        <span>{{ $t('tabs.trainings.label') }}</span>
      </template>

      <template #tab-1>
        <rd-base-section>
          <rd-card-grid>
            <rd-card v-for="i in explainers" v-bind:key="i.slug" :content="i" :source="'video'"/>
          </rd-card-grid>
        </rd-base-section>
      </template>

      <template #tab-2>
        <rd-base-section>
          <rd-card-grid>
            <rd-card v-for="i in testimonials" v-bind:key="i.slug" :content="i" :source="'video'"/>
          </rd-card-grid>
        </rd-base-section>
      </template>
      <template #tab-3>
        <rd-base-section>
          <rd-card-grid>
            <rd-card v-for="i in trainings" v-bind:key="i.slug" :content="i" :source="'video'" />
          </rd-card-grid>
        </rd-base-section>
      </template>
    </rd-tabs-section>
  </div>
</template>

<script setup>
const { locale, t } = useI18n()

const pageContent = await queryContent('pages', 'videos').findOne();
const { block_hero } = await useTranslator(pageContent, locale.value);
const tabs = [t('tabs.explainers.id'),t('tabs.testimonials.id'),t('tabs.trainings.id')]
const { 
  block_explainers,
  block_webinars,
  block_lessons } = await useTranslator(pageContent, locale.value);
  block_hero.image = "/images/testing/test-26.jpg"
block_hero.imageCredit = "Photo by Stem/Unsplash"

const trainings = await queryContent(locale.value, 'videos').where({ category: 'trainings' }).sort({ date: -1 }).find();
const explainers = await queryContent(locale.value, 'videos').where({ category: 'explainers' }).sort({ date: -1 }).find();
const testimonials = await queryContent(locale.value, 'videos').where({ category: 'testimonials' }).sort({ date: -1 }).find();

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
