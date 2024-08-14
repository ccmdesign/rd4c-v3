<template>
  <div>
    <rd-hero :content="hero_content" />

    <rd-base-section >
      <center-l measure="var(--wide)" class="columns">
        <p>RD4C seeks to build awareness regarding the need for special attention to data issues affecting
          children—especially in this age of changing technology and data linkage; and to engage with governments,
          communities, and development actors to put the best interests of children and a child rights approach at the
          center of our data activities. The right data in the right hands at the right time can significantly improve
          outcomes for children. The challenge is to understand the potential risks and ensure that the collection,
          analysis and use of data on children does not undermine these benefits.</p>
        <p>Drawing upon field-based research and established good practice, RD4C aims to highlight and support best
          practice in our work; identify challenges and develop practical tools to assist practitioners in evaluating
          and addressing them; and encourage a broader discussion on actionable principles, insights, and approaches for
          responsible data management.</p>
        <p><rd-button color="primary">Download the Report</rd-button></p>
      </center-l>
    </rd-base-section>

    <rd-divider content="Principles" color="green"/>
      

    <rd-base-section>
      <div class="principles-grid">
        <rd-principle-card class="principles-grid__item" v-for="(i, index) in principles" :content="i" :data-n="index + 1" :n="index+1"/>
      </div>
    </rd-base-section>
  </div>
  <!-- <a href="https://docs.google.com/document/d/1GWAdhbJy4Y89TYvRL2eycuprJaDbW-yX8EuzjnObt2M/edit">Google Doc</a> -->
</template>

<script setup>

const hero_content = {
  title: "Principles",
  tagline: "Principles to guide responsible data handling toward saving children’s lives, defending their rights, and helping them fulfill their potential from early childhood through adolescence.",
  image: "/images/hero/pencils.png"
}

const principles = await queryContent('principles').find();

</script>

<style scoped lang="scss">
.principles-grid {
  display: grid;
  gap: var(--s-1);
  grid-template-columns: 1fr;
  grid-row: auto;
}

.principles-grid__item {
}

.columns {
  * + * { margin-top: var(--s-1);}

  @media screen and (min-width: 768px) {
    columns: 2;
    column-gap: var(--s2);
  }
  
}


</style>
