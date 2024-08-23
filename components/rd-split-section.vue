<template>
  <section class="rd-split-section auto-grid" :image="image" data-layout="50-50">
    <div class="panel" :class="image ? 'panel--image' : ''">
      <slot name="extra">
        <img :src="image" alt="">
      </slot>
    </div>

    <div class="panel panel--content">
      <slot></slot>
    </div>
  </section>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    default: ''
  },
  video: {
    type: String,
    default: ''
  }
});

</script>

<style lang="scss" scoped>
.rd-split-section {
  --_padding-inline: var(--space-s-xl);
  --_padding-block: var(--space-m-xl);
  --_gap: var(--space-m-l);
  --gutter: 0;
}

@media screen and (min-width: 768px) {
  .rd-split-section:nth-of-type(odd) {
    .panel--image { order: 2; }
    .panel--content { text-align: right; }
  }
}

.panel {
  padding-inline: var(--_padding-inline);
  
}

.panel--image {
  @media screen and (min-width: 1400px) { aspect-ratio: 1 / 1; }
  
  & {
    object-position: center;
    padding-inline: 0;
  }

  img {
    object-fit: cover;
    height: 100%;
  }
}

.panel--content {
  display: flex;
  flex-direction: column;
  gap: var(--_gap);
  justify-content: center;
  padding: var(--_padding-block) var(--_padding-inline);

}</style>
