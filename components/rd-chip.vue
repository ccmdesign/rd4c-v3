<template>
  <ccm-chip class="rd-chip" :color="color">
    <slot></slot>
  </ccm-chip>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    required: true
  }
});

</script>

<style lang="scss" scoped>
.rd-chip[color="0"]  { color: hsla(var(--rd-blue), 1); }
.rd-chip[color="1"]  { color: hsla(var(--rd-red), 1); }
.rd-chip[color="2"]  { color: hsla(var(--rd-teal), 1); }
.rd-chip[color="3"]  { color: hsla(var(--rd-green), 1); }
.rd-chip[color="4"]  { color: hsla(var(--rd-orange), 1); }
.rd-chip[color="5"]  { color: hsla(var(--rd-purple), 1); }
.rd-chip[color="6"]  { color: hsla(var(--rd-yellow), 1); }
</style>
