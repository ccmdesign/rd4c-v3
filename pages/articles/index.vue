<template>
  <div id="list-container">
    <rd-hero :content="block_hero" />
    <rd-base-section color="base">
      <div class="center">
        <fieldset class="search-field">
          <input class="search" type="search">
        </fieldset>
        
      </div>
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
  
const articles = await queryContent(locale.value, 'articles').find();
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
  border-radius: 4px 0 0 4px;
}
</style>
