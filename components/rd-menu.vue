<template>
  <nav class="menu" :class="{ 'menu--open': isMenuOpen }">
    <rd-button class="menu__toggle" @click="toggleMenu" icon-before="menu" visual="ghost" color="white"
        size="full-width" />

    <nuxt-link v-for="item in menuItems" :key="item.name" class="menu__item" :to="item.link" :target="item.target">{{
      $t(item.name) }}</nuxt-link>
    <div class="language-selector">
      <button class="menu__item" @click="toggleLangMenu">{{ activeLang }}</button>
      <ul class="submenu" v-if="isSubmenuActive">
        <nuxt-link if="activeLang.value != 'en'" :to="switchLocalePath('en')" class="menu__item" value="en"
          @click="switchLanguage('en')">EN</nuxt-link>
        <nuxt-link if="activeLang.value != 'es'" :to="switchLocalePath('es')" class="menu__item" value="es"
          @click="switchLanguage('es')">ES</nuxt-link>
        <nuxt-link if="activeLang.value != 'fr'" :to="switchLocalePath('fr')" class="menu__item" value="fr"
          @click="switchLanguage('fr')">FR</nuxt-link>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { useNavigation } from '@/composables/useNavigation';
const { locale } = useI18n()

const switchLocalePath = useSwitchLocalePath();

const { menuItems } = useNavigation();

const isMenuOpen = ref(false);
const isSubmenuActive = ref(false);
const activeLang = ref(locale.value);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function toggleLangMenu() {
  isSubmenuActive.value = !isSubmenuActive.value;
}

function switchLanguage(lang) {
  activeLang.value = lang;
  toggleLangMenu();
  toggleMenu();
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
    width: max-content;
    white-space: nowrap;
    
    &:hover {
      color: var(--accent-color);
    }
  }
  @media screen and (max-width: 768px) {
    --menu-height: 355px; // magic number calculated based on the number of menu items in useNavigation
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
      width: 100%;
      
    }

    &.menu--open { bottom: 0; }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    list-style: none;
    gap: var(--s1);
  }
}

.menu__toggle.menu__toggle.menu__toggle {
  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
    display: block;
    cursor: pointer;
    padding-block: var(--s-2) !important;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
}

.language-selector {
  button {
    all: unset;
    display: flex;
  }

  button:after {
    content: 'keyboard_arrow_down';
    color: white;
    font-family: var(--icon-font);
  }

  & { position: relative; }

  .submenu {
    @media screen and (min-width: 768px) {
      position: absolute;
      top: 80%;
      left: -35px;
      width: 10ch;
      text-align: center;
      background: var(--base-color);
      display: flex;
      flex-direction: column;
      gap: var(--s-1);
      padding: var(--s-1);
      box-shadow: 0 0 10px rgba(0, 0, 0, .52);
    }
  }
}


// .language-selector {
//   display: flex;
//   gap: var(--s-2);
// }

// .language-selector select {
//   all: unset; /* This will reset all inherited styles */
//   font-family: inherit; /* Ensure the font family is inherited */
//   font-size: inherit; /* Ensure the font size is inherited */
//   color: inherit; /* Ensure the color is inherited */
//   background: none; /* Remove any background */
//   border: none; /* Remove any border */
//   padding: 0; /* Remove any padding */
//   margin: 0; /* Remove any margin */
//   box-shadow: none; /* Remove any box shadow */
//   outline: none; /* Remove any outline */
//   text-align: inherit; /* Ensure text alignment is inherited */
//   appearance: none; /* Remove default browser appearance */
// }

</style>
