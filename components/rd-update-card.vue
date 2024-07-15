<template>
  <rd-colored-card class="rd-update-card" />
</template>

<script setup>

</script>

<style lang="scss" scoped>
.rd-update-card {
  border: 1px solid var(--base-color);
  padding: var(--s1);

  * {
    color: var(--base-color);
  }

  @media screen and (max-width: 768px) {
    height: 70svh;
    box-sizing: border-box;
  }
}

</style>
