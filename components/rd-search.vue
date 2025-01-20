<template>
  <form @submit.prevent action="" class="rd-search">
    <input :id="'search-input' + uniqueId" v-model="searchInput" type="search" placeholder="Try our Ai Powered Search">
    <button type="submit" class="button" @click="createSearchQuery()">Search</button>
  </form>
</template>

<script setup>
import { useStore } from '../store/searchStore';
import { v4 as uuidv4 } from 'uuid';
const store = useStore();
const router = useRouter();
const route = useRoute();


const uniqueId = ref(uuidv4());
const searchInput = ref(store.searchValue);
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

<style lang="scss" scoped>
.rd-search {
  position: relative;
  display: flex;
  // width: 100%;
  flex-direction: column;
  justify-content: center;
  gap: var(--s0);
  
  @media screen and (min-width: 480px) {
    flex-direction: row;
    gap: 0;
  }
}

.rd-search {
  --_search-border-color: transparent;
  --_search-color: var(--white-color);

  input {
    border-radius: var(--base-border-radius);
    width: fill-available;
    @media screen and (max-width: 480px) {
      
    }
    @media screen and (min-width: 480px) {
      border-radius: var(--base-border-radius) 0 0 var(--base-border-radius);
    }
  }
  
  button {
    border-radius: var(--base-border-radius);
    
    @media screen and (max-width: 480px) {
      width: fill-available;  
    }
    @media screen and (min-width: 480px) {
      border-radius: 0 var(--base-border-radius) var(--base-border-radius) 0;
    }
  }
}

.rd-search input {
  background-color: hsla(var(--white-hsl), .1);
  border: var(--base-border-width) solid var((--_search-border-color));
  margin-right: calc(var(--base-border-width) * -1);

  padding-inline: var(--s1);
  @media screen and (max-width: 480px) {
      padding-block: var(--s0);
    }
  color: var(--_search-color);
  
  &::placeholder { color: var(--_search-color); }
}

// .rd-search button {
//   border-color: transparent;
//   background-color: hsla(var(--white-hsl), .4);
// }

.rd-search:focus-within {
  input {
    outline: 2px solid hsla(var(--white-hsl), .2);
  }

  input + button {
    background-color: hsla(var(--accent-hsl), 1);
    border-color: transparent;
  }

  input { outline: 0; }
  
}

</style>
