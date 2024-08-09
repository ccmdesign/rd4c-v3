<template>
  <nav class="menu" :class="{ 'menu--open': isMenuOpen }">
    <rd-button @click="toggleMenu" class="menu__toggle" icon-before="menu" visual="ghost" color="white" size="full-width" /> 
    <nuxt-link v-for="item in menuItems" :key="item.name" class="menu__item" :to="item.link" :target="item.target">{{
      $t(item.name) }}</nuxt-link>
    <div class="language-selector">
        <nuxt-link class="menu__item" value="en">EN</nuxt-link>
        <nuxt-link class="menu__item" value="es">ES</nuxt-link>
        <nuxt-link class="menu__item" value="fr">FR</nuxt-link>
    </div>
    
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

  .menu__item {
    color: var(--white-color);
    text-decoration: none;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: .5px;

    &:hover {
      color: var(--primary-color);
    }
  }
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

.language-selector {
  display: flex;
  gap: var(--s-2);
}

.language-selector select {
  all: unset; /* This will reset all inherited styles */
  font-family: inherit; /* Ensure the font family is inherited */
  font-size: inherit; /* Ensure the font size is inherited */
  color: inherit; /* Ensure the color is inherited */
  background: none; /* Remove any background */
  border: none; /* Remove any border */
  padding: 0; /* Remove any padding */
  margin: 0; /* Remove any margin */
  box-shadow: none; /* Remove any box shadow */
  outline: none; /* Remove any outline */
  text-align: inherit; /* Ensure text alignment is inherited */
  appearance: none; /* Remove default browser appearance */
}

.language-selector:after {
  content: 'keyboard_arrow_down';
  color: white;
  font-family: var(--icon-font);
}
</style>
