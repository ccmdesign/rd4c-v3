<template>
  <div class="rd-team-card">
    <img :src="content.image" :alt="content.name">
    <h4>{{content.name}}</h4>
    <h5>{{ content.organization }}</h5>
    <div><base-button icon-after="arrow_forward" visual="primary" color="primary">Bio</base-button></div>
  </div>
</template>

<script setup>
defineProps({
  content: {
    type: Object,
    required: true
  }
})

</script>

<style lang="scss" scoped>
// Need a modal window with the full description
.rd-team-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--s1);
  gap: var(--s-1);
}

.rd-team-card img {
  border-radius: 50%;
  height: 250px;
  width: 250px;
  object-fit: cover;
}
</style>
