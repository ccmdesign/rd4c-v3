<template>
  <stack-l>
    <h4>{{ content.country }}</h4>
    <h3>{{ content.name }}</h3>
    <p>{{ content.excerpt }}</p>
    <cluster-l>
      <span class="chip" v-for="p in content.principle">{{ p }}</span>
    </cluster-l>
    <div>
      <rd-button el="a" :href="content.url" color="primary" target="_blank">Read More</rd-button>
    </div>

    <!-- <pre>
      {{ content }}
    </pre> -->
  </stack-l>
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
.chip {
  display: inline-block;
  padding: 0 0.5rem;
  font-weight: bold;
  border: 1px solid #000;
}
</style>
