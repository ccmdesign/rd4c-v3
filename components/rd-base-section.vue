<template>
  <base-section class="rd-base-section" :texture="texture" :decor="decor" :color="color" :bg="bg">
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
defineProps({
  texture: {
    type: Boolean,
    default: false
  },
  decor: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: ''
  },
  bg: {
    type: String,
    default: ''
  }
})

</script>

<style lang="scss" scoped>
.rd-base-section :slotted(h2) {
  color: var(--primary-color);
  font-size: 2rem;
}
.rd-base-section :slotted(h3) {
  color: var(--primary-color);
  font-size: 1.5rem;
}
.rd-base-section :slotted(h4) {
  font-size: 1.25rem;
  font-weight: 900;
  color: var(--primary-color);
}
.rd-base-section :slotted(p) {
  font-size: 1.25rem;
  color: var(--base-color);
}

.rd-base-section[color="tertiary"] {
  background: var(--tertiary-color);
}
</style>
