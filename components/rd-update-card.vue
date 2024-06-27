<template>
  <div class="rd-update-card">
    <h3><nuxt-link :to="content.url">{{ content.title }}</nuxt-link></h3>
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
