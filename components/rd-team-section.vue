<template>
  <rd-split-section id="team" color="base-10">
    <h2>Maintaining a team of dedicated researchers and advocates</h2>
    <p>Learn about the team supporting the Responsible Data for Children initiative and the different projects they
      work on.</p>
    <p class="text-align:center"><rd-button to="/about#team" visual="secondary" color="primary">{{ $t('buttons.view-all') }}</rd-button></p>

    <template #extra>
      <div class="team-group">
        <rd-team-card v-for="member of team" :content="member" :key="member.id"/>
      </div>
    </template>
  </rd-split-section>
</template>

<script setup>
  const props = defineProps({
    team: Object,
  });


</script>

<style lang="scss" scoped>
.team-group {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
}
</style>
