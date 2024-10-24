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
.rd-chip[color="Participatory"]  { color: hsla(var(--rd-blue), 1); }
.rd-chip[color="Proportional"]  { color: hsla(var(--rd-red), 1); }
.rd-chip[color="Purpose-Driven"]  { color: hsla(var(--rd-teal), 1); }
.rd-chip[color="People-Centric"]  { color: hsla(var(--rd-green), 1); }
.rd-chip[color="Prevention of Harms Across the Data Life Cycle"]  { color: hsla(var(--rd-orange), 1); }
.rd-chip[color="Professionally Accountable"]  { color: hsla(var(--rd-purple), 1); }
.rd-chip[color="Protective of Children’s Rights"]  { color: hsla(var(--rd-yellow), 1); }
</style>
