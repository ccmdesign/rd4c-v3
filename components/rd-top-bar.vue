<template>
  <header class="top-bar">
    <nuxt-link to="/" class="logo"><img src="/images/logos/rd4c-logo-white.svg" alt="Homepage"></nuxt-link><!-- @ToDo: Translate -->
    <div class="menu-wrapper">
      <rd-menu class="menu"/>
      <rd-search />
    </div>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.menu-wrapper {
  display: flex;
  flex: 0 1 45%;
  align-items: baseline;
  gap: 15px;
}


.top-bar {
  display: flex;
  background: var(--base-color);
  grid-template-columns: 1fr auto;
  padding: var(--s1);
  gap: var(--s1);
  justify-content: space-between;
  align-items: center;
}

.top-bar .logo { 
  flex: 0 1 400px; 
  min-width: 200px;
}
.top-bar .menu { 
  flex: 0; 
}
</style>
