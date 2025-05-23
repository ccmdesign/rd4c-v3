<template>
  <nav class="menu" :class="{ 'menu--open': isMenuOpen }" ref="menuRef">
    

    <rd-button class="menu__toggle" @click="toggleMenu" icon-before="menu" visual="ghost" color="white"
        size="full-width" />
        
    <rd-button class="search-trigger menu__item" icon-before="search" color="white" visual="ghost" popovertarget="search-trigger" @click="delegateFocus"></rd-button>
    
    <div v-for="item in menuItems" >

      <div v-if="item.subMenu" class="language-selector">
        <button class="menu__item" @click="toggleSubMenu">{{ $t(item.name) }}</button>
        <ul class="submenu" v-if="mainSubItem" @mouseleave="mainSubItem=false">

          <div v-for="subItem in item.subMenu" :key="subItem.name">
            <nuxt-link :to="localePath(subItem.link)" class="menu__item">{{ $t(subItem.name) }}</nuxt-link>
          </div>
        </ul>
      </div>

      <nuxt-link v-else :key="item.name" class="menu__item" :to="localePath(item.link)" :target="item.target">{{
      $t(item.name) }}</nuxt-link>
    </div>
    
    <div class="language-selector">
      <button class="menu__item" @click="toggleLangMenu">{{  $t(`languages.${activeLang}`) }}</button>
      <ul class="submenu" v-if="isSubmenuActive">

        <div v-for="locl in locales">
          <nuxt-link :if="activeLang.value != locl.code" :to="switchLocalePath(locl.code)" class="menu__item" :value="locl.code"
            @click="switchLanguage(locl.code)">{{  $t(`languages.${locl.code}`) }}</nuxt-link>
        </div>
      </ul>
    </div>

  </nav>
</template>

<script setup>
import { useNavigation } from '@/composables/useNavigation';
const { locale, locales } = useI18n()

const switchLocalePath = useSwitchLocalePath();

const { menuItems } = useNavigation();

const isMenuOpen = ref(false);
const activeLang = ref(locale.value);
const menuRef = ref(null);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

const subMenuWidth = ref('10ch');
const isSubmenuActive = ref(false);
function toggleLangMenu() {
  isSubmenuActive.value = !isSubmenuActive.value;
  subMenuWidth.value = '10ch';
  mainSubItem.value = false;
}

const mainSubItem = ref(false);
function toggleSubMenu() {
  mainSubItem.value = !mainSubItem.value;
  subMenuWidth.value = '20ch';
  isSubmenuActive.value = false;
}

function switchLanguage(lang) {
  activeLang.value = lang;
  toggleLangMenu();
  toggleMenu();
}

function updateMenuHeight() {
  if (menuRef.value) {
    const height = menuRef.value.scrollHeight - 50;
    document.documentElement.style.setProperty('--menu-height', `${height}px`);
  }
}

// Optionally, you can add a watcher to close the menu when the route changes
watch(() => useRoute().path, () => {
  isMenuOpen.value = false;
});

onMounted(() => {
  nextTick(() => {
    updateMenuHeight();
  });
});

// Update height when submenu opens/closes
watch(isSubmenuActive, () => {
  nextTick(() => {
    updateMenuHeight();
  });
});

const route = useRoute();
const delegateFocus = (e) => {
  if(route.path === '/search') {
    e.preventDefault();
    const searchInput = document.querySelector('article div .rd-search input');
    searchInput.focus();
  }
}
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
    transition: all .3s ease-in-out;
    position: fixed;
    display: flex;
    flex-direction: column;
    z-index: 1000;
    width: 100%;
    height: auto;
    bottom: calc(-1 * var(--menu-height));
    overflow: hidden;
    left: 0;
    background: var(--primary-color);
    margin: 0;
    text-align: center;

    .menu__item {
      display: block;
      padding: var(--s-1) 0;
      border-bottom: 1px solid hsla(var(--white-hsl), .2);
      width: 100%;
    }

    &.menu--open { bottom: 0; }


    .search-trigger { order: 1; }

  }

  @media screen and (min-width: 768px) {
    display: flex;
    list-style: none;
    gap: var(--s1);
  }

  .search-trigger {
    order: 1;
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
      width: v-bind(subMenuWidth);
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
