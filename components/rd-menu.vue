<template>
  <nav class="menu" :class="{ 'menu--open': isMenuOpen }">
    <rd-button @click="toggleMenu" class="menu__toggle" icon-before="menu" visual="ghost" color="white" size="full-width" /> 
    <nuxt-link v-for="item in menuItems" :key="item.name" class="menu__item" :to="item.link" :target="item.target">{{
      $t(item.name) }}</nuxt-link>

  </nav>
</template>

<script setup>
import { useNavigation } from '@/composables/useNavigation';

const { menuItems } = useNavigation();

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

// Optionally, you can add a watcher to close the menu when the route changes
watch(() => useRoute().path, () => {
  isMenuOpen.value = false;
});




onMounted(() => {
  nextTick(() => {
    const menuElement = document.querySelector('.menu');
    const height = menuElement ? menuElement.scrollHeight : 0;
    document.documentElement.style.setProperty('--menu-height', `${height}px`);
  });
});
</script>

<style lang="scss" scoped>
.menu {
  @media screen and (max-width: 768px) {
    --menu-height: 280px; // magic number calculated based on the number of menu items in useNavigation
    transition: all .3s ease-in-out;
    position: fixed;
    display: block;
    z-index: 1000;
    width: 100%;
    height: auto;
    bottom: calc(-1 * var(--menu-height));
    overflow: hidden;
    left: 0;
    background: var(--base-color);
    margin: 0;
    text-align: center;

    .menu__item {
      display: block;
      padding: var(--s-1) 0;
      color: var(--white-color);
      text-decoration: none;
      font-weight: 500;
      border-bottom: 1px solid hsla(var(--white-hsl), .2);
    }

    &.menu--open { bottom: 0; }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    list-style: none;
    gap: var(--s1);
  }
}

.menu__toggle {
  @media screen and (min-width: 768px) { display: none; }

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
    display: block;
    cursor: pointer;
    padding-block: var(--s-2) !important;
  }
}
</style>
