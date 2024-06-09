<template>
  <div>
    <pre>{{ content }}</pre>
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
