<template>
  <div id="list-container">
    <rd-hero :content="block_hero" />
    <rd-base-section color="base">
      
      <cluster-l class="filters | padding-bottom:s1" justify="center">
        <div v-for="(i, index) of filters[0].items" :key="index">
          <label class="button" data-size="s"><input type="checkbox" :id="`filter-${i.value}`" style="display:none" v-model="isChecked[i.value]" :value="i.text">{{ i.text.toUpperCase() }}</label>
        </div>
      </cluster-l>

      <rd-card-grid class="list">
        <rd-card v-for="post in articles" v-bind:key="post.slug" :content="post" source="blog"/>
      </rd-card-grid>
    </rd-base-section>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue';

const { locale } = useI18n();
const { $list } = useNuxtApp()

const pageContent = await queryContent('pages', 'updates').findOne();
const { block_hero } = await useTranslator(pageContent, locale.value);
block_hero.image = "/images/testing/test-2.jpg"
block_hero.imageCredit = "Photo by Annie Spratt/Unsplash"
  
const articles = await queryContent(locale.value, 'articles').sort({ date: -1 }).find();
const filters = await queryContent('articles-filters').find();
let listObj = null;

let obj = {};
filters[0].items.forEach((item) => {
  obj[item.value] = false;
});
const isChecked = ref(obj);

watch(isChecked.value, (value) => {

  if (Object.values(isChecked.value).every((item) => item === false)) {
    listObj.filter();

  } else {
    listObj.filter(item => {
      for (const key in isChecked.value) {
        if (isChecked.value[key]) {
          if (item.values()[`filter-${key}`] === key) {
            return true;
          }
        }
      }
    })
  }

});

onMounted(() => {
  if(import.meta.client) {
    listObj = $list(filters[0].items.map(item => item.value));
  }
}); 

</script>

<style lang="scss" scoped>
.center {
  max-width: 600px;
  width: 100%;
}

.button {
  --button-color: hsla(var(--rd-purple), 1);
  --button-text-color: hsla(var(--rd-white), 1);
  --button-padding-block: var(--s-1);
}

.button input[type="checkbox"] { display: none; }
.button:has(input:checked) { background-color: var(--button-color); }

.button[data-visual="primary"] { 
  border-color: var(--button-color);
  background-color: var(--button-color);
  border-radius: 0 4px 4px 0;
}


.search-field {
  all:unset;
  display: flex;
  width: 100%;
}

.search-field input[type="search"] {
  flex: 1;
  border: 2px solid hsla(var(--rd-purple), 1);
  background-color: hsla(var(--white-hsl), .05);
  border-radius: 4px;
  padding-inline: var(--s-1);
}

.search-field input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  appearance: none;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>');
  // background-color: hsla(var(--rd-purple), 1);
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.search-field input[type="search"],
.search-field input[type="search"]::placeholder {
  color: var(--white-color);
}

.list {
  width: 100%;
}

.list:empty {
  grid-template-columns: 1fr;
}

.list:empty:after {
  content: 'No articles found';
  width: 100%;
  text-align: center;
  font-size: 2rem;
  color: hsla(var(--white-hsl), .3);
}

:deep(.rd-hero__image) {
  max-height: 70vh;
}

</style>
