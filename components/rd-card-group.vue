<template>
  <div class="rd-card-group">
      <slot></slot>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.rd-card-group {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: var(--s2);
}
</style>
