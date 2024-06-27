<template>
  <div class="rd-principle-card">
    <stack-l>
      <h3>{{ content.name }}</h3>
      <p>{{ content.tagline }}</p>
    </stack-l>
  </div>
</template>

<script setup>
defineProps({
  content: {
    type: Object,
    required: true
  }
})

</script>

<style lang="scss" scoped>
.rd-principle-card {
  background-color: var(--base-color);
  padding: var(--s1);
  * { color: white !important;}

  @media screen and (max-width: 768px) {
    height: 70svh;
    box-sizing: border-box;
  }
}
</style>
