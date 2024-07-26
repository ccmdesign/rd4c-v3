<template>
  <div class="principle-card">
    <h3>{{content.name}}</h3>
    <h4>{{content.tagline}}</h4>
    <p>{{content.description}}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
    default: () => ({
      brow: '',
      heading: '',
      description: '',
      color: '',
      url: ''
    })
  }
});

</script>

<style lang="scss" scoped>
.principle-card {
  border: 1px solid #000;
  padding: 20px;
  margin: 10px;
}
</style>


