<template>
  <div>
    <rd-hero :content="block_hero" />
    <rd-base-section color="base">
      <cluster-l class="filters | padding-bottom:s1" justify="center">
        <label class="button" data-size="s"><input type="checkbox" id="">Guest Blog</label>
        <label class="button" data-size="s"><input type="checkbox" id="">New Publication</label>
        <label class="button" data-size="s"><input type="checkbox" id="">New Video</label>
        <label class="button" data-size="s"><input type="checkbox" id="">Event</label>
        <label class="button" data-size="s"><input type="checkbox" id="">Announcement</label>
        <label class="button" data-size="s"><input type="checkbox" id="">Explainer</label>
      </cluster-l>
      <rd-card-grid>
        <rd-card v-for="post in articles" v-bind:key="post.slug" :content="post" source="blog"/>
      </rd-card-grid>
    </rd-base-section>
  </div>
</template>

<script setup>
const { locale } = useI18n();

const pageContent = await queryContent('pages', 'updates').findOne();
const { block_hero } = await useTranslator(pageContent, locale.value);
block_hero.image = "/images/testing/test-2.jpg"
  
const articles = await queryContent(locale.value, 'articles').find();
  
</script>

<style lang="scss" scoped>

.button {
  --button-color: hsla(var(--rd-purple), 1);
  --button-text-color: hsla(var(--rd-white), 1);
  --button-padding-block: var(--s-1);
}

.button input[type="checkbox"] { display: none; }
.button:has(input:checked) { background-color: var(--button-color); }


</style>
