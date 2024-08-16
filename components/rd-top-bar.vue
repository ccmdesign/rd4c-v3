<template>
  <header class="top-bar">
    <nuxt-link to="/" class="logo"><img src="/images/logos/rd4c-logo-white.svg" alt="Homepage"></nuxt-link><!-- @ToDo: Translate -->
    <rd-menu class="menu"/>
  </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.top-bar {
  display: flex;
  background: var(--base-color);
  grid-template-columns: 1fr auto;
  padding: var(--s1);
  justify-content: space-between;
  align-items: center;
}

.top-bar .logo { 
  flex: 0 1 400px; 
  min-width: 200px;
}
.top-bar .menu { 
  flex: 0; 
  margin-left: var(--s1);
  }
</style>
