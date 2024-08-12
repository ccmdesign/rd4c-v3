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

    <rd-base-section>
      <ul>
        <!-- Essa lista vai mudar para "publications", e vai receber Reports, Case Studies, Resources 
          https://www.notion.so/ccmdesign/Conte-do-Publications-4dc0dc1d4d4743daa2d746818211aed6?pvs=4
        -->
        <h3>Case Studies</h3>
        <li v-for="i in caseStudies">
          <rd-publication-card :content="i" />
          <pre>{{ i }}</pre>
        </li>

        <h3>Resources</h3>
        <li v-for="i in resources">
          <rd-publication-card :content="i" />
        </li>

        <h3>Reports</h3>
        <li v-for="i in reports">
          <rd-publication-card :content="i" />
        </li>

      </ul>
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
