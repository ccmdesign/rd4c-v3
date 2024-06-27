<template>
  <div>
    <rd-hero>
      <h1>Case Studies</h1>
      <p>The RD4C Case Studies aim to provide insights on promising practice as well as barriers to realizing
        responsible data for children.</p>
    </rd-hero>

    <base-section>
      <p>[Interactive global map that can be clicked to display projects my continent]</p>
    </base-section>

    <base-section>
      <p>The Responsible Data for Children initiative is a global effort that provides support, guidance, and training
        about the responsible handling of data for and about refugee children. We work closely with governments, UN
        offices, businesses, and others to understand the context in which they work and how we can reinforce the
        responsible practices they already rely on. We also offer suggestions on ways they might address possible gaps
        and challenges.</p>
      <p>This page highlights some of our most prominent work. Use the map above to filter by continent or look through
        the full collection of examples below.</p>
    </base-section>

    <base-section>
      <ul>
        <li v-for="i in caseStudies">
          <rd-case-study-card :content="i" />
        </li>
      </ul>
    </base-section>
  </div>
  <!-- <a href="https://docs.google.com/document/d/1GWAdhbJy4Y89TYvRL2eycuprJaDbW-yX8EuzjnObt2M/edit">Google Doc</a> -->
</template>

<script setup>

const caseStudies = await queryContent('case-studies').find();

</script>

<style scoped
  lang="scss"></style>
