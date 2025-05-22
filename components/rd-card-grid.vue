<template>
  <div class="rd-card-grid">
    <slot></slot>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.rd-card-grid {
  --_padding-inline: 1rem;
  --_content-max-width: 960px;
}

.rd-card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--s1);
  
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(min(400px, 100%), 1fr));
  }
}
</style>
