<script setup>
  import { useStore } from '../store/searchStore';
  const store = useStore();
  const props = defineProps({
  isSearching: {
    type: Boolean,
    default: false
  }
});

</script>

<template>
  <div v-if="isSearching" class="skeleton-cards">
    <div v-for="i in 2" :key="i" class="skeleton-card">
      <div class="skeleton-card__header"></div>
      <div class="skeleton-card__body">
        <div class="skeleton-card__line"></div>
        <div class="skeleton-card__line"></div>
        <div class="skeleton-card__line"></div>
        <div class="skeleton-card__line skeleton-card__summary-line"></div>
      </div>
    </div>
  </div>
  <div v-else-if="store.lastSearchResults.length === 0 && store.attempts > 0">
    <div class="search-text">
      <h2>Try again or search a different term...</h2>
    </div>
  </div>
  <div v-else>
    <div class="search-text">
      <h2>Search something...</h2>
    </div>
  </div>
</template>

<style scoped>

.search-text {
  display: flex;
  justify-content: center;
  padding: 10rem;
}
.skeleton-cards {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  animation: fadeInOut 2s infinite;
}

@keyframes fadeInOut {
  0% { opacity: 0.1; }
  50% { opacity: 1; }
  100% { opacity: 0.1; }
}

.skeleton-card {
  --_skeleton-color: hsla(var(--primary-hsl), .15);
}

.skeleton-card {
  display: flex;
  gap: 1rem;
  background-color: transparent;
  border-radius: 5px;
  padding: 1rem;
  width: 60%;
  height: 200px;
}

.skeleton-card__header {
  width: 30%;
  height: 100%;
  background-color: var(--_skeleton-color);
  border-radius: 5px;
  margin-bottom: 1rem;
}

.skeleton-card__body {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skeleton-card__line {
  background-color: var(--_skeleton-color);
  border-radius: 5px;
  height: 10px;
}

.skeleton-card__summary-line {
  background-color: var(--_skeleton-color);
  border-radius: 5px;
  height: 100%;
  width: 100%;
}
</style>