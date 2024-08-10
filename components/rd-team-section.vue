<template>
  <section id="team">
    <center-l size="wide">
      <h2>Maintaining a team of dedicated researchers and advocates</h2>
      <p>Learn about the team supporting the Responsible Data for Children initiative and the different projects they
        work on.</p>
      <p class="text-align:center"><rd-button to="/about#team" visual="secondary" color="primary">{{
          $t('buttons.view-all') }}</rd-button></p>
    </center-l>

    <div class="team-group">
      <div class="team-card" v-for="member of team" :content="member" :key="member.id"
        :style="{ '--bg': `url(${member.image})` }">
      </div>
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
    team: Object,
    bg: String
  });


</script>

<style lang="scss" scoped>
.team-group {
  margin-top: var(--s2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.team-card {
  aspect-ratio: 1/1;
  max-width: auto;
  background-image: var(--bg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
