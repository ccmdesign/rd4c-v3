<template>
  <article class="prose">
    <rd-content-grid>
      <slot></slot>
    </rd-content-grid>
  </article>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.prose {
  padding-block: var(--s3);
  
  :deep(* + *) {
    margin-top: var(--s-1);
  }
}
</style>
