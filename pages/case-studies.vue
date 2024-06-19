<template>
  <div>
    <h1>Case Studies</h1>
    <div class="aux">
      <a href="https://docs.google.com/document/d/1GWAdhbJy4Y89TYvRL2eycuprJaDbW-yX8EuzjnObt2M/edit">Google Doc</a>
      <p>[Interactive global map that can be clicked to display projects my continent]</p>
      <p>The Responsible Data for Children initiative is a global effort that provides support, guidance, and training about the responsible handling of data for and about refugee children. We work closely with governments, UN offices, businesses, and others to understand the context in which they work and how we can reinforce the responsible practices they already rely on. We also offer suggestions on ways they might address possible gaps and challenges.</p>
      <p>This page highlights some of our most prominent work. Use the map above to filter by continent or look through the full collection of examples below.</p>
    </div>
    <ul>
      <li v-for="i in caseStudies">
        <rd-case-study-card :content="i"/> 
      </li>
    </ul>
  </div>
</template>

<script setup>

const caseStudies = await queryContent('case-studies').find();

</script>

<style scoped
  lang="scss"></style>
