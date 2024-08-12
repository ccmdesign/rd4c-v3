<template>
  <div>
    <rd-hero :content="hero_content" />

    <!-- Essa lista vai mudar para "videos", e vai receber Bites and Lessons, Webinars, Explainers
          https://www.notion.so/ccmdesign/Conte-do-Videos-312685a4148d40c98e251b47c1c933d8?pvs=4
        -->



    <rd-base-section>
      <h2>RD4C Bites & Lessons from the Field</h2>
      <p>Short videos highlighting responsible data practices from governments, UN offices, research centers, and other
        partners around the world.</p>

      <h3 class="aux">Lista pré-filtrada do Directus > Videos > Bites</h3>
    </rd-base-section>

    <rd-base-section>
      <h2>Recorded Webinars and Lectures</h2>
      <p>Recordings of our efforts to train data professionals and disseminate the Responsible Data for Children
        approach</p>

      <h3 class="aux">Lista pré-filtrada do Directus > Videos > Webinars</h3>
    </rd-base-section>

    <rd-base-section>
      <h2>What is Responsible Data for Children?</h2>
      <p>Videos explaining the value of the Responsible Data for Children initiative, available in different languages.
      </p>
      <h3 class="aux">Lista pré-filtrada do Directus > Videos > Explainers</h3>
    </rd-base-section>

    <rd-base-section>
      <h2>Be the first to know</h2>
      <p>The Responsible Data for Children initiative regularly releases videos explaining its work and the work of its
        partners. Here’s a few of our video series that you might be interested in. If you would like to stay up to date
        with our latest releases, please subscribe to our YouTube channel or fill out the form here.</p>

      <h3 class="aux">Newsletter Signup form</h3>
    </rd-base-section>
  </div>
</template>

<script setup>
const hero_content = {
  title: "Videos",
  tagline: "Need tagline",
  image: "/images/hero/readings.jpg"
}



</script>

<style scoped
  lang="scss"></style>
