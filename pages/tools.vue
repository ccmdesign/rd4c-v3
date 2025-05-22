<template>
  <rd-top-bar />
  <rd-base-section>
    <h1>Tools</h1>
    <h2>Repository</h2>
    <!-- <a href="https://docs.google.com/document/d/1GWAdhbJy4Y89TYvRL2eycuprJaDbW-yX8EuzjnObt2M/edit">Google Doc</a> -->
    <p>While we provide dedicated support to organizations around the world, we also try to give institutions the
      resources they need to succeed themselves. Check out our list of tools and other resources.</p>
  </rd-base-section>
  <section>
    <rd-card-grid>
      <rd-card v-for="post in articles" v-bind:key="post.slug" :content="post" />
    </rd-card-grid>
  </section>
</template>

<script setup>

</script>

<style scoped
  lang="scss"></style>
