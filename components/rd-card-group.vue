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
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: var(--s0);

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: var(--s2);
  }

}
</style>
