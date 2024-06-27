<template>
  <header class="top-bar">
    <img src="/images/rd4c-logo.svg" alt="">
    <nav>
      <ul class="menu">
        <li v-for="item in menuItems" :key="item.name">
          <nuxt-link :to="item.link" :target="item.target">{{ item.name }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { useNavigation } from '~/pages/composables/useNavigation';

const { menuItems } = useNavigation();

</script>

<style lang="scss" scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  margin-inline: var(--s1);
}

.menu {
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    list-style: none;
    gap: var(--s1);
  }
}
</style>
