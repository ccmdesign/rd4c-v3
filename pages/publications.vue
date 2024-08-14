<template>
  <div>
    <rd-hero :content="hero_content" />

    <rd-base-section>
      <h3 class="aux">[Interactive global map that can be clicked to display projects my continent]</h3>
    </rd-base-section>

    <rd-base-section>
      <p>The Responsible Data for Children initiative is a global effort that provides support, guidance, and training
        about the responsible handling of data for and about refugee children. We work closely with governments, UN
        offices, businesses, and others to understand the context in which they work and how we can reinforce the
        responsible practices they already rely on. We also offer suggestions on ways they might address possible gaps
        and challenges.</p>
      <p>This page highlights some of our most prominent work. Use the map above to filter by continent or look through
        the full collection of examples below.</p>
    </rd-base-section>
    <rd-divider content="Case Studies" color="purple" />
    <rd-base-section>
      <rd-card-grid>
        <rd-card v-for="i in caseStudies" v-bind:key="i.slug" :content="i" />
      </rd-card-grid>
    </rd-base-section>

    <rd-divider content="Resources" color="purple" />
    <rd-base-section>
      <rd-card-grid>
        <rd-card v-for="i in resources" v-bind:key="i.slug" :content="i" />
      </rd-card-grid>
    </rd-base-section>

    <rd-divider content="Reports" color="purple" />
    <rd-base-section>
      <rd-card-grid>
        <rd-card v-for="i in reports" v-bind:key="i.slug" :content="i" />
      </rd-card-grid>
    </rd-base-section>
  </div>
  <!-- <a href="https://docs.google.com/document/d/1GWAdhbJy4Y89TYvRL2eycuprJaDbW-yX8EuzjnObt2M/edit">Google Doc</a> -->
</template>

<script setup>
const hero_content = {
  title: "Publications",
  tagline: "The RD4C Case Studies aim to provide insights on promising practice as well as barriers to realizing responsible data for children.",
  image: "/images/hero/readings.jpg"
}

const resources = await queryContent('publications').where({"publication_type": 'resource'}).find();
const reports = await queryContent('publications').where({"publication_type": 'report'}).find();
const caseStudies = await queryContent('publications').where({"publication_type": 'case_study'}).find();

</script>

<style scoped
  lang="scss"></style>
