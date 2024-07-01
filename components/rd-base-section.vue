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
.rd-base-section :deep(h2) {
  color: var(--primary-color);
  font-size: 2rem;
}
.rd-base-section :deep(h3) {
  color: var(--primary-color);
  font-size: 1.5rem;
}
.rd-base-section :deep(h4) {
  font-size: 1rem;
  font-weight: 900;
  color: var(--primary-color);
}
.rd-base-section :deep(p) {
  color: var(--base-color);
}

.rd-base-section[texture="true"] { background-image: url('/images/decor/data-bg-01.png'); }
.rd-base-section[decor="true"]   { 
  background-image: url('/images/decor/umbrella2.svg'); 
  background-position: 70px 30px;
  background-size: 120%;
  background-repeat: no-repeat;
}

.rd-base-section[bg="primary"] {
  background-color: var(--primary-color);
  :deep(*) { color: white !important; }
}
.rd-base-section[bg="secondary"] {
  background-color: var(--secondary-color);
  :deep(*) { color: white !important; }
}
.rd-base-section[bg="tertiary"] {
  background-color: var(--tertiary-color);
  :deep(*) { color: white !important; }
}
.rd-base-section[bg="accent"] {
  background-color: var(--accent-color);
  :deep(*) { color: white !important; }
}
.rd-base-section[bg="quaternary"] {
  background-color: var(--quaternary-color);
  :deep(*) { color: white !important; }
}
.rd-base-section[bg="base"] {
  background-color: var(--base-color);
  :deep(*) { color: white !important; }
}
.rd-base-section[bg="base-05"] {
  background-color: hsla(var(--base-hsl), .05);
  :deep(*) { color: var(--base-color); }
}
</style>
