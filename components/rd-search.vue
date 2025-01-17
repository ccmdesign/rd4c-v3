<script setup>
import { useStore } from '../store/searchStore';
const store = useStore();
const router = useRouter();
const route = useRoute();

let searchInput = ref(null);
const emit = defineEmits(['search']);

const createSearchQuery = async (e) => {

  if(searchInput.value) {

    store.setSearchValue(searchInput.value);
    store.setLastTerms(searchInput.value);

    if(route.path !== '/search') {
      router.push({ path: '/search' });
    }
  }
};
</script>

<template>
  <form @submit.prevent action="" class="rd-search">
    <i class="icon">search</i>
    <input v-model="searchInput" type="search">
    <button type="submit" class="button" @click="createSearchQuery()">Search</button>
  </form>
</template>

<style lang="scss" scoped>
.rd-search {
  position: relative;
  display: flex;
  min-width: 350px;
}

.rd-search input {
  width: 100%;
  background-color: hsla(var(--white-hsl), .1);
  border: 0;
  border-radius: var(--base-border-radius) 0 0 var(--base-border-radius);
  padding-left: var(--s2);
  color: var(--white-color);  
}

.rd-search .icon {
  position: absolute;
  height: 100%;
  padding: 0 var(--s-1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.rd-search button {
  padding-inline: var(--s0);
  border: 2px solid transparent;
  background-color: hsla(var(--white-hsl), .2);
}

.rd-search:focus-within {
  background-color: hsla(var(--white-hsl), .2);
  outline: 2px solid var(--accent-color);
  border-radius: var(--base-border-radius);

  input { outline: 0; }
  button { background-color: hsla(var(--primary-hsl), 1  ); }
  .icon { opacity: 1; }
}

.rd-search button:hover {
  background-color: hsla(var(--primary-hsl), .8);
}

.rd-search button {
  border-radius: 0 var(--base-border-radius) var(--base-border-radius) 0;
  outline: 0;
}

</style>
