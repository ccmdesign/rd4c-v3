<template>
  <base-section class="rd-base-section">
    <slot name="custom">
      <center-l measure="var(--wide)">
        <stack-l>
          <slot></slot>
        </stack-l>
      </center-l>
    </slot>
  </base-section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.rd-base-section :deep(h2) {
  color: var(--primary-color);
  font-size: 2rem;
}
.rd-base-section :deep(h3) {
  color: var(--primary-color);
  font-size: 1.5rem;
}
.rd-base-section :deep(h4) {
  font-size: 1.25rem;
  font-weight: 900;
  color: var(--primary-color);
}
.rd-base-section :deep(p) {
  font-size: 1.25rem;
  color: var(--base-color);
}

.rd-base-section[color="tertiary"] {
  background: var(--tertiary-color);
}
</style>
