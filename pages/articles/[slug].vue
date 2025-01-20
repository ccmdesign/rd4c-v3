<template>
  <div>
    <header class="post-hero">
      <rd-content-grid>
        <h4 class="brow" v-if="data.post.brow">{{ data.post.brow }}</h4>
        <h2 class="heading" >{{ data.post.heading }}</h2>
        <h3 class="tagline" v-if="data.post.tagline">{{ data.post.tagline }}</h3>
        <h5 class="date" v-if="data.post.date">{{ formatDate(data.post.date) }}</h5>
        <div class="collaborators" v-if="data.post.collaborators">
          <span v-for="i in data.post.collaborators">{{ i.id }}</span>
        </div>
      </rd-content-grid>
    </header>
    <rd-prose>
      <div class="cms-content" v-html="data.post.main_content"></div>
    </rd-prose>
    <!-- <contentDoc :document="data.post.main_content"></contentDoc> -->
  </div>
</template>

<script setup>
import * as filters from '~/composables/useFilters';
const { locale } = useI18n()

const route = useRoute()

const postData = await queryContent(locale.value, 'articles').where({
    slug: route.params.slug
}).findOne();

const data = reactive({
    post: postData,
});

const formatDate = filters.formatDate;


// Example usage:
// const formattedDate = formatDate('2024-02-11');
// console.log(formattedDate); // Output: Feb 11th, 2024
</script>

<style lang="scss" scoped>
.post-hero {
  background-color: hsl(var(--rd-purple), 1);
  padding-block: var(--space-l-xl);
  gap: var(--space-m-l);
}

.post-hero__wrapper {
}

// .heading,
.tagline,
.brow,
.date {
  margin-top: var(--space-xs-s);
}


.heading {
  font-size: var(--step-4);
  font-weight: 100;
  line-height: 1.1;
  color: var(--white-color);
  margin-top: var(--space-3xs-2xs);
}

.tagline {
  font-size: var(--step-0);
  font-weight: 200;
  line-height: 1.5;
  color: var(--white-color);
  
}

.brow {
  font-size: var(--step-0);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1;
  color: hsla(var(--white-hsl), 0.4);
}

.date {
  font-size: var(--step-0);
  font-weight: 200;
  line-height: 1;
  color: var(--white-color);
}

a {
  
}
</style>
