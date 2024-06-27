<template>
  <div class="rd-principle-card">
    <h3>{{ content.name }}</h3>
    <p>{{ content.tagline }}</p>
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

</style>
