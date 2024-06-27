<template>
  <div>
    <h3><nuxt-link :to="content._path">{{ content.name }}</nuxt-link></h3>
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

</style>
