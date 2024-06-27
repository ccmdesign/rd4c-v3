<template>
  <div>
    <a href="https://docs.google.com/document/d/1GWAdhbJy4Y89TYvRL2eycuprJaDbW-yX8EuzjnObt2M/edit">Google Doc</a>
    <h1>{{data.post.title}}</h1>
    <p>{{ data.post.description }}</p>
    <contentDoc></contentDoc>
  </div>
</template>

<script setup>
    const route = useRoute()

    const postData = await queryContent('articles').where({
        slug: route.params.slug
    }).findOne();

    const data = reactive({
        post: postData,
    });
</script>

<style lang="scss" scoped>

</style>
