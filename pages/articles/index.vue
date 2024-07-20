<template>
  <!-- Estou tomando um erro nessa página -->

  <div>
    <rd-hero :content="hero_content" />
    <base-section>
      <div class="list">
        <rd-update-card v-for="post in data.articles" v-bind:key="post.slug" :content="post" />
      </div>
    </base-section>

  </div>
</template>

<script setup>
const hero_content = {
  title: 'Responsible Data for Children',
  tagline: 'Guidance, tools and leadership to support the responsible handling of data for and about children.',
}
  
  const articles = await queryContent('articles').find();
  
  const data = reactive({
      articles: [],
  });

  articles.forEach(post => {
    const article = {
      title: post.title,
      description: post.description,
      slug: post.slug,
      url: `/articles/${post.slug}`
    }
    data.articles.push(article);
  });

</script>

<style lang="scss" scoped>

</style>
