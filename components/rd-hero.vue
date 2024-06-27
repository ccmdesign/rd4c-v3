<template>
  <header class="rd-hero" :bg="content.image ? content.image : false">
    <rd-top-bar />
    <center-l measure="var(--wide)">
      <slot>
        <h5 v-if="content.brow">{{ content.brow }}</h5>
        <h2 class="rd-hero__title">{{ content.title }}</h2>
        <h4 class="rd-hero__tagline">{{ content.tagline }}</h4>
        <div v-if="content.action">
          <base-button visual="primary" color="primary">{{ content.action.label }}</base-button>
        </div>
      </slot>
    </center-l>
  </header>
</template>

<script setup>
defineProps({
  content: {
    type: Object,
    required: true,
    default: () => ({
      // brow: '',
      title: 'Title',
      tagline: 'tagline',
      image: '/images/image.jpg',
      // action: {
      //   label: 'Action',
      //   link: '/'
      // }
    })
  }
})

</script>

<style lang="scss" scoped>

</style>
