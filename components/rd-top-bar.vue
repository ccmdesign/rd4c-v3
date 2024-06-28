<template>
  <center-l measure="var(--wide)">
    <header class="top-bar">
      <nuxt-link to="/"><img src="/images/rd4c-logo.svg" alt="Homepage"></nuxt-link>
      <rd-menu />
    </header>
  </center-l>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
