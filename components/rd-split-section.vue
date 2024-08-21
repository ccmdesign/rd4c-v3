<template>
  <section class="rd-split-section auto-grid" :image="image" data-layout="50-50">
    <div class="panel panel--image">
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
  --_padding-inline: var(--s0);
  --_padding-block: var(--s2);
  --_gap: var(--s1);

  @media screen and (min-width: 768px) {
    --_padding-inline: var(--s3);
    --_padding-block: var(--s3);
    --_gap: var(--s0);
  }
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
  @media screen and (min-width: 768px) { aspect-ratio: 1 / 1; }
  object-position: center;

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
