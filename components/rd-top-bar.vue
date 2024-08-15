<template>
  <header class="top-bar">
    <nuxt-link to="/"><img src="/images/logos/rd4c-logo.svg" alt="Homepage"></nuxt-link>
    <rd-menu />
  </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.top-bar {
  display: grid;
  background: var(--base-color);
  grid-template-columns: 1fr auto;
  padding: var(--s1);
}

img {
  transform: scale(1.2);
  transform-origin: left center;
}
</style>
